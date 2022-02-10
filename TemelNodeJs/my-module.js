const topla = (a,b) => {
    return a+b;
}

const cikar = (a,b) => {
    return a-b;
}

const hello = (name) => {
    return `hello , ${name}`;
}

const user = {
    "name" : "Şahin",
    "surname" : "MARAL"
}

const users = [
    {
    "name" : "Şahin",
    "surname" : "MARAL"
    },
    {
        "name" : "Ahmet",
        "surname" : "KESER"
    }
]

const text = "Metin"

export {
    topla,
    cikar,
    users,
    user,
    text
};

//Varsayılan olarak modül içerisinde 
//kullanıma hazır fonksiyon
export default hello;
