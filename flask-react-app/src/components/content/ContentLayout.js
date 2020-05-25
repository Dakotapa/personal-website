import React from 'react';
import './ContentLayout.css'
import Content from './Content.js'
import ContentNav from './ContentNav'
function ContentLayout() {

  return (
    <div className="ContentLayout">
	    <Content />
	    <ContentNav />
    </div>
  );
}

export default ContentLayout;
