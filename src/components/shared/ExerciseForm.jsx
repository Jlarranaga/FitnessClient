import { Form, Button, Container } from 'react-bootstrap'

const ExerciseForm = ({ handleSubmit, handleChange, collection, heading}) => {
    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
            <Form.Group  className='m-2'>
                    <Form.Label>Collection Name: </Form.Label>
                    <Form.Control
                    placeholder="Enter collection name"
                        id="collectionName"
                        name="collectionName"
                        value={collection.collectionName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                    placeholder="Enter exercise name"
                        id="name"
                        name="name"
                        value={collection.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Type of Exercise: </Form.Label>
                    <Form.Control
                    placeholder="Enter type: strength, cardio, etc."
                        id="type"
                        name="type"
                        value={collection.type}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Muscle: </Form.Label>
                    <Form.Control
                    placeholder="Enter muscle"
                        id="muscle"
                        name="muscle"
                        value={collection.muscle}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Equipment: </Form.Label>
                    <Form.Control
                    placeholder="Enter equipment used"
                        id="equipment"
                        name="equipment"
                        value={collection.equipment}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Difficulty: </Form.Label>
                    <Form.Control
                    placeholder="Enter difficulty level: beginner, intermediate, advanced"
                        id="difficulty"
                        name="difficulty"
                        value={collection.difficulty}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group  className='m-2'>
                    <Form.Label>Instructions: </Form.Label>
                    <Form.Control
                    placeholder="Enter instructions"
                        id="instructions"
                        name="instructions"
                        value={collection.instructions}
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