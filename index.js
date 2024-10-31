const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const counter = document.getElementById("counter");
const submit = document.getElementById("submit");
let count = 0;
const update = document.getElementById("update_by");
let updater = 0;

increase.onclick = function(){
    count=count+updater;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    updater = 1
    counter.textContent = count;
}

decrease.onclick = function(){
    count=count-updater;
    counter.textContent = count;
}

submit.onclick = function(){
    updater = Number(update.value);
}
