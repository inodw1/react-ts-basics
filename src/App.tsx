import React, { useState } from "react";
import "./index.css";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/header";
import CourseGoalList from "./components/course-goal-list";
import NewGoal from "./components/new-goal";

export type CourseGoal = {
    title: string;
    description: string;
    id: number;
};

function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    const handleAddGoal = (goal: string, summary: string) => {
        const newGoal: CourseGoal = {
            id: Math.random(),
            title: goal,
            description: summary,
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
            <NewGoal addGoal={handleAddGoal} />
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </main>
    );
}

export default App;
