import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "🎄" | "🥚🐇" | "🎃" | "🦃" | "🎆";

export function CycleHoliday(): React.JSX.Element {
    const [Holiday, setHoliday] = useState<Holidays>("🎄");

    function byAlphabet(): void {
        let currentHoliday: string = Holiday;

        if (currentHoliday === "🎄") {
            setHoliday("🥚🐇");
        } else if (currentHoliday === "🥚🐇") {
            setHoliday("🎃");
        } else if (currentHoliday === "🎃") {
            setHoliday("🎆");
        } else if (currentHoliday === "🎆") {
            setHoliday("🦃");
        } else {
            setHoliday("🎄");
        }
    }

    function byDate(): void {
        let currentHoliday: string = Holiday;
        if (currentHoliday === "🎄") {
            setHoliday("🎆");
        } else if (currentHoliday === "🎆") {
            setHoliday("🥚🐇");
        } else if (currentHoliday === "🥚🐇") {
            setHoliday("🎃");
        } else if (currentHoliday === "🎃") {
            setHoliday("🦃");
        } else {
            setHoliday("🎄");
        }
    }

    return (
        <div>
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            Holiday: {Holiday}
            <Button onClick={byDate}>Advance by Year</Button>
        </div>
    );
}
