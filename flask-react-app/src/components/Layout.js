import React, { Component } from 'react';

import './Layout.css'
import Footer from './Footer.js'
import Header from './Header.js'
import Content from './content/Content.js'
import ContentNav from './content/ContentNav'

import classnames from "classnames";

export default class Layout extends Component {
	constructor(props){
		super(props);

		this.state = {
			prevScrollpos: window.pageYOffset,
			visible: true,
			currentComponent: "showAbout",
			showAbout: true,
			showWorkexp: true,
			showEducation: true,
			showCoursework: true,
			showProjects: true,
			showContact: true
		};
		this.handleComponentChange = this.handleComponentChange.bind(this);
	}


	handleComponentChange(name) {
	}


	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	componentWillUnmount() {
		window.remoteEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		const { prevScrollpos } = this.state;
		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos > currentScrollPos;

		this.setState({
			prevScrollpos: currentScrollPos,
			visible
		});

	};

	render(){
		const {showAbout, showWorkexp, showEducation, showCoursework,
			   showProjects, showContact} = this.state;
		return (
	    <div className="layout" id="layout">
		    <div className={classnames("header", {
	 			"header--hidden": !this.state.visible 
	 		})}>
		     	<Header />
			</div>
			<div className="content">
			    <Content 
			    	showAbout = {showAbout} 
			    	showWorkexp = {showWorkexp}
			    	showEducation = {showEducation}
			    	showCoursework = {showCoursework}
			    	showProjects = {showProjects}
			    	showContact = {showContact}
			    	/>
			</div>
			<div className={classnames("sidebar", {
	 			"sidebar--hidden": !this.state.visible 
	 		})}>
			    <ContentNav 
			    	showAbout = {showAbout} 
			    	showWorkexp = {showWorkexp}
			    	showEducation = {showEducation}
			    	showCoursework = {showCoursework}
			    	showProjects = {showProjects}
			    	showContact = {showContact}
			    	onContentNavChange={this.handleComponentChange}
		    />
			</div>
			<div className={classnames("footer", {
	 			"footer--hidden": !this.state.visible 
	 		})}>
				<Footer/>
			</div>      
	    </div>
	 	);		
	}
  
}