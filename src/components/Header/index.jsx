import s from "./Header.module.css";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
    return (
        <header className={s.header}>
            <Navbar />
            <div className={s.header__content}>
                <h1>SIMPLY ART. SIMPLY BEAUTIFUL.</h1>
                <p className={s.subtitle}>You were looking for what you found.</p>
                <Search/>
            </div>
        </header>
    );
}

export default Header;