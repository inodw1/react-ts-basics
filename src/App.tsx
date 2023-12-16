import React from "react";
import "./index.css";
import CourseGoal from "./components/course-goal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/header";

function App() {
    return (
        <main>
            <Header image={{ src: goalsImg, alt: "A list of goals" }}>
                <h1>Your Course Goals</h1>
            </Header>
            <CourseGoal title="Learn React + TS">
                <p> Learn it from the ground up</p>
            </CourseGoal>
        </main>
    );
}

export default App;
