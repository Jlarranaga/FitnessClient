 import allExercises from '../../api/exercise'
 
 export default function exerciseIndex() {

    function handleChange(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submit')
        allExercises(e.target.value)
    }

    return (
        <div>
            <h1>Exercise Hub</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Muscle Group 
                    <input type="text" 
                    name="search"
                    // value='search'
                    onChange={handleChange}
                    /></label>
                    <button type="submit">Search</button>
            </form>

        </div>
    )
}