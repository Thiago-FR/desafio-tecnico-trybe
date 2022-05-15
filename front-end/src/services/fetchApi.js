const URL = 'http://localhost:3001/api/todo-list';

export async function fetchFindAll(setData) {
  await fetch(`${URL}`)
    .then((data) => data.json())
    .then((data) => {
      setData([...data])
    })
    .catch((err) => console.log(err.message));
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

export async function fetchRemove(id) {
  console.log(id);
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: { "Content-Type": "application/json" },
  });
};
