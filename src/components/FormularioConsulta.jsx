import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import ConsultaClima from "./ConsultaClima";

const FormularioConsulta = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    return (
        <>
        <section className="container bg-info p-4 rounded-3 w-25">
            <Form onSubmit={handleSubmit()}>
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
            <ConsultaClima></ConsultaClima>
        </section>
        </>
    );
};

export default FormularioConsulta;