import apiUrl from '../apiConfig'
import axios from 'axios'

//3rd party API call through FitnessAPI to get data
export const allExercises =  (search) => {
    return axios({
        url: `${apiUrl}/exercises/search?search=${search}`,
        method: 'POST',
        
})
}

//3rd party API call through FitnessAPI to get data
export const getOneExercise = (name) => {
    
    return axios({
        
        url: `${apiUrl}/exercises/${name}`,
        method: 'GET'
    })
}

// FitnessAPI call to create a new exercise in mongoDB
export const createExercise = (user, newExercise) => {
    
    return axios({
        url: `${apiUrl}/exercises`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { exercise: newExercise }
    })
}

// FitnessAPI call to get all exercises from mongoDB
export const getAllExercises = () => {
    return axios(`${apiUrl}/exercises`)
}

//FitnessAPI call to update exercise in mongoDB
export const updateExercise = (user, updatedExercise) => {
    
    return axios({
        url: `${apiUrl}/exercises/${updatedExercise._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { exercise: updatedExercise }
    })
}

//FitnessAPI call to delete exercise from mongoDB
export const deleteExercise = (user, id) => {
    
    return axios({
        url: `${apiUrl}/exercises/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}