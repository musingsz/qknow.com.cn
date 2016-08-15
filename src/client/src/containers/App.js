import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Top from '../components/Top';


class App extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <div className="container">
              <Top  />
              <div className="jumbotron">
                {this.props.adv}
              </div>
              <div>
                <Avatar icon={<FontIcon className="fa fa-angle-down"
                  style={{color:'rgb(7, 64, 90)',textAlign:'center'}}  />}
                  size={60}
                  backgroundColor='#fff'
                  style={{border: '1px solid rgb(224, 188, 188)',position: 'absolute',top: 320}}
                    />
              </div>
            </div>


          </header>
          <article>
            <div>{this.props.main}</div>
          </article>
          <footer>

          </footer>
        </div>
    </MuiThemeProvider>
    )
  }
}

export default App
