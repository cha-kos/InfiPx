import React from 'react';
import { Route, Link } from 'react-router-dom';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: "",
      result: []
    };
  }

  onChange(e){
    return e => {
      this.setState({value: e.target.value});
    };
  }

  update(){
    return () => {
      this.props.update(this.state);
    };
  }

  handleKeyPress(e){
    if (e && e.key === "Enter"){
      this.setState({editing: false}, this.update());
    }
  }

  autoFocus(){
    this.nameInput.selectionStart = this.nameInput.selectionEnd = this.nameInput.value.length;
    this.nameInput.focus();
  }

  render(){
    if (this.state.editing === true){
      return (
        <div className={`${this.state.className}-body input-body`}>
          <input
            className={this.state.className}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onKeyPress={(e) => this.handleKeyPress(e)}
            ref={(input) => { this.nameInput = input; }}
          />
          <button onClick={() => this.setState({editing: false}, this.update())}>
            <SaveIcon/>
          </button>
        </div>
      );
    } else {
      return (
        <div className={`${this.state.className}-body input-body`}>
          <div
            className={`${this.state.className} input-display`}
            placeholder=''
            type="text"
            value={this.state.value}
            onChange={this.onChange()}
            onClick={() => this.setState({editing: true}, () => this.autoFocus())}
          >{this.state.value}
          </div>
          <button onClick={() => this.setState({editing: true}, () => this.autoFocus())}>
            <EditIcon/>
          </button>
        </div>
      );
    }
  }
}

export default SearchBar;
