import React, { PureComponent } from "react";
import axios from "axios";
import OnePost from "./OnePost";
export default class Index extends PureComponent {
  state = { posts: [] };

  componentDidMount() {
    axios
      .get("http://localhost:4000/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function(error) {
        error.json(error);
      });
  }

  deletePost = id => {
    axios
      .get(`http://localhost:4000/posts/delete/${id}`)
      .then(res => {
        this.setState(prevState => ({
          posts: prevState.posts.filter(item => item._id !== res.data.removedId)
        }));
      })
      .catch(err => err.json(err));
  };

  lookPost = () => {
    return this.state.posts.map((object, i) => {
      return <OnePost key={i} obj={object} deletePost={this.deletePost} />;
    });
  };
  render() {
    return (
      <div>
        <h3 align="center">Posts</h3>
        {this.lookPost()}
      </div>
    );
  }
}
