/* eslint-disable react-refresh/only-export-components */
import { useNavigate, Form, useActionData } from "react-router-dom"
import Formu from "../components/Formu"
import Error from "../components/Error"

export async function action({request}) {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)
   const email = formData.get('email')

   //Validation
   const errors = []
   if(Object.values(data).includes('')){
      errors.push('All fields are required')
   }

   // eslint-disable-next-line no-control-regex
   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
   if (!regex.test(email)) {
    errors.push('email is not valid')
   }

   if(Object.keys(errors).length) {
    return errors
   } 
   return null
}

function NewClient() {
  
  const errors = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">New Client</h1>
      <p className="mt-3">Complete all the fields to register a new client</p>
    
      <div className="flex justify-end">
        <button className="bg-purple-800 text-white px-3 py-1 font-bold uppercase"
                onClick={()=> navigate(-1)}
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        
        {errors ?.length && errors.map((error , i) => <Error key={i}>{error}</Error>)}

        <Form
          method="POST"
          noValidate
        >
            <Formu/>

            <input 
                type="submit"
                className="mt-5 w-full bg-purple-800 p-3 uppercase font-bold text-white text-lg"
                value="Register Client"
            />
        </Form>
      </div>
    </>
  )
}

export default NewClient