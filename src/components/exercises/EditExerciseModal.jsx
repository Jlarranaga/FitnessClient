import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ExerciseForm from '../shared/ExerciseForm'
import messages from '../shared/AutoDismissAlert/messages'

export default function EditExerciseModal(props)  {
    // pull the important things from our props
    const { user, show, handleClose, updateExercise, msgAlert, triggerRefresh } = props
    // we're bringing in the pet from props, but only for the initial state
    // by using the original pet as our initial state for a NEW piece of state, specific to this component (called pet), we'll be able to modify the pet we are updating without affecting the original state in the parent component
    const [exercise, setExercise] = useState(props.exercise)

    const onChange = (e) => {
        e.persist()

        setExercise(prevExercise =>{
            const updatedName = e.target.name
            let updatedValue = e.target.value
           
            const updatedExercise = { 
                [updatedName] : updatedValue
            }
            return {
               ...prevExercise, ...updatedExercise
            } 
        }
        )
        
    }

    

    const onSubmit = (e) => {
        e.preventDefault()
        // make the API call
        console.log('INSIDE EDIT EXERCISE MODAL', exercise)
        updateExercise(user, exercise)
            // close the modal
            .then(() => handleClose())
            // message the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: messages.updatePetSuccess,
                    variant: 'success'
                })
            })
            // trigger a refresh
            .then(() => triggerRefresh())
            // send error message if applicable
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: messages.generalError,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <ExerciseForm 
                    exercise={exercise}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Update Exercise!"
                />
            </Modal.Body>
        </Modal>
    )
}

