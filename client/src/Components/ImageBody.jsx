import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
const ImageBody =()=>{
        return (
            <Fragment>
                <div className='container'>
                    <h1 className='text-center mt-3 mb-3'>
                        Mis Imagenes Favoritas                        
                    </h1>                    
                    <p className="text-center">MisFavoritos es una comunidad vibrante de creativos que comparten imágenes, libres de derechos de autor. Todo el contenido se publica bajo la licencia de MisFavoritos, lo que hace que su uso sea seguro sin pedir permiso ni dar crédito al artista, incluso con fines comerciales.</p>
                    <h3 className='text-center'>
                    <i class="bi bi-facebook me-3 ms-3"></i>
                    <i class="bi bi-instagram me-3 ms-3"></i>
                    <i class="bi bi-youtube me-3 ms-3"></i>
                    <i class="bi bi-tiktok me-3 ms-3"></i></h3>
                </div>
            </Fragment>
        );
}
export default ImageBody;