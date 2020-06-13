import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Description from './DescriptionText/DescriptionText';
import ButtonFooter from './ButtonFooter/ButtonsFooter';


const VistaOnboard = ({
  Img,
  textTitle,
  textDescription,
  funcionBoton1,
  funcionBoton2,
  color,
  title1,
  title2,
  colorFondo,
  iconoNext,
  iconoPrev

}) => {
  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <StatusBar backgroundColor={colorFondo} barStyle="light-content" />

      <Description
        Img={Img}
        textTitle={textTitle}
        textDescription={textDescription}
        color={color}
      />
      <ButtonFooter
        title1={title1}
        title2={title2}
        pressPrev={funcionBoton1}
        presNext={funcionBoton2}
        colorFondoNext={color}
        colorPrev={color}
        colorNext={colorFondo}
        iconoPrev={iconoPrev}
        iconoNext={iconoNext}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default VistaOnboard;
