import React, { Component } from "react";
import { photosList } from "./PhotosList";
import "./photos-style.css";

export default class PhotoPage extends Component {
  state = {
    images: photosList,
  };

  render() {
    const { images } = this.state;

    return (
      <div className="photos-wrapper">
        <PhotosLink images={images} />
      </div>
    );
  }
}

const PhotosLink = (props) => {
  const photoCard = props.images.map((image) => (
    <div className="photo-card">
      <img key={image.id} className="photo" src={image.url} alt="img" />
    </div>
  ));
  return photoCard;
};
