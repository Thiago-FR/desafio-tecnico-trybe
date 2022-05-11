const mockData = [{
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

export function fetchApiMock() {
  return mockData;
}

export default async function fetchApi() {
  const resolve = await fetch('')
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
  return resolve;
}
