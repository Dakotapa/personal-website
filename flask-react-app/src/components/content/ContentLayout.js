import React from 'react';
import './ContentLayout.css'
import Content from './Content.js'
import ContentNav from './ContentNav'
function ContentLayout() {

  return (
    <div className="ContentLayout">
	    <h1> ContentLayout</h1>
	    <Content />
	    <ContentNav />
    </div>
  );
}

export default ContentLayout;
