import { useState, useEffect } from 'react';
import { Route, Routes, Link, useParams} from 'react-router-dom'
import { getOneExercise } from '../../api/exercise';
import ExerciseFavCreate from './ExerciseFavCreate';
 
export default function ExerciseShow() {
    const { name } = useParams();
    const [exercise, setExercise] = useState([]);
   // const navigate = useNavigate();
    console.log(name)

    function handleClick(e){
        e.preventDefault();
        console.log('add to collection');
        
    
     }

    useEffect(() => {
        getOneExercise(name)
            .then(res => {
                console.log('SINGLE EXERCISE:', res.data);
                setExercise(res.data);
            })
            .catch(error => {
                console.log('ERROR', error);
            });
    }, []);  

    return (
        <div>
            <center>
                {exercise.map((e, idx)=>{
                    return (
                        <div key={idx}>
                            <h1>{e.name}</h1>
                            <p>{e.muscle}</p>
                            <p>{e.equipment}</p>
                            <p>{e.instructions}</p>
                        </div>
                    )
                })}

                <Link to='/exercises/create-favorite' state={{exercise:exercise}}>
                <button type="button" >Add to collection
                </button>
                </Link>
                
            
            </center>
        </div>
    )
}