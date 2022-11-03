import React, { useEffect,useState,Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";
import Headboard from './Headboard';
import Search from './Search';
import Imagelist from './Imagelist';
import Pagination from './Pagination';
import ImageBody from './ImageBody';
import Favoritelist from './Favoritelist';
import axios from "axios";
import Favorito from './Favorito';


const Home =()=>{    
    
    const [resultImg, setResultImg]=useState([]);
    const [resultFavorites, setResultFavorites]=useState([]);
    const [visibleImg, setVisibleImg]=useState('d-none');
    const [visibleFavorites, setVisibleFavorites]=useState('d-none');    
    
    useEffect(() => {
        axios.get('http://localhost:5000/favorites').then((response) => {
            setResultFavorites(response.data);
        });
    }, []);
    /*useEffect(async() => {        
        console.log('USE EFFECT',resultFavorites);
        //setResultFavorites(resultFavorites)
    });*/
    const getFavorites=()=>{        
            axios.get('http://localhost:5000/favorites').then((response) => {
                setResultFavorites(response.data);
            }); 
        setVisibleFavorites('d-block');
        setVisibleImg('d-none');
    }
    // FUNCION MOSTRAR FAVORITOS
   
    
    

    return (
        <Fragment>            
            <Headboard 
                parentCallback={getFavorites} 
                visibleFavorites={setVisibleFavorites}
                visibleImg={setVisibleImg}
            />
            
            <div className='box-search pt-5 pb-5'>
                <div className='text-center'>
                    <h1 className='pt-3'>Increíbles Imágenes Gratis Para Descargar</h1>
                    <p className='mt-3 mb-3'>Más de 1 millón de imágenes compartidos por nuestra talentosa comunidad.</p>                    
                    <Search 
                        parentCallback={setResultImg} 
                        visibleImg={setVisibleImg}
                        visibleFavorites={setVisibleFavorites}
                    />
                    <p>Designed by Lerkis Causado</p>
                </div>
            </div>
            <div className={visibleImg}>
                <Imagelist datos={resultImg}/>
                <Pagination datos={resultImg}/>                
            </div>
            <div className={visibleFavorites}>
                <Favorito datos={resultFavorites}/>
            </div>          
            
            <ImageBody/>        
            
            <hr/>
            <p className="text-center">© 2022 MisFavoritos. El diseño de MisFavoritos es una marca de Lerkis Causado. Explora millones de fotos e ilustraciones de gran calidad.</p>
        </Fragment>
    );
}
export default Home;