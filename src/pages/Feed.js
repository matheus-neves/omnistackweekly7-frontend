import React, { Component } from 'react';
import io from 'socket.io-client';
import { api, baseURL } from '../services/api';

import { PostList } from './FeedStyles';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  state = {
    feed: [],
  };

  async componentDidMount() {
    this.registerToSocket();

    const { data: feed } = await api.get('posts');

    this.setState({ feed });
  }

  registerToSocket = () => {
    const {
      feed,
    } = this.state;

    const socket = io(baseURL);

    socket.on('post', (newPost) => {
      this.setState({ feed: [newPost, ...feed] });
    });

    socket.on('like', (likedPost) => {
      this.setState({

        feed: feed.map(post => (post._id === likedPost._id ? likedPost : post)),

      });
    });
  }

  handleLike = (id) => {
    api.post(`/posts/${id}/like`);
  }

  render() {
    const { feed } = this.state;

    return (
      <PostList>
        {
          feed.map(post => (
            <article key={post._id}>
              <header>
                <div className="user-info">
                  <span>{post.author}</span>
                  <span className="place">{post.place}</span>
                </div>
                <img src={more} alt="Mais" />
              </header>
              <img src={`${baseURL}/${post.image}`} alt="" />
              <footer>
                <div className="actions">
                  <button type="button" onClick={() => this.handleLike(post._id)}>
                    <img src={like} alt="" />
                  </button>
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </div>
                <strong>{post.likes}</strong>
                <p>
                  {post.description}
                  <span>{post.hashtags}</span>
                </p>
              </footer>
            </article>
          ))
        }
      </PostList>
    );
  }
}

export default Feed;
