let tanin = {
    fname: "Tanin",
    lname: "Ahmed",
    age: 23,
    job: 'Student',
    dob: function(doby) {
        let date = new Date()
        console.log( date.getFullYear() - doby )
    }

}

 let saif = {
    fname: 'saif',
    lname: 'Ahmed',
    age: 26,
    value: () => {
        // console.log(this)
    }
}

tanin.dob(1996)

const saifDob = tanin.dob.bind(saif)

saifDob(1992)