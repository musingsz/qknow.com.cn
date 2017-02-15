import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Top from '../components/Top';
import FooterTop from '../components/FooterTop';
import Copyright from '../components/Copyright';
import DevTools from './DevTools';


class App extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <div className="container">
              <Top location={this.props.location} />
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
          <DevTools />
        </div>
    </MuiThemeProvider>
    )
  }
};

export default App
