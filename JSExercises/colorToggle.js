let toggle = document.querySelector("button");
// toggle.addEventListener("click", function() {
//     if (document.body.style.background !== "purple") {
//         document.body.style.background = "purple";
//     }
//     else {
//         document.body.style.background = "white";
//     }
// });

toggle.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});
