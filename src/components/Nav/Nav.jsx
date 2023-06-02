import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css'

const Nav = ({ onSearch }) => {
    return(
        <div className={style.navBar}>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;