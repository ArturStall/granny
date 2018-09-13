import React, { Component } from 'react';

import Top from './Blocks/Top/Top';
import Main from './Blocks/Main/Main';
import Right from './Blocks/Right/Right';
import Bottom from './Blocks/Bottom/Bottom';

class Root extends Component {
  render() {
    return (
      <div className = "Root" >        
        <Top />
        
        <div id="wrapper">
          <Main />
          <Right />
        </div>

        <Bottom />
      </div>
    );
  }
}

export default Root;
