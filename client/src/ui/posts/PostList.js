import React, { Component } from 'react';
import axios from 'axios';
import Settings from '../../settings';
import map from 'lodash/fp/map';

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            props: []
        };
    }
    componentWillMount() {
        axios.get(`${Settings.host}/posts`).then(res => {
            console.log(res.data.posts)
            this.setState({
                posts: res.data.posts
            })
        })
            .catch(error => {
                if (error.response) {
                    // 服务器响应了客户端发送的请求，但服务器返回给客户端的状态码不属于 2xx 范围，则打印返回的错误信息。
                    console.log(error.response.data.error);
                } else {
                    // 比如 API 服务器宕机的时候，则打印 'Network Error'
                    console.log(error.message);
                }
            });
    }
    getStyles() {
        return {
            content: {
                position: 'relative',
                width: '100%',
                height: '60px',
                maxWidth: '600px',
                margin: '20px auto',
                backgroundColor: '#fff',
                borderRadius: '5px',
                padding: '16px',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
            },
            title: {
                fontSize: '1.2em'
            }
        }
    }

    render() {
        const styles = this.getStyles();
        const postList = map((post) => {
            return (
                <div style={styles.content} key={post._id}>
                    <div style={styles.title}>{post.title}</div>
                </div>
            )
        }, this.state.posts);

        return (
            <div>
                {postList}
            </div>
        );
    }
}

export default PostList;