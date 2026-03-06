import React, { use } from 'react';
import Tiket from './Tiket';
import Task from './Task';
import { toast } from 'react-toastify';

const MainSection = ({ tiketAllData, progress, setProgress, count, setCount }) => {
    const newTiketData = use(tiketAllData);    
  
    // console.log(progress)
    return (
        <div className='w-[1280px] mx-auto pb-20 md:flex'>
            <div>
                 <h2 className='text-black ml-2 text-3xl font-bold mb-4'>Customer Tikets</h2>
            <div onClick={()=>{toast('Tikets Selected Completed')}} className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-[950px] ml-0'>               
                {
                    newTiketData.map(tiket => <Tiket
                    key={tiket.id}
                         tiket={tiket}
                         progress={progress}
                         setProgress={setProgress}
                         ></Tiket>)
                }
            </div>
            </div>
            <Task progress={progress}
            count={count}
            setCount={setCount                
            }></Task>
        </div>
    );
};

export default MainSection;