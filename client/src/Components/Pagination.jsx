import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
import ListPage from "./ListPage"
const Pagination =(props)=>{       
    
    return (
        <Fragment>
            <div className='row '>            
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="" aria-label="Previous">
                            <i className="bi bi-arrow-left-short"></i>
                        </a>
                    </li>
                    <ListPage datos={props.datos.total_pages} />
                    <li className="page-item">
                        <a className="page-link" href="" aria-label="Next">
                            <i className="bi bi-arrow-right-short"></i>
                        </a>
                    </li>
                </ul>            
            </div>            
        </Fragment>
    );
}
export default Pagination;