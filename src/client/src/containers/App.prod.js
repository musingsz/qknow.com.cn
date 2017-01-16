import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Top from '../components/Top';
import FooterTop from '../components/FooterTop';
import Copyright from '../components/Copyright';
import {StyleRoot} from 'radium';

class App extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <StyleRoot>
          <div>
            <header>
              <div className="container">
                <Top  />
                <div className="jumbotron">
                  {this.props.adv}
                </div>

              </div>


            </header>
            <article className="content">
              <div>{this.props.main}</div>
            </article>
            <footer>
                <FooterTop />
                <Copyright />
            </footer>
          </div>
        </StyleRoot>
    </MuiThemeProvider>
    )
  }
}

export default App
