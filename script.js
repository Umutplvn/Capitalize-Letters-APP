const input = document.getElementById("input")
const runBtn= document.getElementById("runBtn")
const output=document.getElementById("output")
const clearBtn=document.getElementById("clearBtn")




runBtn.addEventListener("click", ()=>{

    let text0=input.value
    console.log(text0)

    let text=text0.trim();


    let content=text.split(" ")
    console.log(content)

    let str = content.map(a=>a.split(""))
    console.log(str)

    str2= str.map(a=>a["0"].toUpperCase())
    console.log(str2)
    

    for(a in str){
    str[a][0]=str2[a][0]
    } 
    
    let str3=str.map((a)=>a.join(""))
    console.log(str3)
   
    let str4=str3.join(" ")
    console.log(str4)
   
    output.innerText= str4


} 
)


clearBtn.addEventListener("click",()=>{
    location.reload();

})

