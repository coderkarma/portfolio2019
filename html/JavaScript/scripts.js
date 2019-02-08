// WelcomeText for h1

let h1 = document.querySelector(".welcomeText");
let text = "I Am a Web Developer";
let speed = 70;

let i = 0;

const typeWriter = () => {
    if (i < text.length) {
        h1.style.color = "Green"
        h1.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter()

h1.addEventListener("mouseover", (e) => {
    e.preventDefault()
    typeWriter()
})

//  Make an image to slide up