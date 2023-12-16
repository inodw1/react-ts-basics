import React, { type FC } from "react";
import { type CourseGoal as CourseGoalObj } from "../App";
import CourseGoal from "./course-goal";

interface CourseGoalListProps {
    goals: CourseGoalObj[]; // Array<CourseGoalObj>
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals }) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
