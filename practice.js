
//callback exmple
// const firstname=(name,call)=>{
//   setTimeout(()=>{
//     console.log(name)
//     call()

const { rejects } = require("assert")
const { resolve } = require("path")

//   },3000)
  
// }
// const secondname=()=>{
//   console.log('kumar')
// }
// firstname('vinod',secondname)
// console.log('hekoooo')

// promises example

// const promise=new Promise(function(res,rej){
// setTimeout(() => {
//     res("this is before")

  
// }, 3000);

// })
// promise.then((v)=>{
//   console.log(v)
//   after()
// },(rej)=>{
//   console.log(rej)
// })

// function after(){
//   console.log("this is after")
// }

//async and await in promises

// function clone(){
//   return new Promise(res=>{
//   setTimeout(() => {
//     return res("this is before")
//   }, 2000);
// })
// }
// async function msg(callback){
//   const msg=await clone()
//   console.log("print"+msg)
//   callback()

// }
// function after(){
//   console.log("this is after")
// }

// msg(after)





// // function myDisplayer(some) {

// // console.log(some)}
  
// //   function myCalculator(num1, num2) {
// //     let sum = num1 + num2;
// //     myDisplayer(sum);
// //   }
  
// //   myCalculator(5, 5);

  
// //   function myCalculator(num1, num2, myCallback) {
// //     let sum = num1 + num2;
// //     if(!sum==10){
// //         myCallback (sum)

// //     }
// //         myCallback("error")
// //   }
  
// //   myCalculator(5, 5,(s)=>{
// //       console.log(s)
// //   } );


// // 

// //promisse

// // const dowork=new Promise((res,rej)=>{
// //     const d=new Date()

// //     setInterval(() => {
// //         rej("helloo")
// //     }, 1000);
// // })
// // dowork.then((re)=>{
// //     console.log(re)
// // }).catch((e)=>{console.log(e)})

// //promise chaining

//  const add=(a,b)=>{
//          return a+b
//  }
// // add(2,6).then((sum)=>{
// //     console.log(sum)
// //     add(sum,5).then((s)=>{
// //         console.log(s)
// //     }).catch((e1)=>{
// //         console.log(e1)
// //     })
// // }).catch((e)=>{
// //     console.log(e)
// // })
// // add(5,6).then((sum)=>{
// //     console.log(sum)
// //     return add(sum,4).then((sum1)=>{
// //         console.log(sum1)
// //     })
// // }).catch((e)=>{
// //     console.log(e)
// // })


// //asyncwait
// const display=async ()=>{
//     const sum=await add(1,99)
//     const sum2=await add(sum,99)
//     const sum3=await add(sum2,99)

//     return sum3

// }
// display().then((result)=>{
//     console.log(result)
// })

// const s={
//     name:'vinod',
//     age:23,
//     sex:'male'
// }
// s.toJSON=function (){
//     console.log(this)
//     delete this.name
//     return this
// }

// console.log(JSON.stringify(s))

//http server

// const http=require('http')
// const server= http.createServer((req,res)=>{
//     res.statusCode=200
//     res.end("welcome to nodejs")
// })
// server.listen('3000',()=>{
//     console.log("server is on")
// })

//const fs=require('fs')

// fs.readFile('vinod.txt','utf8',(err,data)=>{
//     console.log(data)
// })
// const s=fs.readFileSync('vinod.txt',{encoding:'utf-8',flag:'r'})
// console.log(s)

//write asynchronous files
// const content=[{
//     type:'this is vinof'
// }]
// fs.writeFile('vinod.json',JSON.stringify(content),(error,data)=>{
  
//     console.log(data)
// })


// const data='this vinod kumar'
// fs.writeFile('vinod.txt',data,{flag:'a+'},(e)=>{
// console.log(e)
// })
//delete file

// fs.unlink('vinod.docx',(e)=>{
//     console.log(e)
// })



//routing

// const http=require('http')
// http.createServer((req,res)=>{
//  if(req.url=="/"){
//      res.writeHead(200)
//      res.end("this is routing")
//  }
// }).listen('3000',()=>{
//     console.log("server is on")
// })

// const route={
//     "/":function(req,res){
//     console.log(res)
//     }
// }
// route['/']('vinod','manoj')

//root module
// const path=require('path')

// const file=path.resolve('vinod.txt')
// console.log(file)

//events

// const events=require('events');
// const ev=new events.EventEmitter()
// const s=()=>{
//     console.log("event:")
// }
// ev.once('vinod',s)


// ev.off('vinod',s)

// ev.emit('vinod','vinod')

// ev.emit('vinod','vinod')


//streams_
// const http=require('http')
// const fs=require('fs')
// http.createServer((req,res)=>{
// const stream=fs.createReadStream('vinod.json')
// stream.pipe(res)
// }).listen(3000,()=>{
//     console.log("serever5 is on")
// })


//bffers

// const bar=Buffer.alloc(5)
// bar.write('vinod')

// bar[0]=72

// console.log(bar.toString())
// console.log(bar)

// console.log(bar[0])

//exception Habdling
// try{
// console.log("hellooooooo vinod ")
// fdghfjh;
// console.log("hellooooooo vinod after")

// }catch(e){
// throw new Error("this is error")
// }
// const dosome=new Promise((res,rej)=>{
//     console.log("this is dosome promise")
//     sdhfdjh
    
//     return res(dosome1())
    
// })


// function dosome1(){
//     console.log("do something one")
// }
// function dosome2(){
//     console.log("do something two")
// }
// dosome.then((res)=>{
//      console.log(res)
//     }).catch((e)=>{
//         console.log(e)
//     })
//const doWork=(callback)=>{
// setTimeout(() => {
//     callback("success",undefined)
// }, 2000);
// }


// doWork((data,err)=>{
//     console.log(data)
//     console.log('vinod')


// })
// const dowork=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("test okk!")
//     }, 2000);
// })
// dowork.then((data)=>{
//     console.log(data)
//     console.log('vinodd')
// })

// const add=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         resolve(a+b)
//     })
// }

// add(5,10).then((res)=>{
//     console.log(res)
//     return add(10,res).then((v)=>{
//         console.log(v)
//     })
// })