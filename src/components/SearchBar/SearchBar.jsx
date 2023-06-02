import style from './SearchBar.module.css'
import vistas from '../../vistas/pngegg.png'
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.search}>
         <input type='search' onChange={handleChange} value={id}/>
         <button className={style.buttonPistol} onClick={() => {onSearch(id); setId('')}}>
            <img src= {vistas} alt='PortalPistol' className={style.pistol}/></button>
      </div>
   );
}
