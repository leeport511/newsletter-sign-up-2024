import { emailSchema } from "./validations.js";






const handleSubmit = async (e) => {
      e.preventDefault();
      
      
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      try {
            await emailSchema.validate( data , { abortEarly: false });
            console.log('Success Validation', data);
            
      } catch (errors) {
            
            console.log('Validations Errors', errors.inner);
            
      }
      
}



const form = document.getElementById('form');
form.addEventListener("submit", handleSubmit)