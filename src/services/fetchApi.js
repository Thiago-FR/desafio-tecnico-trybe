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

export async function fetchFindAll(setData) {
  await fetch('')
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      setData([...data])
    });
};
