import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
import axios from "axios";
import salert from "sweetalert";
const Imagelist =(props)=>{
    const DownloadImg=(link)=>{        
        //Descargar Imagen    
        var source = link;
        var a = document.createElement('a');
        a.download = true;
        a.target = '_blank';
        a.href= source;
        a.click();   
    }
    const addFavorite= async(e)=>{
        const datosFavoritos={
            description: e.description,
            small: e.urls.small,
            regular: e.urls.regular
        }        
        try {
            const res = await axios.post(
                "http://localhost:5000/favorites",
                datosFavoritos
            );              
            salert("Mis Favoritos", "La Imagen se agrego a Favoritos", "success")
        } catch (error) {
            console.log(error)
        }                
    }
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
                                        <button 
                                            className='btn btn-outline-danger mt-3 me-2' 
                                            onClick={()=>addFavorite(todo)}>
                                            <i className="bi bi-heart">Añadir a Favoritos</i>
                                        </button>
                                        <button className='btn btn-outline-primary mt-3' onClick={()=>{DownloadImg(todo.urls.regular)}}>
                                            <i className="bi bi-arrow-down-circle"></i> 
                                            Descargar
                                        </button>
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