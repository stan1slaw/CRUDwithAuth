import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
          title_name : '',
          text_name : ''
      }
    }
    onChangeTitle(e) {
        this.setState({
         title_name: e.target.value
        });
      }
    onChangeText(e) {
        this.setState({
            text_name: e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title_name: this.state.title_name,
            text_name: this.state.text_name
        }
    axios.post('http://localhost:4000/posts/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      title_name: '',
      text_name: ''
    })
  }
    
    
    render() {
        return (
          
                <div style={{marginTop: 10}}>
                    <h3>Add New Post</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Add Title:</label>
                            <input type="text" className="form-control" 
                            value={this.state.title_name}
                            onChange={this.onChangeTitle}
                            maxLength={30}
                            minLength={3}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Add Text: </label>
                            <input type="text" className="form-control"
                            value={this.state.text_name}
                            onChange={this.onChangeText}
                            maxLength={140}
                            minLength={3}
                            required
                            />
                        </div>
                       
                        <div className="form-group">
                            <input type="submit" value="Add post" className="btn btn-primary"  />
                        </div>
                    </form>
                </div>
        )
    }

}
