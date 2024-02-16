import { Form, Button, Container } from 'react-bootstrap'

const ExerciseForm = ({ exercise, handleChange, handleSubmit, heading}) => {
    
    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
           
                <Form.Group  className='m-2'>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                    placeholder="Enter exercise name"
                        id="name"
                        name="name"
                        value={exercise.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Type of Exercise: </Form.Label>
                    <Form.Control
                    placeholder="Enter type: strength, cardio, etc."
                        id="type"
                        name="type"
                        value={exercise.type}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Muscle: </Form.Label>
                    <Form.Control
                    placeholder="Enter muscle"
                        id="muscle"
                        name="muscle"
                        value={exercise.muscle}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Equipment: </Form.Label>
                    <Form.Control
                    placeholder="Enter equipment used"
                        id="equipment"
                        name="equipment"
                        value={exercise.equipment}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Difficulty: </Form.Label>
                    <Form.Control
                    placeholder="Enter difficulty level: beginner, intermediate, advanced"
                        id="difficulty"
                        name="difficulty"
                        value={exercise.difficulty}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Instructions: </Form.Label>
                    <Form.Control
                    placeholder="Enter instructions"
                        id="instructions"
                        name="instructions"
                        value={exercise.instructions}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="m-2" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ExerciseForm;