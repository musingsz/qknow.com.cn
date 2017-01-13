import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';


class PlyrMidea extends React.Component {
  static propTypes = {
    'options': PropTypes.object,  // this is an options object from the docs
    'source': PropTypes.object  // this is a source object from the docs
  }

  componentWillReceiveProps(nextProps){
    this.player.source(this.props.source);
  }

  componentDidMount () {
    this.player = plyr.setup(ReactDOM.findDOMNode(this.refs.videoPlayer), this.props.options)[0];
  }

  componentWillUnmount () {
    this.player.destroy();
  }

  render () {
    return (
      <video className='js-plyr plyr' ref="videoPlayer" >
      </video>
    );
  }
}

export default PlyrMidea;
