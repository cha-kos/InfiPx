import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props);

  }

  render () {
    if(this.props.open) {
      return (
        <div className={open ? "modal-frame" : "modal-frame hidden"} onClick={ () => this.props.closeModal()}>
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
