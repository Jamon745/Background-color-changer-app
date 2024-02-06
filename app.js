
let app = document.querySelector("#app");

let blue_btn = document.querySelector('#blue_btn');
let yellow_btn = document.querySelector('#yellow_btn');
let red_btn = document.querySelector('#red_btn');
let green_btn = document.querySelector('#green_btn');
let reset_btn = document.querySelector('#reset_btn'); 



blue_btn.addEventListener('click', function() {
    app.style.background = "#0278ae";
});

yellow_btn.addEventListener('click', function() {
    app.style.backgroundColor = "#ffd66b";
});

red_btn.addEventListener('click', function() {
    app.style.backgroundColor = "#e94560 ";
});

green_btn.addEventListener('click', function() {
    app.style.backgroundColor = "#61b15a";
});

reset_btn.addEventListener('click', function() {
    app.style.backgroundColor = "rebeccapurple";
});



