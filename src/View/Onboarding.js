import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import VistaOnboard from '../Components/VistaOnboard';

const OnBoarding = ({ data, onPressFinal, onPressDismiss }) => {
  const [actual, setActual] = useState(0);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const array = [];
    let aux = 0;
    data.forEach(e => {
      // console.log(e)
      const informacion = e;
      informacion.id = aux;
      aux = aux + 1;
      array.push(informacion);
    });
    setInfo(array);

  }, []);


  return (
    <>
      {info ? (
        <>
          {info.map(e => (
            <>
              
              {e.id == actual ? (

                <VistaOnboard
                  //Para la descripcion
                  Img={e.Img}
                  textTitle={e.title}
                  textDescription={e.text}
                  //Para los Botones
                  colorFondo={e.colorFondo}
                  title1={e.textoBotonPrev}
                  title2={e.textoBotonNext}
                  iconoNext={e.iconoNext}
                  iconoPrev={e.iconoPrev}
                  funcionBoton1={(() => {
                    if (e.id == 0) {
                      onPressDismiss();
                    }
                    else if (e.id > 0) {
                      setActual(e.id - 1);
                    }
                  })}

                  funcionBoton2={(() => {
                    if (e.id < info.length - 1) {
                      setActual(e.id + 1);
                    }
                    else {
                      onPressFinal();
                    }
                  })}
                  color={e.color}
                />
                
              ) : null}
            </>
          ))}
        </>
      ) : null}
    </>

  );
};

export default OnBoarding;
