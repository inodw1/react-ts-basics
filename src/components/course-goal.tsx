import React from "react";

/**
    type CourseGoalProps = {
        title: string;
        description: string;
    };

    @IMPORTANT
    If you plan on distributing to other developers,
    in which case you might wanna prefer an `interface`
    because it's a bit more extensible
*/

interface CourseGoalProps {
    title: string;
    description: string;
}

function CourseGoal({ title, description }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button>DELETE</button>
        </article>
    );
}

export default CourseGoal;
