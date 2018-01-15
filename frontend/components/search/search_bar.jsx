import React from 'react';
import { Route, Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: "",
      result: this.props.result
    };
  }

  onChange(e){
    return e => {
      this.setState({query: e.target.value},
        () => this.props.searchUsers(this.state.query));
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
    return (
      <div className="search-container">
        <svg id='search-icon' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input id="search-input"
               className="search-input"
               value = {this.state.query}
               onChange = {this.onChange()}
               ref={(input) => {this.searchInput = input;}}
               type="text"/>
        <div id="search-cover" className="search-cover" onClick={() => this.searchInput.focus()}><span id="search-cover-span">Search</span></div>
        <ul className="result-list">
          {
            this.props.result.map((result) => {
              return (
                <li className='result-item' onClick={() => {
                  this.setState({query: ""}, this.props.clearResult());
                }}>
                  <Link to={`/users/${result.id}`} className='result-item-link'>
                    <img className='avatar-image search-avatar' src={result.avatarUrl}/>
                    <div>{result.username}</div>
                  </Link>
                </li>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default SearchBar;
