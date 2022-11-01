import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Headboard =()=>{
    
    return (
        <Fragment>
            <div className='container'>
                <div className="row">
                    <div className="col-md-9">
                        <img 
                            src='https://us.123rf.com/450wm/gloly67/gloly671605/gloly67160500030/57157962-marca-de-verificaci%C3%B3n-en-el-coraz%C3%B3n-ilustraci%C3%B3n-vectorial-aislado-en-blanco.jpg?ver=6' 
                            alt='Logo'
                            width='80px'
                        />
                        <h3 className='d-inline'>Mis Imagenes Favoritas</h3>
                    </div>                    
                    <div className="col-md-3">
                        <button className='btn btn-outline-danger mt-4'><i class="bi bi-heart"></i> Mis favoritos</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Headboard;