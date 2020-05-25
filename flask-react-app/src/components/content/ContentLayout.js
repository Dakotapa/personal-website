import React, { Component } from 'react';
import './ContentLayout.css'
import Content from './Content.js'
import ContentNav from './ContentNav'
export default class ContentLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentComponent: "showAbout",
			showAbout: true,
			showWorkexp: false,
			showEducation: false,
			showCoursework: false,
			showProjects: false,
			showContact: false
		};
		this.handleComponentChange = this.handleComponentChange.bind(this);

	}

	handleComponentChange(name) {
		console.log("In Parent switching to " + name);
		if (this.state.currentComponent != name){
			
			switch(this.state.currentComponent) {
					case "showAbout":
					this.setState({ showAbout: !this.state.showAbout });
					break;
				case "showWorkexp":
					this.setState({ showWorkexp: !this.state.showWorkexp });
					break;
				case "showEducation":
					this.setState({ showEducation: !this.state.showEducation });
					break;
				case "showCoursework":
					this.setState({ showCoursework: !this.state.showCoursework });
					break;
				case "showProjects":
					this.setState({ showProjects: !this.state.showProjects });
					break;
				case "showContact":
					this.setState({ showContact: !this.state.showContact });
					break;
				// May have to do default
			}


			switch (name) {
				case "showAbout":
					this.setState({ showAbout: !this.state.showAbout });
					break;
				case "showWorkexp":
					this.setState({ showWorkexp: !this.state.showWorkexp });
					break;
				case "showEducation":
					this.setState({ showEducation: !this.state.showEducation });
					break;
				case "showCoursework":
					this.setState({ showCoursework: !this.state.showCoursework });
					break;
				case "showProjects":
					this.setState({ showProjects: !this.state.showProjects });
					break;
				case "showContact":
					this.setState({ showContact: !this.state.showContact });
					break;
				// May have to do default
			}
			

			this.state.currentComponent = name;
		}
	}

	render() {
		const {showAbout, showWorkexp, showEducation, showCoursework,
			   showProjects, showContact } = this.state;
		return (
		    <div className="ContentLayout">
			    <Content 
			    	showAbout = {showAbout} 
			    	showWorkexp = {showWorkexp}
			    	showEducation = {showEducation}
			    	showCoursework = {showCoursework}
			    	showProjects = {showProjects}
			    	showContact = {showContact}
			    	/>
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
		  );
	}
}
