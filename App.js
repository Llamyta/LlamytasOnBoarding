import React from 'react';
import { YellowBox } from 'react-native'
import Onboarding from './src/View/Onboarding';
import Imagenes from './images'


YellowBox.ignoreWarnings(["Each child in a list"]);

const onPressFinal = () => {
  console.log("Funcion Final");
};
const onPressDismiss = () => {
  console.log("Dissmiss");
};
const data = [
  {
    title: 'Descubre lugares cerca',
    text: 'Tendras todo al alcance de tu mano',
    Img:Imagenes.IMG,
    color: '#fff',
    textoBotonPrev: 'Skip',
    textoBotonNext: 'Next',
    colorFondo: '#1196BA',
    iconoNext:'arrow-right',
    iconoPrev:'close-circle'

  },
  {
    title: 'Selecciona tu comida',
    text: 'Desde la comodidad de tu hogar',
    Img:Imagenes.IMG,
    color: '#1196BA',
    textoBotonPrev: 'Back',
    textoBotonNext: 'Next',
    colorFondo: '#fff',
    iconoNext:'arrow-right',
    iconoPrev:'arrow-left',

  },
  {
    title: 'Pide comida mas rapido',
    text: 'Desde la comodidad de tu hogar',
    Img:Imagenes.IMG,
    color: '#fff',
    textoBotonPrev: 'Back',
    textoBotonNext: 'Done',
    colorFondo: '#1196BA',
    iconoPrev:'arrow-left',
    iconoNext:'check'
  },

];
const App: () => React$Node = () => {
  return (
    <>
      <Onboarding data={data} onPressFinal={onPressFinal} onPressDismiss={onPressDismiss} />
    </>
  );
};

export default App;
