import Exercise from "./exercises/exerciseIndex";
import { Link } from "react-router-dom";
import "../background.css"
import "../home.css";

const Home = (props) => {
  const { msgAlert, user } = props
  console.log("props in home", props);

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div className="home">
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <center>
		<div >
        <h2 className="title">Fitness App</h2>
		
      { user ? 
      <div className="btnStyle">
      <Link to="exercises" style={linkStyle}>
          <button className="btnSignup">Search Exercises</button>
        </Link>

        <Link to="exercises/show-favorites" style={linkStyle}>
          <button className="btnSignin">Favorites</button>
        </Link>
        </div>
      :
      <div className="btnStyle">
        <Link to="sign-up" style={linkStyle}>
          <button className="btnSignup">Sign Up</button>
        </Link>

        <Link to="sign-in" style={linkStyle}>
          <button className="btnSignin">Sign In</button>
        </Link>
        </div>
        
}
		
		</div>
      </center>
    </div>
  );
};

export default Home;
