// let tanin = {
//     fname: "Tanin",
//     lname: "Ahmed",
//     age: 23,
//     job: 'Student',
//     dob: function(doby) {
//         let date = new Date()
//         console.log( date.getFullYear() - doby )
//     }

// }

//  let saif = {
//     fname: 'saif',
//     lname: 'Ahmed',
//     age: 26,
//     value: function() {
//         console.log(this)
//     }
// }

// tanin.dob(1996)

// const saifDob = tanin.dob.bind(saif)

// saifDob(1992)

// saif.value()

// this.name = 'tanin'

// console.log(this)


//========== slice =============

let arr = [{name: Array(9).fill(null)}]

let newArr = arr.slice(0, 1)

console.log(newArr)

console.log(arr)