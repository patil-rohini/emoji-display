document.addEventListener('DOMContentLoaded', function(){
    const emojiDisplay = document.getElementById("emoji-display");

    const emojiImage = document.createElement('img')
    // Initial Off image
    emojiImage.src = "./goodboy-emoji.png";
    emojiImage.classList = ['image'] // styling
    emojiImage.setAttribute('data-state', 'off');

    const clickMeButton = document.createElement('button');
    clickMeButton.classList = ['clickme'];
    clickMeButton.innerHTML = "Hey! click me";

    
    clickMeButton.onclick = function () {
        console.log("onOff-Button Clicked");
        if(emojiImage.getAttribute("data-state") === "on") {
            emojiImage.src = "./goodboy-emoji.png";
            emojiImage.setAttribute('data-state', 'off');
            clickMeButton.innerHTML = "Hey! click me";
        } else {
            emojiImage.src= "./teasing-emoji.png";
            emojiImage.setAttribute('data-state', 'on');
            clickMeButton.innerHTML = "Back";
        }
    }

    emojiDisplay.appendChild(emojiImage);
    emojiDisplay.appendChild(clickMeButton);
});
