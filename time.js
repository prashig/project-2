console.log('start')

setTimeout(()=>{
    console.log('print timeout line')
},2000)

let count=1
const i= setInterval(()=>{
    console.log('m',count)
    count++;

    if(count>4){
        clearInterval(i)
       console.log('gone')}
},1000)
console.log('continue...')