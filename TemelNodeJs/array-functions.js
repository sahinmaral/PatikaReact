const users = ["Mehmet","Ahmet","Murat"]

//push
users.push("Ayşe")
console.log(users)
console.log(`\n`)

//map
const mappedUsers = users.map((element)=>{
    return {
        name : element,
        shortName : `${element[0]+element[1]}.`
    }
})
console.log(mappedUsers)
console.log(`\n`)

//find
const resultFind = mappedUsers.find((element)=>
    element.name === "Mehmet"
)
console.log(resultFind)
console.log(`\n`)

//filter
const resultFilter = mappedUsers.filter((element)=>
    element.name.includes('e')
)
console.log(resultFilter)
console.log(`\n`)

//some
const resultSome = mappedUsers.some((element)=>
    element.name.includes('ş')
)
console.log(resultSome)
console.log(`\n`)

//every
const resultEvery = mappedUsers.every((element)=>
    element.name.includes('ş')
)
console.log(resultEvery)
console.log(`\n`)