import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const OnePost = ({ obj, deletePost }) => {
    const {text_name,title_name,_id} = obj
   
    
    return (
        
        <div className="onepost">
       <div className="post"><h3>{title_name}</h3>  
       <p>{text_name}</p>
       <Link to={"/edit/"+_id+"/"+title_name+"/"+text_name}  className="btn btn-primary">Update</Link>
       <button onClick={() => deletePost(_id)} className="btn btn-danger">Delete</button>
       </div>
     </div>
    )
};

export default OnePost;