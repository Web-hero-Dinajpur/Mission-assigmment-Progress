// import bannar1 from '../../../assets/vector1.png'
// import bannar2 from '../../../assets/vector2.png'
const TopBannar = () => {

    return (
        <div className='w-[1280px] mx-auto flex gap-4 justify-between py-[80px]'>
            
            <div className="w-full flex-1 bg-blue-400 text-center  text-white rounded-xl">             
                <div className=' text-center'>
                 <p className="text-xl">In-Progress</p>
                <h2 className="font-bold text-4xl mt-3">0</h2>
               </div>
            </div>
            
            <div className="flex-1 bg-green-300">
                <h2>2nd card</h2>
            </div>
        </div>
    );
};

export default TopBannar;