"use strict";

fetch('../united.json').then(function (response) {
  return response.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.log(error);
});