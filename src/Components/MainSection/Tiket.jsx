import React from 'react';
import { CgPlayStop } from 'react-icons/cg';
import { CiCalendarDate } from 'react-icons/ci';

const Tiket = ({ tiket, progress, setProgress }) => {
    const { title, description, customer, priority, status, createdAt } = tiket;

    const handleClick = (tiketData) => {
        setProgress([...progress, tiketData])

    }
    return (
        <>
            <div onClick={() => { handleClick(tiket) }} className="bg-white p-5 rounded-xl shadow text-black">
                <div className='flex justify-between items-center '>
                    <h2 className="card-title">{title}</h2>
                    <button className='bg-green-200 rounded-xl px-2 flex items-center'><CgPlayStop className='text-green-300' /> {status}</button>
                </div>
                <p className='my-2'>{description}</p>
                <div className='flex items-center justify-between'>
                    <p>{priority}</p>
                    <p>{customer}</p>
                    <div className='flex items-center gap-2'>
                        <CiCalendarDate />
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Tiket;