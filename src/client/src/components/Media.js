import React, {Component} from "react";
import cx from 'classnames';
import vjs from 'video.js';
import _  from   'lodash';
import ReactDOM from 'react-dom';

const DEFAULT_HEIGHT = "100%";
const DEFAULT_WIDTH =  "100%";
const DEFAULT_ASPECT_RATIO = (9 / 16);
const DEFAULT_ADJUSTED_SIZE = 0;
const DEFAULT_RESIZE_DEBOUNCE_TIME = 500;
const DEFAULT_VIDEO_OPTIONS = {
  techOrder : ['html5', 'flash'],
  preload: 'auto',
  autoplay: false,
  controls: true,
  controlBar: {
      volumeMenuButton: {
        inline: false,
        vertical: true
    }
  }
};
//
// children : {
//     bigPlayButton : false,
//     textTrackDisplay : false,
//     posterImage: false,
//     errorDisplay : false,
//     controlBar : {
//         captionsButton : false,
//         chaptersButton: false,
//         subtitlesButton:false,
//         liveDisplay:false,
//         playbackRateMenuButton:false
//     }
// }

function noop() {}

class Media extends Component{


  static defaultProps = {
    endlessMode: false,
    options: DEFAULT_VIDEO_OPTIONS,
    onReady: noop,
    eventListeners: {},
    resize: false,
    resizeOptions: {},
    vjsDefaultSkin: true,
    vjsBigPlayCentered: true,
    onNextVideo: noop
  }



  componentDidMount(){
    this.mountVideoPlayer();
  }

