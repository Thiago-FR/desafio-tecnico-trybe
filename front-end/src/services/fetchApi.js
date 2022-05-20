const URL = `${process.env.REACT_APP_HOST}/api/todo-list`;

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
  })
  .catch((err) => console.log(err.message));;
};

export async function fetchUpdate(data, id) {
  await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .catch((err) => console.log(err.message));;
};

export async function fetchRemove(id) {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: { "Content-Type": "application/json" },
  })
  .catch((err) => console.log(err.message));;
};
