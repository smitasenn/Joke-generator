const jokebox = document.querySelector(".con2");
const btn = document.querySelector(".joke");
const url="https://v2.jokeapi.dev/joke/Any?type=single";


let getJoke=()=>{
    fetch(url)
    .then(res=>res.json())
    .then(item=>{
        jokebox.textContent=`${item.joke}`;
       
    });
}
btn.addEventListener("click", getJoke);
