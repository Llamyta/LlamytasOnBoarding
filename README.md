# LlamytasOnBoarding
Disenio onBoarding para la materia de PDM
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
De ser necesario deben instalarse las siguientes librerias:

```
npm install react-native-vector-icons

react-native link react-native-vector-icons

npm install react-native-elements
```

### Installing

Dentro de un proyecto de React Native

Instalar la libreria

```
npm install LlamytasOnBoarding
```

En caso de que los iconos no esten instalados de manera correcta

```
npx react-native link
```

Ejecutar el proyecto

```
npx react-native run-android
```


## Icons

Se puede utilizar cualquier icono de la libreria de Vector Icons
disponibles en https://materialdesignicons.com


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [React Native](https://reactnative.dev) - El framework
* [MaterialIcons](https://materialdesignicons.com) - Iconos

## Example

```
import React from 'react';
import Onboarding from 'onboardingllamyta';
import Imagenes from './images'


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

```

## Versioning

0.0.1

## Authors

* **Bernarda Serrano** - [Llamyta](https://github.com/Llamyta)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
