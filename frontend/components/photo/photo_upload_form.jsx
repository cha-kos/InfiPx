import React from "react";
import {Link} from "react-router";
import {addPhoto} from '../../util/photo_api_util';

// var TweetStore = require("../stores/TweetStore.js");
// var TweetApi = require('../utils/TweetApi');

class PhotoUploadForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      imageFile: null,
      imageUrl: null
    };
  }

  updateCaption(e){
   this.setState({
     caption: e.target.value
   });
 }

 updateFile(e){
  let file = e.currentTarget.files[0];
  let fileReader = new FileReader();
  fileReader.onloadend = function () {
    this.setState({ imageFile: file, imageUrl: fileReader.result });
  }.bind(this);

  if (file) {
    fileReader.readAsDataURL(file);
    }
  }

handleSubmit(){
  var formData = new FormData();
  formData.append("photo[caption]", this.state.caption);
  formData.append("photo[image]", this.state.imageFile);
  addPhoto(formData, this.goBack);
}

goBack() {
  this.context.router.push("/");
}

render() {

  return(
    <div>
      Photo form!
      <input type="file" onChange={this.updateFile}/>
      <button onClick={this.handleSubmit}>Upload Photo</button>
      <img src={this.state.imageUrl}/>
      <input type='text' onChange={this.updateCaption}/>
    </div>);
  }
}

export default PhotoUploadForm;
