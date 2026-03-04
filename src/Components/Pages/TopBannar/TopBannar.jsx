// import bannar1 from '../../../assets/vector1.png'
// import bannar2 from '../../../assets/vector2.png'
import './topbannar.css'
const TopBannar = () => {
    // bg-gradient-to-r from-[#2F46E5] to-[#9C3AED]
    //                 hover:from-[#4338CA] hover:to-[#6D28D9]
    //                 text-white px-4 py-2 rounded-md 
    //                 flex items-center gap-2
    return (
        <div className='w-[1280px] mx-auto lg:flex gap-4 justify-between py-[80px] '>
            <div className="w-full flex-1 text-center bg-[#8021d9] py-20 text-white rounded-xl bannar bannar2">
                <p className="text-xl">In-Progress</p>
                <h2 className="font-bold text-4xl mt-3">0</h2>
            </div>
            <div className="w-full flex-1 text-center bg-[#41Be6c] py-20 text-white rounded-xl bannar">
                <p className="text-xl">In-Progress</p>
                <h2 className="font-bold text-4xl mt-3">0</h2>
            </div>
        </div>
    );
};

export default TopBannar;