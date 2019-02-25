import * as React from 'react';
import NavContainer from 'containers/NavContainer'; 
import PlayerContainer from 'containers/PlayerContainer';

interface IApp{
  initEnvironment: () => void;
}

export  default class App extends React.Component<IApp> {
  public componentWillMount(){
    const {initEnvironment} = this.props;
    initEnvironment();
  }
  public render() {
    return (
      <div className="App">
       <NavContainer />
      {this.props.children}
      <PlayerContainer />
      </div>
    );
  }
}