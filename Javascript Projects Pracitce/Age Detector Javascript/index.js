const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mySubmit");
const resultele = document.getElementById("resultele");
let age;

mySubmit.onclick = function()
{
    age = mytext.value;
    age = Number(age);

    if (age >= 100)
    {
        resultele.textContent = "Hello Bones";
    }

    else if (age >= 18)
    {
        resultele.textContent = "You can enter this establishment"
    }

    else if (age <0)
    {
        resultele.textContent = "Stop trolling"
    }

    else if (age == 0)
    {
        resultele.textContent = "Hello World"
    }

    else
    {
        resultele.textContent = "You are too young to enter this establishment"
    }
}