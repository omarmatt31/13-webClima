import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ConsultaClima from "./ConsultaClima";

const FormularioConsulta = () => {

    const [clima, setClima] = useState({});
    const [mostrarSpinner, setMostrarSpinner] = useState(true)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const obtenerClima = async (data)=>{
        try{
            console.log(data)
            
            setMostrarSpinner(true)
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data.inputLocalidad},${data.inputPais}&appid=c36c0bf04fbc7b24d50e546d12b552f8&units=metric&lang=es`)
            console.log(respuesta)
            if(respuesta.status === 200){
                console.log(respuesta)
                const datos = await respuesta.json()
                console.log(datos)
                //guardar en el state frase
                setClima(datos)
                //actualizar el spinner
                setMostrarSpinner(false)
            }
            }catch(error){
            console.error(error)
            }
  }

    return (
        <>
        <section className="container bg-info p-4 rounded-3 w-25">
            <Form onSubmit={handleSubmit(obtenerClima)}>
                    <Form.Group className="mb-2 d-flex" controlId="formBasicNombre">
                        <Form.Label className="text-light mx-3">Localidad: </Form.Label>
                        <Form.Control type="text" placeholder="Ej: Salta" {...register('inputLocalidad', {
                            required: 'Ingrese el nombre de la Pelicula'
                            })}/>
                            <Form.Text className="mb-2 text-danger">{errors.inputLocalidad?.message}</Form.Text>
                        </Form.Group>
                        
                        <Form.Group className="mb-2 d-flex" controlId="formBasicSintomas">
                            <Form.Label className="text-light mx-3 me-5">Pais: </Form.Label>
                            <Form.Select {...register('inputPais', {
                                required: 'Seleccione un pais'
                            })}>
                                <option value="" selected disabled hidden>Seleccione un pais</option>
                                <option>Argentina</option>
                                <option>Brasil</option>
                                <option>Uruguay</option>
                            </Form.Select>
                            <Form.Text className="mb-2 text-danger">{errors.inputPais?.message}</Form.Text>
                        </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" className="mt-3 text-light">
                            Consultar
                        </Button>
                    </div>
                </Form>
        </section>
        <section>
            <ConsultaClima clima={clima}></ConsultaClima>
        </section>
        </>
    );
};

export default FormularioConsulta;