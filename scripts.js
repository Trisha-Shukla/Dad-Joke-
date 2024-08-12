let button=document.getElementById("btn");
let displayJoke=document.querySelector(".jokes");
const apiKey="yRb4p4+x6DD/lfLPfbGDxg==4IXUMe3lrk8B5aQP";

button.addEventListener("click",jokegenerator);

async function jokegenerator(){
    try{
    document.getElementsByTagName("body")[0].classList.remove("bg-image");
    displayJoke.innerText="updating..."
    button.innerText="Loading"
    button.disabled=true;
    let response= await fetch("https://api.api-ninjas.com/v1/dadjokes",{
        method: 'GET',
        headers:{
            'X-Api-Key':apiKey
        }
    })
    
    let data= await response.json();
    displayJoke.innerText=`${data[0].joke}`
    document.getElementsByTagName("body")[0].classList.add("bg-image");
    console.log(document.getElementsByTagName("body")[0]);
    
    button.innerText="Tell me a joke"
    button.disabled=false;
}
catch(e){
document.getElementsByTagName("body")[0].classList.remove("bg-image");
button.innerText="An error occured, try again later"
button.innerText="Tell me a joke"
button.disabled=false;
console.log(e);

}
    

}