
import React from 'react';
import Onboarding from './View/Onboarding';

const index = ({data,onPressFinal,onPressDismiss}) => {
    return (
        <>
            <Onboarding data={data} onPressFinal={onPressFinal} onPressDismiss={onPressDismiss} />
        </>
    );
}

export default index;