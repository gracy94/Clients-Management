/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom'
import {getClients} from '../data/clients'
import Client from '../components/Client';

export function loader(){

  const clients = getClients()

  return clients;
}

function Index() {

  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-purple-900">Clients</h1>
      <p className="mt-3">Manage your clients</p>

      {clients.length 
      ?(
        <table className='w-full gb-white shadow mt-5 table-auto'>
          <thead className='bg-purple-800 text-white'>
            <tr>
              <th className='p-2'>Client</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>

            <tbody>
              {clients.map( client => (
                <Client
                  client={client}
                  key={client.id}
                />                
              ))}
            </tbody>    
        </table>
      ):(
        <p className='text-center mt-10'>No clients yet</p>
      )
      }
    </>
  )
}

export default Index