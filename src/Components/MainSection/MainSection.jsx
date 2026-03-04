import React, { use } from 'react';
import Tiket from './Tiket';

const MainSection = ({ tiketAllData }) => {
    const newTiketData = use(tiketAllData);
    console.log(newTiketData)
    return (
        <div className='w-[1280px] mx-auto pb-20'>
             <h2 className='text-black ml-2 text-3xl font-bold mb-4'>Customer Tikets</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-[950px] ml-0'>
               
                {
                    newTiketData.map(tiket => <Tiket tiket={tiket}></Tiket>)
                }
            </div>
        </div>
    );
};

export default MainSection;