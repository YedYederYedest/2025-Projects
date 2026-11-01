let emojis = ["😀", "😁", "😅", "😎", "🙂‍↕️", "😡", "🤖", "🙀", "👹", "🥳"]
let emojiShow = document.getElementById("emoji-show");

function randomEmoji()
{
    let random = Math.floor(Math.random() * emojis.length)
    return emojis[random]
}

function clickthis()
{
    emojiShow.textContent = randomEmoji()
}