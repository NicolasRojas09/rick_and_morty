import axios from "axios";
import { useParams } from "react-router-dom";   
import { useState, useEffect } from "react";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <img src={character?.image} alt="" />
        </div>
    )
}
export default Detail;