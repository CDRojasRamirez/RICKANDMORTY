const axios = require("axios");

let array = [];

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(
    (response) => response.data
    //   (err) => console.log(`Ocurrio un error: ${err}`)
  )
  .then((data) => {
    data.map((datita) => array.push(datita.username)), console.log("Primera muestra: " + array);
  })
  .catch((err) => err);

console.log(array);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((datita) => array.push(datita.username)), console.log("Segunda muestra: " + array);
//   })
//   .catch((err) => err);

// const promesa = new Promise((resolve, reject) => {

//     const a = 2, b = 3, c = a + b;
//     if(c < a){
//         resolve('Todo ok')
//     }
//     else{
//         reject('Todo mal')
//     }
// });

// promesa
//         .then(
//             (response) => console.log(response), //   (err) => console.log("Err: " + err), una manera de manejar el error, la otra es el catch
//             )
//         .catch((err) => console.log("Err: " + err))
