import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptNumber, setAttemptNumber] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttemptNumber(attemptNumber > 0 ? attemptNumber - 1 : attemptNumber);
        setInProgress(!inProgress ? !inProgress : inProgress);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttemptNumber(attemptNumber + 1);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || attemptNumber === 0}
            >
                Start Quiz
            </Button>
            {attemptNumber}

            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>

            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
