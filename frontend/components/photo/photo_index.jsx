import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/header_container';
import Footer from '../footer/footer';


class PhotoIndex extends React.Component{

  componentDidMount(){
    this.props.requestAllPhotos();
  }

  render () {
    return(
      <div>
      <Header/>
      <ul>
          <li><img src={this.props.currentUser.avatar_url}/></li>
          </ul>
       </div>

    );
  }
}

export default PhotoIndex;

// <ul>
// {this.props.photos.map(photo =>{
    // return (
    //   <li>
    //   <p> {photo.caption} </p>
    //   <img src={this.props.currentUser.avatar_url}/>
    //   </li>
    // );})}

// <img src={currentUser.avatar_url}/>
