
fetch('https://api.frankfurter.app/currencies')
.then((res)=> res.json())
.then(res => dispalydrop(res))

let sel=document.querySelectorAll(".currency")
let btn=document.getElementById('btn')
let inp=document.getElementById("input")
let result=document.getElementById("result")

function dispalydrop(res){
//    console.log( Object.entries(res))
   let cur=Object.entries(res)
   for(let i=0;i<cur.length;i++){
    // console.log(cur[i][0])

    let opt=`<option value="${cur[i][0]}">${cur[i][0]}</option>`
    sel[0].innerHTML +=opt
    sel[1].innerHTML +=opt
   }
}

btn.addEventListener("click",()=>{
    let curr1=sel[0].value
    let curr2=sel[1].value
    let inpval=inp.value
    if(curr1==curr2){
        alert("Same currency not allowed Change the currency")
    }
    else
    convert(curr1,curr2,inpval)
})
function convert(curr1,curr2,inpval){
    
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inpval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    result.value= Object.values( data.rates)
  });
}