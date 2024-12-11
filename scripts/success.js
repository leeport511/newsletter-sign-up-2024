


const emailFromData = document.getElementById('emailFromData');
const email = localStorage.getItem('email')
const dismissBtn = document.getElementById('dismiss-btn')

emailFromData.innerText = email



dismissBtn.addEventListener('click', () => {
      
      window.location.href = '/'
})




