const myBox = document.getElementById("myBox");

function changeColor(event)
{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch 🤕";
}

myBox.addEventListener("click", event =>
{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch 🤕";
}
);

myBox.addEventListener("mouseover", event =>
{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't Do It 😲";
}
);

myBox.addEventListener("mouseout", event =>
{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "click Me 😊";
}
)