import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as React from "react";

interface WorkoutProps {
    totalTime: number;
}

function paceAsMinutes(pace: number) {
    let minutes = Math.floor(pace / 60);
    let seconds = Math.floor(pace % 60);
    return minutes + ":" + seconds;
}

function ContinuousWorkouts({ totalTime }: WorkoutProps) {
    let oneKmPace = totalTime / 3;
    return (
        <>
            <h3>אימוני רצף</h3>
            <div className="accordion" id="continousWorkoutsAccordion">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkoutOne" aria-expanded="true" aria-controls="collapseWorkoutOne">
                            אימו רצף נרחב
                        </button>
                    </h4>
                    <div id="collapseWorkoutOne" className="accordion-collapse collapse show" data-bs-parent="#continousWorkoutsAccordion">
                        <div className="accordion-body">רוץ עד 3 קילומטר בקצב {paceAsMinutes(oneKmPace * 1.4)} לקילומטר </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkoutTwo" aria-expanded="true" aria-controls="collapseWorkoutTwo">
                            אימון רצף בינוני קבוע
                        </button>
                    </h4>
                    <div id="collapseWorkoutTwo" className="accordion-collapse collapse" data-bs-parent="#continousWorkoutsAccordion">
                        <div className="accordion-body">רוץ עד 3 קילומטר בקצב {paceAsMinutes(oneKmPace * 1.15)} לקילומטר</div>
                    </div>
                </div>
            </div>
            {/* <ul className="list-group">
                <li className="list-group-item">
                    <p>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#first-continuous-workout" aria-expanded="false" aria-controls="collapseExample">
                            אימון רצף נרחב
                        </button>
                    </p>
                    <div className="collapse" id="first-continuous-workout">
                        <div className="card card-body">רוץ עד 3 קילומטר בקצב {paceAsMinutes(oneKmPace * 1.4)} לקילומטר</div>
                    </div>
                </li>
                <li className="list-group-item">
                    <p>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#second-continuous-workout" aria-expanded="false" aria-controls="collapseExample">
                            אימון רצף בינוני קבוע
                        </button>
                    </p>
                    <div className="collapse" id="second-continuous-workout">
                        <div className="card card-body">רוץ עד 3 קילומטר בקצב {paceAsMinutes(oneKmPace * 1.15)} לקילומטר</div>
                    </div>
                </li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul> */}
        </>
    );
}

function Calculator() {
    const [continuousWorkouts, setContinuousWorkouts] = useState(<></>);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function handleCalculateClick(e: React.MouseEvent) {
        e.preventDefault();
        let totalSecondsToFinish = seconds + minutes * 60 + hours * 60 * 60;
        setContinuousWorkouts(<ContinuousWorkouts totalTime={totalSecondsToFinish}></ContinuousWorkouts>);
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="lastExamResult" className="form-label">
                        תוצאת בוחן הכש"ג
                    </label>
                    <div id="lastExamResult">
                        <input className="form-control form-control-sm" onChange={(e) => setHours(Number(e.target.value))} placeholder="שעות" type="number" name="time_hours" min="0" max="59"></input>
                        <input className="form-control form-control-sm" onChange={(e) => setMinutes(Number(e.target.value))} placeholder="דקות" type="number" name="time_minutes" min="0" max="59"></input>
                        <input className="form-control form-control-sm" onChange={(e) => setSeconds(Number(e.target.value))} placeholder="שניות" type="number" name="time_seconds" min="0" max="59"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleCalculateClick}>
                        חשב
                    </button>
                </div>
            </form>
            {continuousWorkouts}
        </>
    );
}

export default Calculator;
