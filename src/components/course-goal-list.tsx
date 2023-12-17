import React, { type ReactNode, type FC } from "react";
import { type CourseGoal as CourseGoalObj } from "../App";
import CourseGoal from "./course-goal";
import InfoBox from "./info-box";

interface CourseGoalListProps {
    goals: CourseGoalObj[]; // Array<CourseGoalObj>
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet. Start adding some!
            </InfoBox>
        );
    }

    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="medium">
                You're collecting a lot of goals. Don't put too much on your
                plate.
            </InfoBox>
        );
    }

    return (
        <>
            {warningBox}
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
        </>
    );
};

export default CourseGoalList;
