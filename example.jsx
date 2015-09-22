import React from 'react';
import Sticking from 'sticky-container';

var TestSticky = React.createClass({
  render() {
    return (
            <Sticking active={this.isSticky}>
              <div>I want to make this container sticky</div>
            </Sticking>
    );
  },
  isSticky(stick) {
    if (stick){
      console.log('im stick');
    }else{
      console.log('im not stick');
    }
  },
});

export default TestSticky;