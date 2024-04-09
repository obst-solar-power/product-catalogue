import Logo from "../assets/obstLogo.png"
import { Outlet, Link } from 'react-router-dom'

const Header = function () {

    return (
        <>
            <div className="bg-gray-100">
                <div className="py-5 container mx-auto">
                    <Link to="/" className="block w-fit">
                    <img src={Logo} className="w-full max-w-[500px]" />
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header