import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css'
import logo from '../../vistas/Rick_and_Morty.svg.png'
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div className={style.navBar}>
            <div className={style.logoAndAbout}>
                
                <a className={style.logoEspacio}>
                    <NavLink to={'/home'}><img src={logo} alt="logo" className={style.logo}/></NavLink>
                </a>
                <button className={style.aboutBtn}>
                    <NavLink className={style.about} to={'/about'}>about</NavLink>
                </button>
            </div>
            <div className={style.searchAndFavs}>
                <button>
                    <NavLink to={'/favorites'}>Favorites</NavLink>
                </button>
                    <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}

export default Nav;