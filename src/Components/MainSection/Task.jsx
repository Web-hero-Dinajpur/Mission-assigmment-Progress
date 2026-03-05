import React from 'react';
import Prog from './Prog/Prog';

const Task = ({ progress }) => {
    console.log(progress)
    return (
        <div className='text-black ml-8'>
            <div>
                <h3 className='text-black text-3xl font-bold mb-4 '>Task Status</h3>
                {
                    progress.length > 0 ? (
                        progress.map((prog) => (
                            <Prog key={prog.id} prog={prog}></Prog>
                        ))
                    ) : (
                        "Select a ticket to add to Task Status"
                    )
                }
            </div>
            <div className='mt-8'>
                <h3 className='text-black text-3xl font-bold mb-4 '>Resolved Task</h3>
                <p>No resolved tasks yet.</p>
            </div>
        </div>
    );
};

export default Task;