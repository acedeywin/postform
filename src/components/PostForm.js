import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPosts } from "../actions/postActions";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";

class PostForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    //call action
    this.props.createPosts(post);
  }

  render() {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 col-md">
            <h1 className="offset-2">Post Form</h1>
            <br />
            <Form onSubmit={this.onSubmit}>
              <FormGroup row>
                <Label htmlFor="title">Title</Label>
                <Col md={6}>
                  <Input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.value}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="body">Body</Label>
                <Col md={6}>
                  <Input
                    type="textarea"
                    id="body"
                    name="body"
                    rows="10"
                    onChange={this.onChange}
                    value={this.state.body}
                  />
                </Col>
              </FormGroup>

              <Button type="submit" color="primary" className="ml-4">
                Submit
              </Button>
            </Form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPosts: PropTypes.func.isRequired,
};

export default connect(null, { createPosts })(PostForm);
