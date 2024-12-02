import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div>

            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Pc Lux - Hardware al alcance de tu mano</a>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#">Motherboards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#">Motherboards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#">Procesadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#">Placas de video</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>

        </div>
    )
}
export default NavBar;