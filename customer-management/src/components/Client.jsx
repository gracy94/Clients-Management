/* eslint-disable react/prop-types */
import { useNavigate, Form, redirect } from 'react-router-dom'
import { deleteClient } from '../data/clients'

export async function action({params}){
    await deleteClient(params.clientId)
    return redirect('/')
}

function Client({client}) {
  
    const navigate = useNavigate()
    const {name, phone, email, id} = client
  
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-2xl text-gracy-800">{name}</p>
            </td>
            <td className="p-6 space-y-2">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Phone: </span>{phone}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-purple-600 hover:text-purple-800 uppercase font-bold text-xs"
                    onClick={()=> navigate(`/clients/${id}/edit`)}
                    >
                    Edit
                </button>

                <Form
                    method='post'
                    action={`/clients/${id}/delete`}
                    onSubmit={(e)=> {
                        if(!confirm('Do you want to delete this record?')){
                            e.preventDefault()
                        }
                    }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-800 uppercase font-bold text-xs"
                        >
                        Delete
                    </button>
                </Form>
            </td>
        </tr>
    )
}

export default Client