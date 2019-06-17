import React, { PureComponent } from "react";
import axios from "axios";
export default class Edit extends PureComponent {
  state = {
    title_name: this.props.match.params.title,
    text_name: this.props.match.params.text
  };
  onChangeTitle = e => {
    this.setState({
      title_name: e.target.value
    });
  };
  onChangeText = e => {
    this.setState({
      text_name: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { title_name, text_name } = this.state;
    const obj = {
      title_name: title_name,
      text_name: text_name
    };
    axios
      .post(
        "http://localhost:4000/posts/update/" + this.props.match.params.id,
        obj
      )
      .then(res => {
        this.props.history.push("/posts");
      });
  };
  render() {
    const { title_name, text_name } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update Post </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Change Title:</label>
            <input
              type="text"
              className="form-control"
              value={title_name || ""}
              onChange={this.onChangeTitle}
              maxLength={30}
              minLength={3}
              required
            />
          </div>
          <div className="form-group">
            <label>Change Text: </label>
            <input
              type="text"
              className="form-control"
              value={text_name || ""}
              onChange={this.onChangeText}
              maxLength={140}
              minLength={3}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update post"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
