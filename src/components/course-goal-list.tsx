import React, { type FC } from "react";
import { type CourseGoal as CourseGoalObj } from "../App";
import CourseGoal from "./course-goal";

interface CourseGoalListProps {
    goals: CourseGoalObj[]; // Array<CourseGoalObj>
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        id={goal.id}
                        title={goal.title}
                        onDelete={onDeleteGoal}
                    >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
