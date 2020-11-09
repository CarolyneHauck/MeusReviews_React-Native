//import liraries
import React, { Component, useRef,useEffect } from 'react';
import LottieView from 'lottie-react-native';
import AddLogo from '../images/add.json';

export default class Add extends React.Component {
    componentDidMount() {
      this.animation.play();
      // Or set a specific startFrame and endFrame with:
      this.animation.play(30, 120);
    }
  
    render() {
      return (
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={AddLogo}
        />
      );
    }
  }