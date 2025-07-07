import {Row, Col, Container} from "react-bootstrap"

const ConsultaClima = ({clima}) => {
    const horaActual = new Date();
    if (!clima.name || !clima.weather || !clima.main) {
        return null;
    }
    const icono = `https://openweathermap.org/img/wn/${clima.weather[0].icon}@4x.png`
    return (
        <>
        <Container className='container w-50 my-4 p-4 text-light rounded-3 shadow fondoContenedor'>
            <div className='px-5 text-center d-flex justify-content-between border-bottom'>
                <h3>Tiempo en {clima.name}</h3>
                <h4 className="fw-light">{horaActual.getHours()}:{horaActual.getMinutes()}</h4>
            </div> 
            <Row>
                <Col md={6} className="d-flex justify-content-center">
                    <div className=''>
                        <img src={icono} alt={clima.weather[0].description} className="my-0 py-0" style={{ width: '150px', height: '150px' }} />
                        <h4 className='me-4 text-capitalize text-center fw-light'>{clima.weather[0].description}</h4>
                    </div>
                </Col>                
                <Col md={6}>
                    <h1 className='fw-light text-secondary mt-4 fuenteTemperatura'>{clima.main.temp} °C</h1>
                    <p className='border-bottom'>Sensación Termica: {clima.main.feels_like} °C</p>
                    <p className='border-bottom'>Humedad: {clima.main.humidity}%</p>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ConsultaClima;