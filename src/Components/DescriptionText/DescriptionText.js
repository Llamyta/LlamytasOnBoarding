import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

const DescriptionText = ({
  Img,
  textTitle,
  textDescription,
  color
}) => {
  return (
    <View style={styles.container}>
      <Image source={Img} style={styles.image} />
      <View style={styles.text}>
        <Text
          style={[styles.title, { color: color }]}
        >
          {textTitle}
        </Text>
        <Text
          style={[styles.description, { color: color }]}
        >
          {textDescription}
        </Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.7
  },
  image: {
    width: width*0.8,
    height:height*0.4,
    resizeMode: 'stretch',
    alignItems: 'stretch',
  },
  text: {
    paddingVertical: height * 0.02,
    paddingHorizontal:width*0.08
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight:'bold'
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default DescriptionText;
