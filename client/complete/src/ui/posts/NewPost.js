import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Settings from '../../settings';

class NewPost extends Component {
  publishPost(data) {
    axios.post(`${Settings.host}/posts`, data)
    .then(res => {
      console.log(res.data.message);
      this.context.router.push('/');
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log(error.message);
      }
    })
  }

  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form label='发布文章' publishPost={this.publishPost.bind(this)} />
      </div>
    );
  }
}

NewPost.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NewPost;
