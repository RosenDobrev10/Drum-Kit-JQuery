$("button").click(function () {
    let buttonTextContent = this.textContent;
    makeSound(buttonTextContent);
    buttonAnimation(buttonTextContent);
});

$(document).keypress(function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    if (key === "w") {
        const crash = new Audio("soundsJQuery/crash.mp3");
        crash.play();
    } else if (key === "a") {
        const kick = new Audio("soundsJQuery/kick-bass.mp3");
        kick.play();
    } else if (key === "s") {
        const snare = new Audio("soundsJQuery/snare.mp3");
        snare.play();
    } else if (key === "d") {
        const tom1 = new Audio("soundsJQuery/tom-1.mp3");
        tom1.play();
    } else if (key === "j") {
        const tom2 = new Audio("soundsJQuery/tom-2.mp3");
        tom2.play();
    } else if (key === "k") {
        const tom3 = new Audio("soundsJQuery/tom-3.mp3");
        tom3.play();
    } else if (key === "l") {
        const tom4 = new Audio("soundsJQuery/tom-4.mp3");
        tom4.play();
    }
}

function buttonAnimation(key) {
    $(`.${key}`).addClass("pressed");
    setTimeout(function () {
        $(`.${key}`).removeClass("pressed");
    }, 200);
}
