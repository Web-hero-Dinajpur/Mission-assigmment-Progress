const Prog = ({ prog }) => {
    return (
        <div className="font-bold my-4 bg-[#FFFFFF] p-3 rounded-lg">
            <p>{prog.title}</p>
            <button className="btn border-none btn-block bg-[#02A53B] my-2">Completed</button>
        </div>
    );
};

export default Prog;