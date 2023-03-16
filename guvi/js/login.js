const mail = document.getElementById('mail')
const password = document.getElementById('password')


form.addEventListener('submit', (e) => {
  let messages = []
  if (mail.value === '' || mail.value == null) {
    messages.push('Email id is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }
  
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})