var body = document.getElementById('body')
let button = document.createElement('button')
let main = document.createElement('main')
let input = document.createElement('input')
let button2 = document.createElement('button')
button.append('press to delete MAIN')
button2.append('press to delete your choice')
input.setAttribute("type", "text")
document.body.appendChild(button)
document.body.appendChild(main)
document.body.appendChild(input)
document.body.appendChild(button2)

input.id = 'user';
let user = document.getElementById('user')
let imgElem = document.createElement('img')
imgElem.src = "https://tinyurl.com/y4osa53u";
main.appendChild(imgElem);
let ancElem = document.createElement('a')
ancElem.href = 'https://espn.com'
main.appendChild(ancElem)
ancElem.append('https://espn.com')

button.addEventListener("click", function() {
    main.remove()
})
button2.addEventListener("click", function() {
    // if (input.value === 'image') {
    //     imgElem.remove();
    //   } else if (input.value === 'link') {
    //     ancElem.remove();
    //   }
    user = input.value
    user.remove()
})