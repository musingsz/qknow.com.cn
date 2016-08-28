var React = require('react');
var cx = require('classnames');
var vjs = require('video.js');
var _ = require('lodash');


var DEFAULT_HEIGHT = 800;
var DEFAULT_WIDTH = 600;
var DEFAULT_ASPECT_RATIO = (9 / 16);
var DEFAULT_ADJUSTED_SIZE = 0;
var DEFAULT_RESIZE_DEBOUNCE_TIME = 500;
var DEFAULT_VIDEO_OPTIONS = {
  preload: 'auto',
  autoplay: true,
  controls: true
};

function noop() {}

var Media = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
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
  },

  getDefaultProps: function() {
    return {
      endlessMode: false,
      options: DEFAULT_VIDEO_OPTIONS,
      onReady: noop,
      eventListeners: {},
      resize: false,
      resizeOptions: {},
      vjsDefaultSkin: true,
      vjsBigPlayCentered: true,
      onNextVideo: noop
    };
  },

  componentDidMount: function() {
    this.mountVideoPlayer();
  },

  componentWillReceiveProps: function(nextProps) {
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
  },

  shouldComponentUpdate: function() {
    return false;
  },

  componentWillUnmount: function() {
    this.unmountVideoPlayer();
  },

  getVideoPlayer: function() {
    return this._player;
  },

  getVideoPlayerEl: function() {
    return React.findDOMNode(this.refs.videoPlayer);
  },

  getVideoPlayerOptions: function() {
    return _.defaults(
      {}, this.props.options, {
      height: this.props.resize ? 'auto' : (this.props.height || DEFAULT_HEIGHT),
      width: this.props.resize ? 'auto' : (this.props.width || DEFAULT_WIDTH)
    }, DEFAULT_VIDEO_OPTIONS);
  },

  getVideoResizeOptions: function() {
    return _.defaults({}, this.props.resizeOptions, {
      aspectRatio: DEFAULT_ASPECT_RATIO,
      shortWindowVideoHeightAdjustment: DEFAULT_ADJUSTED_SIZE,
      defaultVideoWidthAdjustment: DEFAULT_ADJUSTED_SIZE,
      debounceTime: DEFAULT_RESIZE_DEBOUNCE_TIME
    });
  },

  getResizedVideoPlayerMeasurements: function() {
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
  },

  setVideoPlayerSrc: function(src) {
    this._player.src(src);
  },

  mountVideoPlayer: function() {
    var src = this.props.src;
    var options = this.getVideoPlayerOptions();

    this._player = vjs(this.getVideoPlayerEl(), options);

    var player = this._player;

    player.ready(this.handleVideoPlayerReady);

    _.forEach(this.props.eventListeners, function(val, key) {
      player.on(key, val);
    });

    player.src(src);

    if (this.props.endlessMode) {
      this.addEndlessMode();
    }
  },

  unmountVideoPlayer: function() {
    this.removeResizeEventListener();
    this._player.dispose();
  },

  addEndlessMode: function() {
    var player = this._player;

    player.on('ended', this.handleNextVideo);

    if (player.ended()) {
      this.handleNextVideo();
    }
  },

  addResizeEventListener: function() {
    var debounceTime = this.getVideoResizeOptions().debounceTime;

    this._handleVideoPlayerResize = _.debounce(this.handleVideoPlayerResize, debounceTime);
    window.addEventListener('resize', this._handleVideoPlayerResize);
  },

  removeEndlessMode: function() {
    var player = this._player;

    player.off('ended', this.handleNextVideo);
  },

  removeResizeEventListener: function() {
    window.removeEventListener('resize', this._handleVideoPlayerResize);
  },

  pauseVideo: function() {
    this._player.pause();
  },

  playVideo: function() {
    this._player.play();
  },

  restartVideo: function() {
    this._player.currentTime(0).play();
  },

  togglePauseVideo: function() {
    if (this._player.paused()) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  },

  handleVideoPlayerReady: function() {
    this
      .getVideoPlayerEl()
      .parentElement
      .removeAttribute('data-reactid');

    if (this.props.resize) {
      this.handleVideoPlayerResize();
      this.addResizeEventListener();
    }

    this.props.onReady();
  },

  handleVideoPlayerResize: function() {
    var player = this._player;
    var videoMeasurements = this.getResizedVideoPlayerMeasurements();

    player.dimensions(videoMeasurements.width, videoMeasurements.height);
  },

  handleNextVideo: function() {
    this.props.onNextVideo();
  },

  renderDefaultWarning: function() {
    return (
      <p className="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>.
      </p>
    );
  },

  _windowHeight: function() {
    return window.innerHeight;
  },

  _videoElementWidth: function() {
    return this.getVideoPlayerEl().parentElement.parentElement.offsetWidth;
  },

  render: function() {
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
});


// <Madia  className="video-js vjs-default-skin" controls
//   preload="auto" width="100%" height="100%"   poster={bgHelloWorld}
//   data-setup='{}'>
//   <source src="http://ock31hjlx.bkt.clouddn.com/events.mp4" type="video/mp4" />
//   <p className="vjs-no-js">
//     <a href="http://www.google.cn/chrome/browser/desktop/index.html" target="_blank">当前浏览器版本过低，请使用最新浏览器观看，谢谢合作。</a>
//   </p>
// </Madia>
module.exports = Media;
