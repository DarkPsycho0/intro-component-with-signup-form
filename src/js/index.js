const input = document.querySelectorAll('input')
const error = document.querySelectorAll('.error')

input.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === "") {
            input.classList.add("invalid")
            input.nextElementSibling.classList.remove('none')
        } else {
            input.classList.remove("invalid")
            input.nextElementSibling.classList.add('none')
        }
        if (input.type == 'email') {
            if (validateEmail(input.value)) {
                input.classList.remove("invalid")
                input.nextElementSibling.classList.add('none')
            } else {
                input.classList.add("invalid")
                input.nextElementSibling.classList.remove('none')
            }
        }
    })
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}