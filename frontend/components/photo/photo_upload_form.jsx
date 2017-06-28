import React from 'react';
import { bindall } from 'lodash';
import {Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class PhotoUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      caption: '',
      main_image: true,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.update = this.update.bind(this);

  }

updateState(post) {
  this.setState({caption: photo.caption});
}

updateFile(e) {
  let file = e[0];
  let fileReader = new FileReader();
  fileReader.onloadend = function() {
    this.setState({imageFile: file, imageUrl: fileReader.result});
  }.bind(this);

  if (file) {
    fileReader.readAsDataURL(file);
  }
}

update(field) {
  return e => this.setState({[field]: e.currentTarget.value});
}


 handleSubmit(e) {
   e.preventDefault();


  // let photoData = {photo: {
  //   caption: this.state.caption,
  // }};
  let imageData = new FormData();
  imageData.append("photo[caption]",this.state.caption);
  imageData.append("photo[image]",this.state.imageFile );
  this.props.uploadPhoto(imageData)
  .then( () => this.props.closeModal())
  .then( () => this.props.history.push(`/`));
  // .then(post => {
  //   imageData.append("image[imageable_id]", post.id );
  //   imageData.append("image[imageable_type]", 'Post' );
  //   return (
  //   this.props.uploadPhoto(imageData).then(
  //     response => {
  //       if (response.imageable_id) {
  //         this.props.history.push(`/`).
  //         then(
  //           () => this.props.clearModal());
    //     }
    //   }
    // )
  // );});
}

// <input type="file" id="global-files-button"
//   onChange={this.updateFile} />

render(){
  const thingsToShow = [
    <div className='upload-actions'>
      <div className='drag-and-drop-text'>




        <div className='drag-and-drop-box'>


          <Dropzone
            onDrop={this.updateFile}
            onClick={() => console.log('hi')}
            className='drag-and-drop-box draggable'>
            Drag Your Image Here
            </Dropzone>


        </div>
      </div>
      <div className='paste-url'>
        <input id="paste-url-input" placeholder="Paste Image or URL" />
      </div>
      <div className='misc'>
      </div>
    </div>,
    <span className="upload-modal-terms">
      By creating a post, you agree to giving me your social security number
    </span>

  ];

  const gottenPhoto = [
    <div className='uploadForm'>
      <img className='image-preview' src={this.state.imageUrl} />
        <input type="text"
          value={this.state.caption}
          onChange={this.update('caption')}
          className="br5 lightest-dark login-input"
          placeholder='Caption'
        />
      <button onClick={this.handleSubmit}>Upload</button>
    </div>

  ];

  return(
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    { this.state.imageUrl ?
      gottenPhoto
      :thingsToShow
    }
  </div>
);
}
}

export default PhotoUploadForm;
