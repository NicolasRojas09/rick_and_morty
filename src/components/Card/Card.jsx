import style from './Card.module.css'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.carta}>
            <div className={style.cardTop}>
               <h2>{id}</h2>
               <button onClick={() => onClose(id)} className={style.boton}>X</button>
            </div>
            <img src={image} alt={name} className={style.imagen}/>
            <h1>{name}</h1>
            <h2>status: {status}</h2>
            <h2>species: {species}</h2>
            <h2>gender: {gender}</h2>
            <h2>origin: {origin}</h2>
      </div>
   );
}