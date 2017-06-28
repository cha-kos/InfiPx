import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props);

  }

  render () {
    debugger
    if(this.props.open) {

      return (
        <div className={open ? "modal-frame" : "modal-frame hidden"} onClick={ () => this.props.closeModal()}>
        <p>This is the modal</p>
          <div className="modalContent">
            {this.props.component}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Modal;
