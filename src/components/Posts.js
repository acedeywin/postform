import React from "react";
import "../App.css";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <Card>
          <CardBody>
            <h4 className="font-weight-bold">{post.title}</h4>
            <CardText>{post.body}</CardText>
          </CardBody>
        </Card>
      </div>
    ));
    return (
      <div className="container">
        <div className="row row-content">
          <div className="post col-12 col-md">{postItems}</div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
