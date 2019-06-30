import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';


const cardHeight = 250;
const cardTitle = 45;
const cardPadding = 10;

type CardProps = {
    name : string,
    color: string,
    price: string
};

export default class Card extends Component<CardProps>{
  

  render() : Node {
      const {color}= this.props;
    return (
      <View style={[styles.card,{backgroundColor:color}]}/>
    );
  }
}
const styles = StyleSheet.create({
    card : {
        height : cardHeight,
        borderRadius:10,
    }
});