import * as React from 'react';
import NavContainer from 'containers/NavContainer';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <NavContainer />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
