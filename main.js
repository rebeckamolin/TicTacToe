let i = 1
let body = document.getElementsByTagName("body")[0]
let counter = 0
for (i; i <= 25 * 25; i++) {
    let button = document.createElement("button")

    button.textContent = ''
    body.appendChild(button)
    button.classList.add("button")
    button.addEventListener('click', function (event) {
        
        counter = counter + 1
        document.getElementById('counter').innerHTML = 'Totalt antal drag: ' + counter

        if (document.getElementById('player').innerHTML.includes('🦄')) {
            button.textContent = '🦄'
            document.getElementById('player').innerHTML = 'Nu är det 🦋:s tur'
        } else {
            button.textContent = '🦋'
            document.getElementById('player').innerHTML = 'Nu är det 🦄:s tur'
        } 
        button.disabled = true
    })
    if (i % 25 === 0) {
        document.write("<br>")
    }
}