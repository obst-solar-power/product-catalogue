import Logo from '../assets/logo.png'

const Preloader = function(){

    return (
        <div className="h-screen w-screen z-10 bg-primary flex items-center justify-center bg-[#0f2745] fixed top-0 left-0">
            <div className="block">
            <img src={Logo} alt="" className='w-[250px] max-w-[80%] mx-auto' />
                <h1 className="text-7xl font-normal text-white text-center">
                    OBST
                </h1>
            </div>
        </div>
    )
}
export default Preloader