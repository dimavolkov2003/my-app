import s from './Header.module.css';
import logo from './../images/logo.png';

const Header = () => {
    return (
        <header className={s.header}>
            <div className= {s.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={s.name_website}>STALKER</div>
        </header>
    );
}

export default Header;