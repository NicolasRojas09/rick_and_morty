import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    return(
        <div className={style.navBar}>
            <button>
                <Link to={'/home'}>home</Link>
            </button>
            <button>
                <Link to={'/about'}>about</Link>
            </button>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;