import { useNavigate, Form } from "react-router-dom"
import Formu from "../components/Formu"

export async function action() {
  console.log('submit on form')
}

function NewClient() {
  
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
        
        <Form
          method="POST"
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