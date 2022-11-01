import React, { useEffect,useState,Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
import Headboard from './Headboard';
import Search from './Search';
import Imagelist from './Imagelist';


const Home =()=>{
    const [resultImg, setResultImg]=useState([]);
    //let datos= [];
    /*useEffect(() => {
        // Update the document title using the browser API
        return datos=resultImg
    }); */       


    return (
        <Fragment>            
            <Headboard/>
            
            <div className='box-search pt-5 pb-5'>
                <div className='text-center'>
                    <h1 className='pt-3'>Increíbles Imágenes Gratis Para Descargar</h1>
                    <p className='mt-3 mb-3'>Más de 1 millón de imágenes compartidos por nuestra talentosa comunidad.</p>                    
                    <Search parentCallback={setResultImg}/>
                    <p>Designed by Lerkis Causado</p>
                </div>
            </div>            
        <Imagelist datos={resultImg}/>            
        </Fragment>
    );
}
export default Home;