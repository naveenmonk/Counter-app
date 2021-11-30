const up = document.querySelector(".up");
const down = document.querySelector(".down");
const reset = document.querySelector(".reset");
const count = document.querySelector(".count");
const btn = document.querySelector(".button");

up.addEventListener("click", () => {
  count.innerHTML++;
  count.style.color = "orange";
});

down.addEventListener("click", () => {
  count.innerHTML--;
  count.style.color = "pink";
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
  count.style.color = "black";
});

// // Method 2

// btn.addEventListener("click",(e)=>{
//     if(e.EventTarget.classList.contains("up")){
//         count.innerHTML++;

//     }

// })
