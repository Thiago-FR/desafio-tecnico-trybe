const mockData = [
  {
    id: 1,
    task: 'front-end',
    date: "2022-05-10",
    status: 'Pendente',
    responsible: 'Thiago'
  },
  {
    id: 2,
    task: 'back-end',
    date: "2022-05-01",
    status: 'Pendente',
    responsible: 'Thiago'
  }]

export function fetchApiMock(setData) {
  setData([...mockData]);
}

export function fetchApiMockAdd({ task, responsible }) {
  const newData = {
    id: mockData.length,
    task,
    date: "11",
    status: 'Pendente',
    responsible,
  }
  mockData.push(newData);
}

const URL = 'http://localhost:3001/api/todo-list';

export async function fetchFindAll(setData) {
  await fetch(`${URL}`)
    .then((data) => data.json())
    .then((data) => {
      setData([...data])
    });
};

export async function fetchCreate(data) {
  await fetch(`${URL}`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export async function fetchUpdate(data, id) {
  await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
