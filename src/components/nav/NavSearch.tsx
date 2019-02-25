// import { SONGS_PATH } from 'constants/RouterConstants';

import * as React from 'react';
import 'components/nav/NavSearch.scss';
// import { history } from 'react-router-dom'

// interface IProps {
//   history:any
// }

class NavSearch extends React.Component{
  public input:HTMLInputElement;
  public onKeyDown = (e:any) => {
    if(e.keyCode === 191){
      const insideInput = e.target.tagName.toLowerCase().match(/input|textarea/);
      if(!insideInput){
        e.preventDefault();
        this.input.focus();
      }
    }
  }
  public onKeyPress = (e:any) => {
    if(e.charCode === 13){
      const value = e.currentTarget.value.trim();
      if(value !== ''){
        // this.props.history.push(SONGS_PATH);
      }
    }
  }
  public componentDidMount(){
    document.addEventListener('keyDown', this.onKeyDown, false);
  }
  public componentWillUnmount(){
    document.removeEventListener('keyDown', this.onKeyDown, false);
  }

  public render(){
    return (
      <div className="nav-search">
        <i className="nav-search_icon icon-search"/>
        <input 
          ref={(node:HTMLInputElement) => {this.input = node}}
          className="nav-search_input"
          placeholder="SEARCH"
          onKeyPress={this.onKeyPress}
        type="text"/>
      </div>
    )
  }
}

export default NavSearch;