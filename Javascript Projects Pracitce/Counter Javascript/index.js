const decreaseBtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

increasebtn.onclick = function()
{
    count++
    countlabel.textContent = count;
}

decreaseBtn.onclick = function()
{
    count--
    countlabel.textContent = count;
}

resetbtn.onclick = function()
{
    countlabel.textContent = 0;
}

