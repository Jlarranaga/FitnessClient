import { useEffect, useState } from "react"
import { getAllExercises } from "../../api/exercise";
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

export default function ExerciseShowFavs(){

    const [exercises, setExercises] = useState([])
    const [favorite, setFavorite] = useState()
    const [updated, setUpdated] = useState(false)
    
    useEffect(() => {   
        console.log('INSIDE USE EFFECT')
        getAllExercises()
            .then(res => {
                setExercises(res.data.exercises)
                setFavorite(true)
                console.log('EXERCISES', res.data.exercises)
            })
            .catch(error => {
                console.log('GET ALL ERROR', error)
            }); 
        
    }
    , [updated]);

    // const triggerRefresh = () => {
    //     setUpdated(!updated)
    // }

    console.log('EXERCISES', exercises)

    return (
        <div>
            <h1>ExerciseShowFavs</h1>

            {exercises.map((exercise, index) => {
                if(!exercise || exercise === undefined){
                    return <h1>No saved exercises</h1>
                }else{
                return (
                    // <div key={index} style={{
                    //     width: "15em", 
                    //     backgroundColor: "Grey",
                    // padding: 2,
                    // borderRadius: 10,
                    // marginBlock: 10,
                    // }}> 
                    // <h3>{exercise.name}</h3>
                    // <p>{exercise.muscle}</p>
                    // <p>{exercise.equipment}</p>
                    // <p>{exercise.instructions}</p>
                    // </div>

                      <div className="container-md" style={cardContainerLayout}>
                       <Card key={index} style={{ width: '30%', margin: 5 }} >
                         <Card.Header>{exercise.name}</Card.Header>
                       <Card.Body>
                           <Card.Text>
                               <Link to={`/exercises/${exercise.name}`} state={{exercise: exercise, fav: favorite}} className='btn btn-info'>
                                   View {exercise.name}
                               </Link>
                           </Card.Text>
                           {/* { pet.owner ?
                               <Card.Footer>owner: {pet.owner.email}</Card.Footer>
                               :
                               null
                           } */}
                       </Card.Body>
                       </Card>
                       </div>
                )
                }
            })}
        </div>
    )
}