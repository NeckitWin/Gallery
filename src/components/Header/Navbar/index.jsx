import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const [links] = useState([
        {name: "", path: "/main"},
        {name: "Buy Art", path: "/buy-art"},
        {name: "Sell Art", path: "/sell-art"},
        {name: "About Us", path: "/about-us"},
        {name: "Your Account", path: "/account"},
        {name: "Help", path: "/help"},
        {name: "Cart", path: "/cart"}
    ]);
    const [active, setActive] = useState(null);
    const handleClick = (index) => {
        active !== index ? setActive(index) : setActive(null);
    }
    return (
        <nav className={s.nav}>
            <div className={s.navbar}>
                <div className={s.navleft}>
                    {links.slice(0, 4).map((el, index) => (
                        <NavLink onClick={() => handleClick(index)} className={`${s.link} ${index===active ? s.active : ""}`} to={el.path}>{el.name}</NavLink>
                    ))}
                </div>
                <div className={s.navright}>
                    {links.slice(4).map((el, index) => (
                        <NavLink onClick={() => handleClick(index+4)} className={`${s.link} ${index+4===active ? s.active : ""}`} to={el.path}>{el.name}</NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;