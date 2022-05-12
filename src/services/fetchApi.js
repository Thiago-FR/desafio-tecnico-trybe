const mockData = [
  {
    id: 1,
    task: 'front-end',
    date: new Date().getDate(),
    status: 'Pendente',
    responsible: 'Thiago'
  },
  {
    id: 2,
    task: 'front-end',
    date: new Date().getDate(),
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
