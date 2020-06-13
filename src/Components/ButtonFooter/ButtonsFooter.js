import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import ButtonSkip from '../Button/Button';
import ButtonNext from '../Button/Button';
const ButtonsFooter = ({ 
  title1,
  title2, 
  pressPrev, 
  presNext, 
  colorPrev, 
  colorFondoPrev, 
  iconoPrev,
  colorNext, 
  colorFondoNext,
  iconoNext
 }) => {
   
  return (
    <View style={styles.container}>
      <ButtonSkip
        titleButton={title1}
        onPress={pressPrev}
        color={colorPrev}
        colorFondo={colorFondoPrev}
        icono={iconoPrev}
      />
      <ButtonNext
        titleButton={title2}
        onPress={presNext}
        color={colorNext}
        colorFondo={colorFondoNext}
        icono={iconoNext}
      />
    </View>
  );
};

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: width,
    paddingHorizontal: height * 0.01,
    paddingVertical: width * 0.07,
    alignItems: 'flex-end',
  },
});

export default ButtonsFooter;
