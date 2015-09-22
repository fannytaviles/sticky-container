import React from 'react';

const Sticking = React.createClass({
  getInitialState(){
    return{
      height: 0,
      sticky: false,
      initialHeight: 0,
    };
  },
  componentDidMount(){
    this.onWindowScroll();
  },
  render(){
    let stickyStyles = { };
    if (this.state.sticky){
      stickyStyles = { position: 'fixed', top:0, zIndex: 10'};
      this.props.active(true);
      return(
             <div style={stickyStyles} id="sticky-component">{this.props.children}</div>
      );
    }else{
      stickyStyles = { position: 'initial', top: 'initial'};
      this.props.active(false);
      return(
        <div style={stickyStyles} id="sticky-component">{this.props.children}</div>
      );
    }
  },
  calculateDistance(scrollDistance, initHeight){
    this.setState({height: initHeight - scrollDistance});
    if (this.state.height <= 0 ){
      this.setState({sticky: true});
    }else{
      this.setState({sticky: false});
    }
  },
  onWindowScroll() {
    const StickyElement = document.getElementById("sticky-component");
    this.setState({initialHeight: StickyElement.offsetTop});
    window.onscroll = ()=> {
      this.calculateDistance(window.scrollY, this.state.initialHeight);
    }
  }
});

export default Sticking;