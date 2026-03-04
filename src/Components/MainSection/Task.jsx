import React from 'react';

const Task = () => {
    return (
        <div className='text-black ml-8'>
           <div>
             <h3 className='text-black text-3xl font-bold mb-4 '>Task Status</h3>
            <p>Select a ticket to add to Task Status</p>
           </div>
           <div className='mt-8'>
             <h3 className='text-black text-3xl font-bold mb-4 '>Resolved Task</h3>
            <p>No resolved tasks yet.</p>
           </div>
        </div>
    );
};

export default Task;