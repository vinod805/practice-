// const { text } = require("body-parser")

const { stringify } = require("querystring")

// const { Script } = require("vm")

//Reverse the given number
// function rever(){
//     var n=parseInt(document.getElementById('txt').value) 
//     var r=0
//     while(n>0){
    
//         var c=n%10
//         r=r*10+c
       
       
//         n =Math.floor(n/10)
//         }
       

//     document.getElementById('txt1').value=r.toString()
// }

//#02 pallendrome


// function pallendrome(){
//         var n=parseInt(document.getElementById('txt').value) 
//         const t=n
//         var r=0
//         while(n>0){
        
//             var c=n%10
//             r=r*10+c
           
           
//             n =Math.floor(n/10)
//             }
           
//          if(r==t){
//             document.getElementById('txt1').value='it is pallendrome'
//          }
//          else{
//             document.getElementById('txt1').value='it is not a pallendrome'
             
//          }
//     }
//reverse the string
// function rstring(){
//   var n=document.getElementById('txt').value
//         var r=''

//         for(i=n.length-1;i>=0;i--){


//            r=r+n[i]
//         }
//        document.getElementById('txt1').value=r.toString()                  
// }

//prime numbers

function isPrime(){
 var n=parseInt(document.getElementById('txt').value)
   var t=0;
   console.log(`${n} is a`)
  for (i=2;i<=n;i++){
     if(n%i==0){
        t++;
        if(t==2){
           break;
        }
     }
  }
  if(t>1){
   document.getElementById('txt1').value='it is not a prime number'
  }
  else{
   document.getElementById('txt1').value='it is a prime number'
  }
}