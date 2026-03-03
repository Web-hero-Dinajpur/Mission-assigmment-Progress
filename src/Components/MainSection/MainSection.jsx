import React, { use } from 'react';
import Tiket from './Tiket';

const MainSection = ({tiketAllData}) => {
    const newTiketData = use(tiketAllData);
    console.log(newTiketData)
    return (
        <div>
            {
                newTiketData.map(tiket=><Tiket tiket={tiket}></Tiket>)
            }
        </div>
    );
};

export default MainSection;