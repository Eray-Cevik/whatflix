const ball =  document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
    ".container,.navbar,.sidebar,.sidebar i,.toogle,.toogle-ball,.movie-list-filter select,.movie-list-title"
);


ball.addEventListener("click",function() {
    items.forEach((item) => item.classList.toggle("active"));
});