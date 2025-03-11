import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setleftDie] = useState<number>(2);
    const [rightDie, setrightDie] = useState<number>(5);

    function leftRoll(): void {
        setleftDie(d6);
    }

    function rightRoll(): void {
        setrightDie(d6);
    }

    return (
        <div>
            <Button onClick={leftRoll}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rightRoll}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie && leftDie != 1 ?
                <div>Win</div>
            :   null}
            {leftDie === rightDie && leftDie === 1 ?
                <div>Lose</div>
            :   null}
        </div>
    );
}
