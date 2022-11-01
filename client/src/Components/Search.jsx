import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
//import salert from 'sweetalert';
const Search =(props)=>{
    const Searchquery =async() =>{
        const datos={
            page: 1,
            query: document.getElementById('txtQuery').value
        }
        let token ='XpAEM_8I6hWRWFohkj9xODJGPxJj6YVN5zOphEslcD0'
        let headers = {            
            "Authorization": 'Client-ID ' + token
        };
        
        const response = await axios.get(`https://api.unsplash.com/search/photos?page=${datos.page}&query=${datos.query}`,
        {
            headers: headers
        });     
        //console.log(response.data);
        return props.parentCallback(response.data);        
    }
    return (
        <Fragment>
            <div className='row justify-content-center'>
            <div className="input-group mb-3 mt-3 w-50">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Buscar" 
                    aria-label="Buscar" 
                    aria-describedby="Buscar" 
                    id="txtQuery"
                    
                />
                <button 
                    className="btn btn-danger" 
                    type="button" 
                    id="button-addon2"
                    onClick={Searchquery}>
                    <i className="bi bi-search"></i>
                </button>
            </div>           
            </div>                       
        </Fragment>
    );
}
export default Search;