import { useState, useEffect } from 'react';
 import  { allExercises }  from '../../api/exercise'
 import { Route, Routes, Link } from 'react-router-dom'
 
 export default function ExerciseIndex() {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);

    function handleChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        allExercises(search)
            .then(res => {
                console.log(res.data)
                setExercises(res.data)
            })
            .catch(error => {
                // msgAlert({
                //     heading: 'Oh no!',
                //     message: messages.generalError,
                //     variant: 'danger'
                // })
                // setError(true)
                console.log('ERROR', error)
            });
	
    }

    return (
        <div>
            <center>
            <h1>Exercise Hub</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Muscle Group 
                    <input type="text" 
                    name="search"
                    value={search}
                    onChange={handleChange}
                    /></label>
                    <button type="submit">Search</button>
            </form>

            <div>

                {exercises.map((exercise, index) => {
                    return (
                        <div key={index} style={{
                            width: "15em", 
                            backgroundColor: "Grey",
                        padding: 2,
                        borderRadius: 10,
                        marginBlock: 10,
                        }}>
                            <Link to={`/exercises/${exercise.name}`}>
                               
                            <h3>{exercise.name}</h3>
                            </Link>
                
                        </div>
                    )
                })}
            </div>
            </center>

        </div>
    )
}
