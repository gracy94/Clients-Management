/* eslint-disable react/prop-types */
const Formu = ({client}) => {

    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client's name"
                    name="name"
                    defaultValue= {client?.name}
                />
            </div>
          
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >Email:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client's email"
                    name="email"
                    defaultValue= {client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="Phone"
                >Phone:</label>
                <input 
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client's phone"
                    name="phone"
                    defaultValue= {client?.phone}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >Notes:</label>
                <textarea
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Client's notes"
                    name="notes"
                    defaultValue= {client?.notes}
                />
            </div>
        </>
    )
}

export default Formu