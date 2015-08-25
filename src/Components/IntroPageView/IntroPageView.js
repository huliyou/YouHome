'use strict';
var React = require('react-native');
var screen = require('Dimensions').get('window');
var PageControl = require('react-native-page-control');
var MainView = require('../MainView/MainView');
var {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Modal,
} = React;

var IntroPageView = React.createClass ({
  getInitialState: function () {
    return ({
      currentPage: 0,
    });
  },
  _onScroll: function (event) {
    var offsetX = event.nativeEvent.contentOffset.x,
        pageWidth = screen.width - 10;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  },
  _onPress: function () {
    
  },
  render: function () {
    return (
      <View style={styles.fullScreen}>
        <ScrollView
          pagingEnabled = {true}
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          bounces = {false}
          scrollEventThrottle = {16}
          onScroll = {this._onScroll}
        >
          <View style={styles.page}>
            <Image
              source={{uri:'http://cdn2.raywenderlich.com/wp-content/uploads/2015/03/rageAutoLayoutHelpCropped-480x314.png'}}
              resizeMode='contain'
              style={styles.page}
            />
          </View>
          <View style={styles.page}>
            <Image
              source={{uri:'http://cdn5.raywenderlich.com/wp-content/uploads/2015/03/rageAllTheThingsCropped-327x320.png'}}
              resizeMode='contain'
              style={styles.page}
            />
          </View>
          <View style={styles.page}>
            <Image
              source={{uri:'http://cdn1.raywenderlich.com/wp-content/uploads/2012/09/Rage-why.png'}}
              resizeMode='contain'
              style={styles.page}
            />
            <Text style={styles.title} onPress={this._onPress}>
              点击进入
            </Text>
          </View>
        </ScrollView>
        <PageControl
          style={styles.PageControl}
          numberOfPages = {3}
          currentPage = {this.state.currentPage}
          currentPageIndicatorTintColor='black'
        />
      </View>
    );
  },

});

var styles = StyleSheet.create({
  fullScreen: {
    width: screen.width,
    height: screen.height,
  },
  page: {
    width: screen.width,
    height: screen.height - 30,
  },
  PageControl: {
    position: 'absolute',
    bottom: 20,
    left:0,
    right:0,
  },
  title: {
    fontSize: 26,
    color: 'rgba(84, 145, 237, 0.7)',
    width: screen.width,
    textAlign: 'center',
    position: 'absolute',
    bottom: 60,
  }
});
module.exports = IntroPageView;
