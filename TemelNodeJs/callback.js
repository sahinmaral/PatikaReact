import fetch from "node-fetch";
import axios from "axios";

// setTimeout(()=>{
//     console.log("merhaba")
// },2000)

// setInterval(()=>{
//     console.log("her saniye çalışır")
// },1000)

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((responseData) => {
//     console.log(responseData);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseData) => {
//         console.log(responseData);
//       });
//   });

//node-fetch
async function getData() {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();

  console.log("users : ", users);
  console.log("post1 : ", post1);
}

async function getDataByAxios() {
  const user1 = await axios("https://jsonplaceholder.typicode.com/users/1");

  const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1");

  console.log("users status code : ", user1.status);
  console.log("users : ", user1.data);
  //console.log("post1 : ", post1);
}

//getDataByNodeFetch()
//getDataByAxios();

const getComments = (number) => {
  return new Promise((resolve, reject) => {
    // console.log("comments");
    //resolve("Comments")

    if (number == 1) resolve({ text: "Selam" });
    else reject("bir problem oluştu");
  });
};

getComments(2)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
