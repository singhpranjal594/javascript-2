console.log("connected")
localStorage.setItem("p1", 17);
localStorage.setItem("p2", 19);
localStorage.setItem("p3", 14);
var genNo;
let x = localStorage.getItem("generate");
console.log(x);
let element = document.getElementById("playing");

function myfunction() {

    
        genNo = Math.floor((Math.random() * 10) + 11);
        localStorage.setItem("generate", genNo);
        document.getElementById("generate").innerHTML = genNo;
    document.getElementById("button").disabled = "true";

}
let showResult= document.getElementById("showResult");
showResult.addEventListener("click",function() {
    let u1=localStorage.getItem("p1");
    let u2=localStorage.getItem("p2");
    let u3=localStorage.getItem("p3");
    let element= document.getElementById("showing");
    if(genNo==u1)
    {
        let html=`<div class="card" style="width: 18rem;">
        <img src="images/585e4bcdcb11b227491c3396.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-title" id="givenNo">17</p>
            <p class="card-text">NAME 1</p>
        </div>`;
        element.innerHTML =html;
        setInterval(createanimation,100);
    }
    else
    if(genNo==u2)
    {
        let html=`<div class="card" style="width: 18rem;">
        <img src="images/585e4bcdcb11b227491c3396.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-title" id="givenNo">19</p>
            <p class="card-text">NAME 2</p>
        </div>
    </div>`;
        element.innerHTML =html;
        setInterval(createanimation,100);
    }
    else
    if(genNo==u3)
    {
        let html=`<div class="card" style="width: 18rem;">
        <img src="images/585e4bcdcb11b227491c3396.png" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-title" id="givenNo">14</p>
            <p class="card-text">NAME 3</p>
        </div>
    </div>`;
        element.innerHTML =html;
        setInterval(createanimation,100);
    }
    else{
        element.innerHTML="No one win";
        let elem=document.getElementById("apre");
        let html=`<div id="apre">Try Next Time!!!</div>`;
        elem.innerHTML=html;
    }

})


//popup
const open = document.getElementById("showResult");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active");
});

close.addEventListener("click", () => {
    container.classList.remove("active");
});


//congratulation animation
function createanimation()
{
    const anim=document.createElement("div");
    anim.classList.add("anim");
    anim.style.left = Math.random() * 100+"vw" ;
    anim.style.animationDuration = Math.random() * 2 + 3 + "s";
    anim.innerText='🎉';
    
    document.body.appendChild(anim);
    setTimeout(() => {
        anim.remove();
    }, 5000);
}






