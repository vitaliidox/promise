const first = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve(console.log('first'))
        reject("Ошибка")},2000)
    })

.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('second'))
            reject("Ошибка")},3000)
    })
})

.then(()=>{
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log('third'))
            reject("Ошибка")},1000)
    })
})