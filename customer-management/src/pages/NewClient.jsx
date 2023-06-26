import { useNavigate } from "react-router-dom"

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

      
    </>
  )
}

export default NewClient