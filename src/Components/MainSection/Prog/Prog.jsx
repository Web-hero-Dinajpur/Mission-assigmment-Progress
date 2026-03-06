import { toast } from "react-toastify";

const Prog = ({ prog, count, setCount }) => {

    const handleClick =(counter)=>{
        setCount([...count, counter])
    }
    return (
        <div className="font-bold my-4 bg-[#FFFFFF] p-3 rounded-lg">
            <p>{prog.title}</p>
                <button onClick={() => { 
                    handleClick(prog)
                    toast('Status Completed') }} className="btn border-none btn-block bg-[#02A53B] my-2">Completed</button>
           
        </div>
    );
};

export default Prog;