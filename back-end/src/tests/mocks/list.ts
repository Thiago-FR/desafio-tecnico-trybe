export const createList = {
  "task": "test",
  "status": "Pendente",
  "responsible": "testando"
}

export const createListBadRequest_1 = {
  "task": "",
  "status": "Pendente",
  "responsible": "testando"
}

export const createListBadRequest_2 = {
  "task": "test",
  "status": "Pendente",
  "responsible": ""
}

export const createListBadRequest_3 = {
  "status": "Pendente",
  "responsible": ""
}

export const createListBadRequest_4 = {
  "task": "test",
  "status": "Pendente",
}

export const updateList = {
  "task": "test",
  "status": "Pronto",
  "responsible": "testando"
}

export const listOne = {
  "id": 1,
  "task": "test",
  "date": "2022-05-13T18:09:08.859Z",
  "status": "Pendente",
  "responsible": "testando"
}

export const updateListOne = {
  "id": 1,
  "task": "test",
  "date": "2022-05-13T18:09:08.859Z",
  "status": "Pronto",
  "responsible": "testando"
}

export const listAll = [
  {
    "id": 1,
    "task": "test",
    "date": "2022-05-13T18:09:08.859Z",
    "status": "Pendente",
    "responsible": "testando"
  },
  {
    "id": 2,
    "task": "test2",
    "date": "2022-05-13T18:09:08.859Z",
    "status": "Pendente",
    "responsible": "testando2"
  }
]