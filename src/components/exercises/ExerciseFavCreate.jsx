import { useLocation, useState } from 'react-router-dom';
import ExerciseForm from '../shared/ExerciseForm';
import { createExercise } from '../../api/exercise';

export default function ExerciseFavCreate(props) {
    const location = useLocation();
    const { exercise } = location.state
    console.log('exercise in ExerciseFavCreate:', exercise);
    const [collection, setCollection] = useState({
        collectionName: '',
        name: '',
        type: '',
        muscle: '',
        equipment: '',
        difficulty: '',
        instructions: ''
    })

    function handleClickCollection(e){
        e.preventDefault();
        console.log('add to collection');
    }

    function handleSubmitCollection(e){
        e.preventDefault();
        console.log('add to collection');
    }

    function handleClick(e){
        e.preventDefault();
        console.log('add to collection');
    }


    return (
        <div>
            <h1>Add to Collection</h1>
            <h3>Create a new collection or select one:</h3>
            
            {collection.map((c, idx)=>{
                if(!collection){
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
            })}

            <form action="" onSubmit={handleSubmitCollection}>
            <input type="text" value={} placeholder='Collection Name'/> 
            </form>

            <ExerciseForm
            collection={collection}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Create a new exercise!">
            <button>Create Custom Exercise</button>
            </ExerciseForm>

            {/*  */}
            <form action="" onSubmit={onSubmit}>
                <label htmlFor="">
                    Collection Name
                    <input type="text" name="collection"/>
                </label>
                <button type="submit">Create</button>
                </form>
        </div>
    )
}