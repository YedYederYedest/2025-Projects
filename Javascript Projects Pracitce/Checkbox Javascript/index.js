const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit =document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function()
{
    if (mycheckbox.checked)
    {
        subresult.textContent="You ticked the Box!"
    }

    else
    {
        subresult.textContent="You did not tick the Box!"
    }

    if (visaBtn.checked)
    {
        paymentresult.textContent="You are paying with Visa!"
    }

    else if (mastercardBtn.checked)
    {
        paymentresult.textContent="You are paying with Mastercard!"
    }

    else if (paypalBtn.checked)
    {
        paymentresult.textContent="You are paying with PayPal!"
    }

    else
    {
        paymentresult.textContent="Please select a mode of payment"
    }

}