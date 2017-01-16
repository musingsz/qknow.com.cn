import React, {Component} from "react";
import '../css/search.css';



class Search extends Component{
  render(){
    return (
      <div className="sw">
        <form action='#'>
          <input type="search" className="search" placeholder="Search..." />
          <button className="go"><span className="entypo-search"></span></button>
        </form>
      </div>
    )
  }
};

export default Search;
