/**
 * NOTE:
 * here use `type` keyword with ReactNode
 * it will help to remove import later
 * when code run in the browser
 */
import React, { type FC, type PropsWithChildren, type ReactNode } from "react";

/**
    type CourseGoalProps = {
        title: string;
        description: string;
    };

    NOTE:
    If you plan on distributing to other developers,
    in which case you might wanna prefer an `interface`
    because it's a bit more extensible
*/

interface CourseGoalProps {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

/**
    NOTE:
    also we can use `PropsWithChildren` type
    type CourseGoalProps = PropsWithChildren<{ title: string }>;
    or function CourseGoal({ title, children }: PropsWithChildren<CourseGoalProps>) {
 */

const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>DELETE</button>
        </article>
    );
};
/*
function CourseGoal({ title, children }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>DELETE</button>
        </article>
    );
}
*/

export default CourseGoal;