  componentWillReceiveProps(nextProps){
    var isEndless = this.props.endlessMode;
    var willBeEndless = nextProps.endlessMode;

    if (isEndless !== willBeEndless) {
      if (willBeEndless) {
        this.addEndlessMode();
      } else {
        this.removeEndlessMode();
      }
    }

    var isResizable = this.props.resize;
    var willBeResizeable = nextProps.resize;

    if (isResizable !== willBeResizeable) {
      if (willBeResizeable) {
        this.addResizeEventListener();
      } else {
        this.removeResizeEventListener();
      }
    }

    var currentSrc = this.props.src;
    var newSrc = nextProps.src;

    if (currentSrc !== newSrc) {
      this.setVideoPlayerSrc(newSrc);
    } else if (isEndless === willBeEndless) {
      this.restartVideo();
    }
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillUnmount(){
    this.unmountVideoPlayer();
  }

  getVideoPlayer(){
    return this._player;
  }

  getVideoPlayerEl(){
    var element = ReactDOM.findDOMNode(this.refs.videoPlayer);
    return  element;
  }

  getVideoPlayerOptions(){
    return _.defaults(
      {}, this.props.options, {
      height: this.props.resize ? 'auto' : (this.props.height || DEFAULT_HEIGHT),
      width: this.props.resize ? 'auto' : (this.props.width || DEFAULT_WIDTH)
    }, DEFAULT_VIDEO_OPTIONS);
  }

  getVideoResizeOptions(){
    return _.defaults({}, this.props.resizeOptions, {
      aspectRatio: DEFAULT_ASPECT_RATIO,
      shortWindowVideoHeightAdjustment: DEFAULT_ADJUSTED_SIZE,
      defaultVideoWidthAdjustment: DEFAULT_ADJUSTED_SIZE,
      debounceTime: DEFAULT_RESIZE_DEBOUNCE_TIME
    });
  }

  getResizedVideoPlayerMeasurements(){
    var resizeOptions = this.getVideoResizeOptions();
    var aspectRatio = resizeOptions.aspectRatio;
    var defaultVideoWidthAdjustment = resizeOptions.defaultVideoWidthAdjustment;
    var winHeight = this._windowHeight();
    var baseWidth = this._videoElementWidth();
    var vidWidth = baseWidth - defaultVideoWidthAdjustment;
    var vidHeight = vidWidth * aspectRatio;
    if (winHeight < vidHeight) {
      var shortWindowVideoHeightAdjustment = resizeOptions.shortWindowVideoHeightAdjustment;
      vidHeight = winHeight - shortWindowVideoHeightAdjustment;
    }

    return {
      width: vidWidth,
      height: vidHeight
    };
  }

  setVideoPlayerSrc(src){
    this._player.src(src);
  }

  mountVideoPlayer(){
    var src = this.props.src;
    var poster = this.props.poster;
    var options = this.getVideoPlayerOptions();

    this._player = vjs(this.getVideoPlayerEl(), options);

    var player = this._player;

    player.ready(this.handleVideoPlayerReady());

    _.forEach(this.props.eventListeners, function(val, key) {
      player.on(key, val);
    });

    player.src(src);
    player.poster(poster);

    if (this.props.endlessMode) {
      this.addEndlessMode();
    }
  }

  unmountVideoPlayer(){
    this.removeResizeEventListener();
    this._player.dispose();
  }

  addEndlessMode(){
    var player = this._player;

    player.on('ended', this.handleNextVideo);

    if (player.ended()) {
      this.handleNextVideo();
    }
  }

  addResizeEventListener(){
    var debounceTime = this.getVideoResizeOptions().debounceTime;

    this._handleVideoPlayerResize = _.debounce(this.handleVideoPlayerResize, debounceTime);
    window.addEventListener('resize', this._handleVideoPlayerResize);
  }

  removeEndlessMode(){
    var player = this._player;

    player.off('ended', this.handleNextVideo);
  }

  removeResizeEventListener(){
    window.removeEventListener('resize', this._handleVideoPlayerResize);
  }

  pauseVideo(){
    this._player.pause();
  }

  playVideo(){
    this._player.play();
  }

  restartVideo(){
    this._player.currentTime(0).play();
  }

  togglePauseVideo(){
    if (this._player.paused()) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }

  handleVideoPlayerReady(){
    this
      .getVideoPlayerEl()
      .parentElement
      .removeAttribute('data-reactid');

    if (this.props.resize) {
      this.handleVideoPlayerResize();
      this.addResizeEventListener();
    }

    this.props.onReady();
  }

  handleVideoPlayerResize(){
    var player = this._player;
    var videoMeasurements = this.getResizedVideoPlayerMeasurements();

    player.dimensions(videoMeasurements.width, videoMeasurements.height);
  }

  handleNextVideo(){
    this.props.onNextVideo();
  }

  renderDefaultWarning(){
    return (
      <p className="vjs-no-js">
        <a href="http://www.google.cn/chrome/browser/desktop/index.html" target="_blank">
        当前浏览器版本过低，请使用最新浏览器观看，谢谢合作。
        </a>
      </p>
    );
  }

  _windowHeight(){
    return window.innerHeight;
  }

  _videoElementWidth(){
    return this.getVideoPlayerEl().parentElement.parentElement.offsetWidth;
  }


  render(){
    var videoPlayerClasses = cx({
      'video-js': true,
      'vjs-default-skin': this.props.vjsDefaultSkin,
      'vjs-big-play-centered': this.props.vjsBigPlayCentered
    });
    return (
      <video ref="videoPlayer" className={videoPlayerClasses}>
        {this.props.children || this.renderDefaultWarning()}
      </video>
    );
  }
};

Media.propTypes = {
    src: React.PropTypes.string,
    poster: React.PropTypes.string.isRequired,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    endlessMode: React.PropTypes.bool,
    options: React.PropTypes.object,
    onReady: React.PropTypes.func,
    eventListeners: React.PropTypes.object,
    resize: React.PropTypes.bool,
    resizeOptions: React.PropTypes.shape({
      aspectRatio: React.PropTypes.number,
      shortWindowVideoHeightAdjustment: React.PropTypes.number,
      defaultVideoWidthAdjustment: React.PropTypes.number,
      debounceTime: React.PropTypes.number
    }),
    vjsDefaultSkin: React.PropTypes.bool,
    vjsBigPlayCentered: React.PropTypes.bool,
    children: React.PropTypes.element,
    dispose: React.PropTypes.bool,
    onNextVideo: React.PropTypes.func
}

export default Media
