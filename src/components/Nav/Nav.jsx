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
            </div>
            <div className={style.searchAndFavs}>
                <button className={style.aboutFavBtns}>
                    <NavLink className={style.aboutFav} to={'/about'}>about</NavLink>
                </button>
                <button className={style.aboutFavBtns}>
                    <NavLink className={style.aboutFav} to={'/favorites'}>Favorites</NavLink>
                </button>
                <hr/>    
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}

export default Nav;