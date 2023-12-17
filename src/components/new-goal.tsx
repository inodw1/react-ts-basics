import React, { useRef, type FormEvent } from "react";

interface NewGoalProps {
    addGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({ addGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        addGoal(enteredGoal, enteredSummary);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <button onClick={() => {}}>Add Goal</button>
        </form>
    );
};

export default NewGoal;
