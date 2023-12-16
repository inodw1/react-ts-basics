import React, { useState } from "react";
import "./index.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/header";
import CourseGoalList from "./components/course-goal-list";

export type CourseGoal = {
    title: string;
    description: string;
    id: number;
};

function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    const handleAddGoal = () => {
        const newGoal: CourseGoal = {
            id: Math.random(),
            title: "Learn React + TS",
            description: "Learn it from the ground up",
        };
        setGoals((prevState) => {
            return [...prevState, newGoal];
        });
    };

    const handleDeleteGoal = (id: number) => {
        setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
    };

    return (
        <main>
            <Header image={{ src: goalsImg, alt: "A list of goals" }}>
                <h1>Your Course Goals</h1>
            </Header>
            <button onClick={handleAddGoal}>Add Goal</button>
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </main>
    );
}

export default App;
