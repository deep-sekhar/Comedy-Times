
fetch("https://icanhazdadjoke.com/slack").then(res => res.json()).then(data => {
    document.getElementById("hd").innerHTML = data.attachments[0].text;
}).catch(e => console.log(e));