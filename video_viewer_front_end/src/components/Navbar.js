import React, { Component } from 'react';
import Videos from './Navbar/Videos'
import Photos from './Navbar/Photos'
import About from './Navbar/About'
import { BrowserRouter as Route } from "react-router-dom";


class NavBar extends Component {

	  render() {	
	    return <div className="navbar clearfix">
	    		<span className="style">
	    			<Route path="/videos" 
	    			component={Videos} />
	    			<Videos />
	    			<Route path="/about" 
	    			component={About} />
	    			< About />
	    			<Route path="/photos" 
	    			component={Photos} />
	    			< Photos />
	   		   </span>
	   		   </div>
  }	
}

export default NavBar
