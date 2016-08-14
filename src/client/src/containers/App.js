import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component{
  render(){
    return (
      <MuiThemeProvider>
      <div>
      <RaisedButton label="Default"  />
     <RaisedButton label="Primary" primary={true}  />
      <div>{this.props.adv}</div>
        <div>header</div>
        <div>{this.props.main}</div>
      </div>
       </MuiThemeProvider>
    )
  }
}

export default App
