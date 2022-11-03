import React, { useEffect,useState,Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
import axios from "axios";
import salert from "sweetalert";

const Favorito =(props)=>{
    const [post, setPost] = useState(props.datos);
    useEffect(() => {
        axios.get('http://localhost:5000/favorites').then((response) => {
            setPost(response.data);
        });
    }, []);
    
    const DownloadImg=(link)=>{        
        //Descargar Imagen    
        var source = link;
        var a = document.createElement('a');
        a.download = true;
        a.target = '_blank';
        a.href= source;
        a.click();   
    }
    const listar=()=>{
        axios.get('http://localhost:5000/favorites').then((response) => {
            setPost(response.data);
        });
    }
    const DeleteFavorites= (id)=>{        
        //eliminar imagenes favoritas            
        axios.delete(`http://localhost:5000/favorites/${id}`).then(() => {
            listar();
        });
        
    }
    
  if (!post){
    return (salert("Mis Favoritos", "Todas las Imagenes se eliminaron de Favoritos", "success")),null;
  }else{ 
    if(post.length>0){    
    return (
            <Fragment>
                <div className='container mt-3'>
                    <h1 className='text-center mt-3 mb-3 pt-3 pb-3'>Mis Imagenes Favoritas</h1>
                    <div className="row">
                        {post.map((todo)=>(
                            <div className='col-md-3' key={todo.id}>
                                <img 
                                        src={todo.small} 
                                        alt={todo.description}
                                        className="img-thumbnail h-img"                                        
                                    />
                                    <p className='text-center'>
                                        {todo.description}<br/>
                                        <button 
                                            className='btn btn-outline-danger mt-3 me-2' 
                                            onClick={()=>{DeleteFavorites(todo.id)}}>
                                            <i class="bi bi-trash3"></i>
                                            Eliminar de Favoritos
                                        </button>
                                        <button className='btn btn-outline-primary mt-3' onClick={()=>{DownloadImg(todo.regular)}}>
                                            <i className="bi bi-arrow-down-circle"></i> 
                                            Descargar
                                        </button>
                                    </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>    
        );
    }else{
        <Fragment>                
            <div className='container mt-3'>
                <h1 className='text-center mt-3 mb-3 pt-3 pb-3'>
                    <i class="bi bi-exclamation-diamond"></i> <br/>
                    ¡Lo Sentimos!<br/>
                    <small>No se encontraron Imagenes Favoritas</small>
                </h1>
            </div>
        </Fragment>
    }}

}
export default Favorito;