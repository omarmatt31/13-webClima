
const ConsultaClima = ({clima}) => {
    if (!clima.name || !clima.weather || !clima.main) {
        return null;
    }

    return (
        
        <section className='container w-50 bg-info my-4 p-4 text-light rounded-3'>
          <div className='px-5 text-center'>
                <h3>Tiempo en {clima.name}</h3>
            </div> 
            <div className='mt-4 d-flex px-5'>
                <h4 className='me-4 text-capitalize'>{clima.weather[0].description}</h4>
                <h1 className='fw-bolder text-secondary'>{clima.main.temp}° C</h1>
            </div>
                <p className='fw-medium px-5'>Sensación Termica: {clima.main.feels_like}° C</p>
                <p className='fw-medium px-5'>Humedad: {clima.main.humidity}%</p>
        </section>
    );
};

export default ConsultaClima;