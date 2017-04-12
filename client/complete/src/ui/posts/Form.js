import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';

class Form extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const category = this.refs.category.value;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    this.props.publishPost({category, title, content});
  }

  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      select: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        height: '30px',
        backgroundColor: '#fff',
        ':focus': {
          outline: 'none'
        }
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
        width: '120px',
        height: '36px',
        border: 'none',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '20px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8',
        textDecoration: 'none'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
        <div style={styles.div}>
          <label style={styles.label}>分类</label>
          <input style={styles.input} ref='category' defaultValue={this.props.post ? this.props.post.category : ''} />
        </div>
        <div style={styles.div}>
          <label style={styles.label}>标题</label>
          <input style={styles.input} ref='title' defaultValue={this.props.post ? this.props.post.title : ''} />
        </div>
        <div style={styles.div}>
          <label style={styles.label}>内容</label>
          <textarea style={[styles.input, {height: '100%'}]} rows='20' key='1' ref='content' defaultValue={this.props.post ? this.props.post.content : ''} />
        </div>
        <div style={styles.actions}>
          <button type='submit' style={styles.button} key='2'>{this.props.label}</button>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}

export default Radium(Form);
