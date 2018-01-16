import React from 'react';
import { Route, Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: "",
      cursor: null
    };
  }

  update(e){
    return e => {
      this.setState({query: e.target.value},
        () => this.props.searchUsers(this.state.query));
    };
  }

  // Navigate through the search suggestions using the arrow keys
  handleKeyPress(e){
    if(!this.props.result[0]){
      return;
    }else if (this.state.cursor === null && e.key === "ArrowDown"){
        this.setState({cursor: 0}, () =>{
        this.refs[this.state.cursor].focus();
      });
    } else if (this.state.cursor >= 0 && e.key === "ArrowDown"){
      this.setState({cursor: this.state.cursor + 1}, () =>{
        this.refs[this.state.cursor].focus();
      });
    } else if (this.state.cursor > 0 && e.key === "ArrowUp"){
      this.setState({cursor: this.state.cursor - 1}, () =>{
        this.refs[this.state.cursor].focus();
      });
    } else if (this.state.cursor === 0 && e.key === "ArrowUp"){
      this.setState({cursor: null});
    } else if (this.state.cursor >= 0 && e.key === "Enter"){
      window.location = `/#/users/${this.refs[this.state.cursor].id}`;
      this.setState({query: "", cursor: null}, this.props.clearResult());
    } else if (this.state.cursor >= 0 &&
                e.key != "ArrowUp" ||
                e.key != "ArrowDown" ||
                e.key != "Enter") {
      this.setState({cursor: null});
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
               onChange = {this.update()}
               ref={(input) => {this.searchInput = input;}}
               onKeyDown={this.handleKeyPress.bind(this)}
               type="text"/>
        <div id="search-cover" className="search-cover" onClick={() => this.searchInput.focus()}><span id="search-cover-span">Search</span></div>
        <ul className="result-list">
          {
            this.props.result.map((result, index) => {
              return (
                <li className={`result-item ${this.state.cursor === index ? 'active' : ''}`}
                    ref={index}
                    key={index}
                    id={result.id}
                    onClick={() => {
                        this.setState({query: ""}, this.props.clearResult());
                      }
                    }
                    onKeyDown={() => this.handleKeyPress()}>
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
