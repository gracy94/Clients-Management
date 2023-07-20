import { useRouteError } from "react-router-dom"

export default function ErrorPage () {
    const error = useRouteError()

    return (
        <div className="space-y-8">
            <h1 className="text-center text-5xl font-extrabold mt-20 text-purple-900">CRM - Clients</h1>
            <p className="text-center">Error</p>
            <p className="text-center">{error.message}</p>
        </div>
    )
}