import './topbannar.css'
const TopBannar = ({ progress, count }) => {
    console.log(count.length)

    return (
        <div className='w-[1280px] mx-auto lg:flex gap-4 justify-between py-[80px] '>
            <div className="w-full flex-1 text-center bg-[#8021d9] py-20 text-white rounded-xl bannar bannar2">
                <p className="text-xl">In-Progress</p>
                <h2 className="font-bold text-4xl mt-3">{progress.length > 0 ? progress.length - count.length : 0}</h2>
            </div>
            <div className="w-full flex-1 text-center bg-[#41Be6c] py-20 text-white rounded-xl bannar">
                <p className="text-xl">Resolve</p>
                <h2 className="font-bold text-4xl mt-3">{count.length}</h2>
            </div>
        </div>
    );
};

export default TopBannar;