let count = 0;

let setint = setInterval(() => {
    count++
    console.log(count)
}, 5000)

setTimeout(()=>{
    clearInterval(setint)
},10000)