import { Component } from "react";
import Post from "./post";
import Avatar from "../../assets/9gag.jpg";
import AvatarSecond from "../../assets/dev-blog.png";
import PhotoTweet from "../../assets/photo-post.jpg";
import PhotoTweetSecond from "../../assets/photo-post-2.jpg";
import "./posts-style.css";

const dateInfo = new Date().toLocaleDateString();

const postContent = {
  author: {
    photo: Avatar,
    name: "9gag",
    nickname: "@9gag ·",
  },
  authorSecond: {
    photo: AvatarSecond,
    name: "Dev Blog",
    nickname: "@devBlog ·",
  },
  date: dateInfo,
  content: "I’m good at everything except the things that I can’t do.",
  contentSecond: "Oops  ¯|_(ツ)_/¯",
  image: PhotoTweet,
  imageSecond: PhotoTweetSecond,
  comments: "283",
  commentsSecond: "344",
  retweets: "501",
  retweetsSecond: "787",
  likes: "987",
  likesSecond: "1109",
};

export default class PostPage extends Component {
  render() {
    return (
      <div className="post-page">
        <Post
          author={postContent.author}
          name={postContent.name}
          nickname={postContent.nickname}
          date={postContent.date}
          photo={postContent.photo}
          content={postContent.content}
          image={postContent.image}
          comments={postContent.comments}
          retweets={postContent.retweets}
          likes={postContent.likes}
        />
        <Post
          author={postContent.authorSecond}
          name={postContent.name}
          nickname={postContent.nickname}
          date={postContent.date}
          photo={postContent.photo}
          content={postContent.contentSecond}
          image={postContent.imageSecond}
          comments={postContent.commentsSecond}
          retweets={postContent.retweetsSecond}
          likes={postContent.likesSecond}
        />
      </div>
    );
  }
}
