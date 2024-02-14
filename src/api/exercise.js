import apiUrl from '../apiConfig'
import axios from 'axios'

// export default function allExercises (search){
//     return axios(`${apiUrl}/exercises?search=${search}`)
// }

// export const allExercises =  (search) => {
//     return axios(`${apiUrl}/exercises?search=${search}`)
// }

export const allExercises =  (search) => {
    return axios({
        url: `${apiUrl}/exercises/search?search=${search}`,
        method: 'POST',
        
})
}

export const getOneExercise = (name) => {
    console.log('API CLIENT CALL name:', name)
    return axios({
        
        url: `${apiUrl}/exercises/${name}`,
        method: 'GET'
    })
}

export const createExercise = (user, exercise) => {
    return axios({
        url: `${apiUrl}/exercises`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { exercise }
    })
}