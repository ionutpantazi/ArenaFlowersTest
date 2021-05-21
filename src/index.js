fetch('../united.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(error));