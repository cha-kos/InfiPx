import React from 'react';


class PhotoShow extends React.Component{

  componentDidMount(){
    this.props.requestPhoto(this.props.match.params.id);
  }

  render () {
    // if (!this.props.photo){
    //   return null;
    // }
    debugger
    return(
      <img src={this.props.photo.image_url} />
    );
  }
}

export default PhotoShow;
