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
  let imageData = new FormData();
  imageData.append("photo[caption]",this.state.caption);
  imageData.append("photo[image]",this.state.imageFile );
  this.props.uploadPhoto(imageData)
    .then( () => this.props.closeModal())
    .then( () => this.props.history.push(`/`));
}

render(){
  const dropZone = [
    <div className='upload-actions'>
      <div className='drag-and-drop-text'>
        <div className='drag-and-drop-box'>
          <Dropzone
            onDrop={this.updateFile}
            onClick={() => console.log('hi')}
            className='drag-and-drop-box'>
              <div className= 'plus-symbol'>
              <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="#E8E8E8" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              </div>
              Drag Your Image Here
            </Dropzone>
        </div>
      </div>
      <div className='misc'>
      </div>
    </div>,
    <span className="upload-modal-terms">
      By posting a photo, you agree to InfiPx terms and policy.
    </span>
  ];

  const gottenPhoto = [
    <div className='uploadForm'>
      <img className='image-preview' src={this.state.imageUrl} />
      <div className='image-caption-button'>
        <input type="text"
          value={this.state.caption}
          onChange={this.update('caption')}
          className="caption"
          placeholder='Caption'
        />
      <button onClick={this.handleSubmit} className='button upload'>Upload</button>
      </div>
    </div>

  ];

  return(
  <div className='uploadModal' onClick={(e)=> e.stopPropagation()}>
    { this.state.imageUrl ?
      gottenPhoto
      :dropZone
    }
  </div>
);
}
}

export default PhotoUploadForm;
