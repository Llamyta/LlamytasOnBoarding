# LlamytasOnBoarding
Disenio onBoarding para la materia de PDM

### Prerequisites
Instalar las siguientes librerias:

```
npm install react-native-vector-icons

react-native link react-native-vector-icons

npm install react-native-elements
```

### Installing

Dentro de un proyecto de React Native

Instalar la libreria

```
npm i llamytasonboarding
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


## Built With

* [React Native](https://reactnative.dev) - El framework
* [MaterialIcons](https://materialdesignicons.com) - Iconos

## Example

```
import React from 'react';
import Onboarding from 'llamytasonboarding/src';
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


const App= () => {
  return (
    <>
      <Onboarding data={data} onPressFinal={onPressFinal} onPressDismiss={onPressDismiss} />
    </>
  );
};

export default App;

```
# Documentation

## Functions

| Name | Description | Type |
| :---:          |     :---:      |         :---:  |
| onPressFinal   | Final Step Function (navigate To)     | Func    |
| onPressDismiss     | Dissmiss Steps (Navigate Directly To)       | Func      |


## OnBoarding Info

| Name | Description | Type |
| :---:          |     :---:      |         :---:  |
| title   | Describe screen Title     | string    |
| text   | Secondary screen text     | string    |
| Img   | Image Screen     | string    |
| colorFondo   | Backgroun color, Right button text color, left button Backgroun color     | string    |
| textBotonPrev   | Text for Left Button    | string    |
| textBotonNext   | Text for Right Button    | string    |
| color   | Right button bk color, left button border and text color, text and title color     | string    |
| iconoNext   | Material Icons name for the icon     | string    |
| iconoPrev   | Material Icons name for the icon     | string    |



## Versioning

0.0.3

## Authors

* **Bernarda Serrano** - [Llamyta](https://github.com/Llamyta)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
