import React, { Component } from 'react';
import './Root.css';

import Top from './Blocks/Top/Top';
import Right from './Blocks/Right/Right';
import Main from './Blocks/Main/Main';

class Root extends Component {
  render() {
    return (
      <div className = "Root" >        
        <Top/>

        <div id="wrapper">
          <Main/>
          <Right/>
        </div>
                
      </div>
    );
  }
}

export default Root;
