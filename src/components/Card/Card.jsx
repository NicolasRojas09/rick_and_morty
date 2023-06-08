import style from './Card.module.css'
import { NavLink } from 'react-router-dom';
import { addfav, removefav } from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addfav, removefav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removefav(id)
      }
      else{
         setIsFav(true)
         addfav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.carta}>
            <div className={style.cardTop}>
               {
                  isFav 
                  ? (
                     <button className={style.buttonFav} onClick={handleFavorite}>💚</button>
                  ) : (
                     <button className={style.buttonFav} onClick={handleFavorite}>🤍</button>
                  )
               }
               <h2>{id}</h2>
               <button onClick={() => onClose(id)} className={style.boton}>X</button>
            </div>
            <img src={image} alt={name} className={style.imagen}/>
            <NavLink to={`/detail/${id}`} className={style.names}>
               <h1>{name}</h1>
            </NavLink>
            <h2>status: {status}</h2>
            <h2>species: {species}</h2>
            <h2>gender: {gender}</h2>
            <h2>origin: {origin}</h2>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addfav: (character) => { dispatch(addfav(character)) },
      removefav: (id) => { dispatch(removefav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)