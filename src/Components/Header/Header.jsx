import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-10 w-[1400px] mx-auto border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={Profile}></img>
        </div>
    );
};

export default Header;