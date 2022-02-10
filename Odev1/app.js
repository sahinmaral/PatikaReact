import axios from "axios";

let user = {};
let posts = [];

let data = {}

async function getUserById(id) {
    return await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
}

async function postSendUserId(id) {
    return await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
}

const getData = async(id) => {
    await getUserById(id).then((response)=>{user = response.data})
    await postSendUserId(id).then((response)=>{posts = response.data})

    data = {user,posts}
    console.log(data)
};

export default getData