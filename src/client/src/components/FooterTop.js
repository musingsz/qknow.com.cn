import React, {Component} from "react";
import radium from 'radium';
import IconButton from 'material-ui/IconButton';
import Config from '../../config/default.config';

const style = {
  color:'rgba(70, 70, 70, 0.866666666666667)',
  backgroundColor:'transparent',
  marginLeft:30,
  fontSize:20,

}

const liStyle = {
  base:{
    marginTop:15,
    fontSize:12,
    ':hover' :{
      color:'red'
    }
  }
};

class FooterTop extends Component{
  // constructor(props){
  //   super(props)
  // //  return Radium(props);
  //
  // }
  render(){
    return (
      <div style={{backgroundColor:'rgba(238, 238, 238, 1)'}}>
        <div className="container">
          <div className="row footer_top" style={{color:style.color}}>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <h2 style={{fontSize:36,color:style.color}} >For Qknow</h2>
              <span style={{fontSize:14,color:style.color}}>喜欢代码的直率，没有人心那么复杂!</span>
              <div style={{marginTop:35}}>
                <IconButton style={{backgroundColor:'BLACK'}}
                  iconClassName="fa fa-github" target="_blank"
                  href={Config.github}
                  iconStyle={{backgroundColor:style.backgroundColor,color:'WHITE'}}
                  />
                <IconButton style={{backgroundColor:'rgba(247, 91, 91, 1)',marginLeft:style.marginLeft}}
                  iconClassName="fa fa-weibo" target="_blank"
                  href={Config.weibo}
                  iconStyle={{backgroundColor:style.backgroundColor,color:'WHITE'}}
                  />
                <IconButton style={{backgroundColor:'rgba(0, 173, 181, 1)',marginLeft:style.marginLeft}}
                  iconClassName="fa fa-weixin" target="_blank"
                  href={Config.weixin}
                  iconStyle={{backgroundColor:style.backgroundColor,color:'WHITE'}}
                  />
                  <IconButton style={{backgroundColor:'rgba(36, 189, 255, 1)',marginLeft:style.marginLeft}}
                    iconClassName="fa fa-qq" target="_blank"
                    href={Config.qq}
                    iconStyle={{backgroundColor:style.backgroundColor,color:'WHITE'}}
                  />
              </div>

            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2">
              <p  style={{fontSize:style.fontSize,marginTop:30}}>学习资料</p>
              <ul style={{listStyleType:"none",paddingLeft:0}}>
                <li key="one"  style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="two" style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="three"  style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="four" style={[liStyle.base]}><a href="#">个人博客</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <p  style={{fontSize:style.fontSize,marginTop:30}}>社交论坛</p>
              <ul style={{listStyleType:"none",paddingLeft:0}}>
                <li key="one_e"  style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="two_o" style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="three_e"  style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="four_r" style={[liStyle.base]}><a href="#">个人博客</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <p  style={{fontSize:style.fontSize,marginTop:30}}>关于我们</p>
              <ul style={{listStyleType:"none",paddingLeft:0}}>
                <li key="one_ee"  style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="two_oo" style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="three_ee"  style={[liStyle.base]}><a href="#">个人博客</a></li>
                <li key="four_rr" style={[liStyle.base]}><a href="#">个人博客</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-2 col-lg-2">
              <p  style={{fontSize:style.fontSize,marginTop:30}}>服务提供商</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default radium(FooterTop)
