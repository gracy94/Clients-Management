import { Form, useNavigate, useLoaderData } from 'react-router-dom'
import { getClient } from "../data/clients"
import Formu from "../components/Formu"

export async function loader({params}){
    const client = await getClient(params.clientId)
    if(Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Client not found'
        })
    }
    return client
}

function EditClient() {
  const navigate = useNavigate();
  const client = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Edit Client</h1>
      <p className="mt-3">Here you can edit the data of a client</p>
    
      <div className="flex justify-end">
        <button className="bg-purple-800 text-white px-3 py-1 font-bold uppercase"
                onClick={()=> navigate(-1)}
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        
        {/*errors ?.length && errors.map((error , i) => <Error key={i}>{error}</Error>)*/}

        <Form
          method="POST"
          noValidate
        >
            <Formu
              client={client}
            />

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

export default EditClient