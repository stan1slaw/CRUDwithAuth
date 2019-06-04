import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css'
class OnePost extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);

    }
    deletePost() {
        axios.get('http://localhost:4000/posts/delete/' + this.props.obj._id)
            .then(res => {
                console.log('deleted');
                
            })
            .catch(err => console.log(err))

    }
  render() {
    return (
        <div className="onepost">
     
     <div className="post"><h3>{this.props.obj.title_name}</h3>  
     <p>{this.props.obj.text_name}</p>
     <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Update</Link>
     <button onClick={this.deletePost} className="btn btn-danger">Delete</button>
     </div>
     </div>
    )
  }
}

export default OnePost;