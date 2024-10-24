import { emailSchema } from "./validations.js";

const errorMessage = document.getElementById('email-error');
const emailInput = document.getElementById('email');


const handleSubmit = async (e) => {
      e.preventDefault();
      
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      try {
            await emailSchema.validate( data , { abortEarly: false });
            emailInput.classList.remove("error-state")
            console.log('Success Validation', data);

            window.location.href = '/pages/successPage.html'
            
      } catch (errors) {
            
            if (errors) {
                  errorMessage.innerText = errors.message
                  emailInput.classList.toggle("error-state")
            }
            
            console.log('Validations Errors', errors.inner);
            
      }
      
}



const form = document.getElementById('form');
form.addEventListener("submit", handleSubmit)