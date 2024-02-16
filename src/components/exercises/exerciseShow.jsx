import { useState, useEffect } from 'react';
import { Route, useNavigate, Link, useParams, useLocation} from 'react-router-dom'
import { getOneExercise, createExercise, updateExercise, deleteExercise } from '../../api/exercise';
import ExerciseFavCreate from './ExerciseFavCreate';
import EditExerciseModal from './EditExerciseModal';
import messages from '../shared/AutoDismissAlert/messages';

export default function ExerciseShow(props) {
    const {user, msgAlert} = props
    const [oneExercise, setOneExercise] = useState([]);
    //const [favorite, setFavorite] = useState()
    const [editModalShow, setEditModalShow] = useState(false)

     // this is a boolean, that we can switch between to trigger a page re-render
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const  exerciseData  = location.state
    const {exercise, fav} = exerciseData
    
    useEffect(() => {
       
        setOneExercise(exercise);
        
           
    }, [exercise, updated]);  

    // function updateExercise(){
    //     console.log('INSIDE UPDATE FAV EXERCISE', updateExercise)
    //     setOneExercise(updateExercise)

    // }

    function handleClick(e){
        e.preventDefault();

        if(fav === true){
           setEditModalShow(true)
        }else{
       
          createExercise(user, exercise)
            .then(res => {
                navigate('/exercises/show-favorites')
                
            })
            .catch(error => {
                console.log('ERROR', error)
            });
        }
     }

     function deleteOne(e){
        e.preventDefault();
        console.log('DELETE', exercise._id)
         deleteExercise(user, exercise._id)
            .then(() => {
                msgAlert({
                    heading: 'Exercise Deleted',
                    message: messages.deletePetSuccess,
                    variant: 'success'
                })
                navigate('/exercises/show-favorites')
             })
             .catch(error => {
                 console.log('ERROR', error)
                 msgAlert({
                    heading: 'Error Deleting Exercise',
                    message: messages.generalError,
                    variant: 'danger'
                })
             });
     }

    

    

    return (
        <div>
            <center>
                {[oneExercise].map((e, idx)=>{
                    return (
                        <div key={idx}>
                            <h1>{e.name}</h1>
                            <p>{e.muscle}</p>
                            <p>{e.equipment}</p>
                            <p>{e.instructions}</p>
                        </div>
                    )
                })}

             
                <button type="button" onClick={handleClick}>
                    {fav ? "Update Favorite" : "Add to Favorites"}
                </button>
                {
                    fav === true
                    ?
                    <button onClick={deleteOne}>Delete From Favorites</button>
                    :
                    null
                }

                <Link to='/exercises/create-favorite' state={{exercise:exercise}}>
                <button type="button" >Create Custom Exercise
                </button>
                </Link>
                
            
            </center>
            <EditExerciseModal 
                user={user}
                show={editModalShow}
                updateExercise={updateExercise}
                msgAlert={msgAlert}
                handleClose={() => setEditModalShow(false)}
                exercise={exercise}
                //triggerRefresh={() => setUpdated(!updated)}
            />
           
        </div>
        
    )
}