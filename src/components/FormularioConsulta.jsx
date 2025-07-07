import { useState, useEffect} from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ConsultaClima from "./ConsultaClima";
import { DotLoader } from "react-spinners";

const FormularioConsulta = () => {

    const [clima, setClima] = useState({});
    const [mostrarSpinner, setMostrarSpinner] = useState(false)
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
    defaultValues: {
        inputCiudad: '',
        inputPais: ''
    }
    });
    useEffect(()=>{ 
        obtenerClima({
    inputCiudad: "Tucuman",
    inputPais: "Argentina"
});
    },[])
    const obtenerClima = async (data)=>{
        try{

            setMostrarSpinner(true)
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.inputCiudad},${data.inputPais}&appid=c36c0bf04fbc7b24d50e546d12b552f8&units=metric&lang=es`)
            if(respuesta.status === 200){
                const datos = await respuesta.json()
                setClima(datos)
                setError('')
                setMostrarSpinner(false)
                reset()
            }else if (respuesta.status === 404){
                setError("🌧️ No se encontró la localidad ingresada.")
                setClima({})
            }
            }catch(error){
            console.error(error)
            }
  }

    return (
        <>
        <section className="container p-4 rounded-3 w-50 shadow fondoContenedor">
            <Form onSubmit={handleSubmit(obtenerClima)}>
                    <Form.Group className="mb-2 d-flex" controlId="formBasicCiudad">
                        <Form.Label className="text-light mx-3 fs-4">Ciudad: </Form.Label>
                        <Form.Control type="text" placeholder="Ej: Salta" className="text-secondary" {...register('inputCiudad', {
                            required: 'Ingrese el nombre de la Ciudad'
                            })}/>
                            <Form.Text className="mb-2 text-danger">{errors.inputCiudad?.message}</Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-2 d-flex" controlId="formBasicPais">
                            <Form.Label className="text-light mx-3 me-5">Pais: </Form.Label>
                            <Form.Select className="text-secondary" {...register('inputPais', {
                                required: 'Seleccione un pais'
                            })}>
                                <option value="" disabled hidden>Seleccione un pais</option>
                                <option value="AR">Argentina</option>
                                <option value="BR">Brasil</option>
                                <option value="UY">Uruguay</option>
                            </Form.Select>
                            <Form.Text className="mb-2 text-danger">{errors.inputPais?.message}</Form.Text>
                        </Form.Group>
                    <div className="text-center">
                        <Button variant="info" type="submit" className="mt-3 text-secondary">
                            Consultar
                        </Button>
                    </div>
                </Form>
        </section>
        {mostrarSpinner && (
            <div className="my-4 d-flex justify-content-center">
                <DotLoader color="#0993ab" loading  size={50} className="text-center"/>
            </div>
            )}

            {error && (
                <div className="alert alert-danger mt-3 w-50 mx-auto text-center">
                    {error}
                </div>
            )}

            {clima.name && (
                <section>
                    <ConsultaClima clima={clima} />
                </section>
            )}
        </>
    );
};

export default FormularioConsulta;