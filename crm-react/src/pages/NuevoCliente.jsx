import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error";

export async function action({ request }) {
    const formData = await request.formData()

    const datos = Object.fromEntries(formData);

    //Validacion
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los espacios son obligatorios')
    }

    //Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores
    }

}

function NuevoCliente() {

    const errores = useActionData()
    const navigate = useNavigate()

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Llena los espacios en blanco para agregar un nuevo cliente</p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    type="button"
                    onClick={() => navigate(-1)}
                >Volver</button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error >)}

                <Form
                    method="post"
                >
                    <Formulario />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg"
                        value='Registrar Cliente'

                    />

                </Form>

            </div>
        </>
    )
}

export default NuevoCliente
