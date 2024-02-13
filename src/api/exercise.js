import apiUrl from '../apiConfig'
import axios from 'axios'

export default function allExercises (search){
    return axios(`${apiUrl}/exercises`)
}