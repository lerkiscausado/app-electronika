import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
const Imagelist =(props)=>{
   
    //console.log(props.datos);
    if (props.datos.total > 0) {
        return (
            <Fragment>
                <div className='container mt-3'>
                    <h1 className='text-center mt-3 mb-3 pt-3 pb-3'>{props.datos.total} Imagenes Relacionadas Encontradas</h1>
                    <div className="row">
                        {
                            props.datos.results.map((todo)=>(
                                <div className='col-md-3' key={todo.id}>
                                    <img 
                                        src={todo.urls.small} 
                                        alt={todo.alt_description}
                                        className="img-thumbnail h-img"
                                        
                                    />
                                    <p className='text-center'>
                                        {todo.description}<br/>
                                        <button className='btn btn-outline-danger mt-3 me-2'><i className="bi bi-heart"> Añadir a Favoritos</i></button>
                                        <button className='btn btn-outline-primary mt-3'><i className="bi bi-arrow-down-circle"></i> Descargar</button>
                                    </p>
                                </div>
                            ))
                        }                                                    
                    </div>
                </div>
            </Fragment>
        );
    }else{
        return (
            <Fragment>                
                <div className='container mt-3'>
                    <h1 className='text-center mt-3 mb-3 pt-3 pb-3'>
                        <i class="bi bi-exclamation-diamond"></i> <br/>
                        ¡Lo Sentimos!<br/>
                        <small>No se encontraron coincidencias</small>
                    </h1>
                </div>
            </Fragment>
        );
    }
}
export default Imagelist;