import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ExerciseForm from '../shared/ExerciseForm';
import { createExercise, getAllExercises } from '../../api/exercise';

export default function ExerciseFavCreate() {
    const location = useLocation();
    const singleExercise = location.state
    console.log('SINGLE EXERCISE', singleExercise)
    const [exercise, setExercise] = useState({
        
        name: '',
        type: '',
        muscle: '',
        equipment: '',
        difficulty: '',
        instructions: ''
    })

    useEffect(() => {
       
        setExercise(singleExercise);
        console.log('INSIDE USE EFFECT', singleExercise)
           
    }, [singleExercise]);  

    console.log('AFTER USE EFFECT', exercise)

    //Grabs all exercises from FitnessAPI/mongoDB when page loads
    // useEffect(() => {
    //     getAllExercises()
    //         .then(res => {
    //             console.log(res.data)
    //             setExercise(res.data)
    //         })
    //         .catch(error => {
    //             console.log('ERROR', error)
    //         });
    // }, []);

    //Collection already exists/new, add exercise to collection
    function handleClickCollection(e){
        e.preventDefault();
        setExercise({
            name: exercise.name,
            type: exercise.type,
            muscle: exercise.muscle,
            equipment: exercise.equipment,
            difficulty: exercise.difficulty,
            instructions: exercise.instructions
        })

    }

    // function handleSubmitCollection(e){
    //     e.preventDefault();
    //     console.log('add to collection');
    // }

    function handleClick(e){
        e.preventDefault();
        console.log('add to collection');
    }

    function onChange(e){
        e.preventDefault();
        //setCollection({...collection, [e.target.name]: e.target.value})
    }   

    function onSubmit(e){
        e.preventDefault();
        console.log('add to collection');
        // createExercise(collection)
        //     .then(res => {
        //         console.log(res.data)
        //         //setCollection(res.data)
        //     })
        //     .catch(error => {
        //         console.log('ERROR', error)
        //     });
    }   


    return (
        <div>
            <h1>Add to Collection</h1>
            <h3>Create a new collection or select one:</h3>
            
            {/* {[collection].map((c, idx)=>{
                if(collection.length === 0 || !collection){
                    return <h3>No exercise collections yet!</h3>
                }else{
                return (
                    <div key={idx}>
                
                        <button onClick={handleClickCollection}>
                            {c.collectionName}
                            </button>
                    </div>
                )
                }
            })} */}

            {/* <h3>Create New Collection</h3>
            <form onSubmit={handleClickCollection}>
            <input type="text" placeholder='Collection Name'/> 
            <button type="submit">Create Collection</button>
            </form> */}

            <h3>Add Exercise to Favorites</h3>
            <form onSubmit={handleClickCollection}>
            <input type="text" placeholder='Collection Name'/> 
            <button type="submit">Add to Favorites</button>
            </form>

            {/* Creating custom exercise, Hide this option if custom === false */}
            {console.log('exercise', exercise)}
            <ExerciseForm
            exercise = {exercise}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Create a new exercise!" />
            


            {/*  */}
            <form action="" onSubmit={onSubmit}>
                <label>
                    Collection Name
                    <input type="text" name="collection"/>
                </label>
                <button type="submit">Create</button>
                </form>
        </div>
    )
}
