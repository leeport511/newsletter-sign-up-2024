import * as yup from 'https://cdn.jsdelivr.net/npm/yup@0.32.11/+esm';



export const emailSchema = yup.object().shape({
      email: yup
            .string()
            .email('Valid email required')
            .required('Email is Required')
})


