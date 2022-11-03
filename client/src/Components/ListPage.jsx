import React, { Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";
const ListPage =(props)=>{    
    const list=[];
    let paginas;
    if(props.datos>10){
        paginas=10;
    }else{
        paginas=props.datos
    }
    for(let i=0; i<paginas-2;i++){
        list[i]=i+2;//console.log(array[i])
    }
    const cmdPagina=(e)=>{
        return e;
    }
    return (      
        <Fragment>
            {
                list.map((todo)=>(
                    <li className="page-item">
                        <button className="btn btn-danger page-link"  onClick={()=>cmdPagina(todo)}>{todo}</button>
                    </li>
                ))
            }  
        </Fragment>
    );
}
export default ListPage