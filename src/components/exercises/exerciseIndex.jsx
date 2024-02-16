import { useState, useEffect } from 'react';
 import  { allExercises }  from '../../api/exercise'
 import { Route, Routes, Link } from 'react-router-dom'
import "./exerciseIndex.css"
 
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
        <div id="index">
            <center>
            <h1 id="title">Search All Exercises</h1>
            <form action="" onSubmit={handleSubmit} id="searchForm">
                <label htmlFor="">
                    Muscle Group 
                    <input type="text" 
                    name="search"
                    value={search}
                    onChange={handleChange}
                    placeholder='Enter muscle group'
                    /></label>
                    <button id="btnSearch" type="submit">Search</button>
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

                        
                            <Link to= {`/exercises/${exercise.name}`}
                                state= {{exercise:exercise}} >
                            {console.log('STATE', {exercise:exercise})}
                               {console.log('exercise', exercise)}
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
