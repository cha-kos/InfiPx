import React from 'react';
import { Link } from 'react-router-dom';


class PhotoIndex extends React.Component{

  componentDidMount(){
    this.props.requestAllPhotos();
  }

  render () {
    return(
      <div>
      {this.props.photos.map(photo =>{
        return (
          <div>
          <p> {photo.caption} </p>
           <img src={photo.image_url}/>
          </div>
      );})}
       </div>
    );
  }
}

export default PhotoIndex;
