import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./App.css";

interface WorkoutProps {
    totalTime: number;
}

function paceAsMinutes(pace: number) {
    let minutes = Math.floor(pace / 60);
    let seconds = Math.floor(pace % 60);
    return minutes + ":" + seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
}

function ContinuousWorkouts({ totalTime }: WorkoutProps) {
    let oneKmPace = totalTime / 3;
    return (
        <>
            <section className="workoutPlan">
                <div className="workoutPlanContainer">
                    <h3>אימוני רצף</h3>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>אימון רצף נרחב</Accordion.Header>
                            <Accordion.Body>רוץ עד 5 קילומטר בקצב {paceAsMinutes(oneKmPace * 1.4)} לקילומטר </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>אימון רצף בינוני קבוע</Accordion.Header>
                            <Accordion.Body>רוץ עד 3 קילומטר בקצב {paceAsMinutes(oneKmPace * 1.15)} לקילומטר</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

function IntervalWorkouts({ totalTime }: WorkoutProps) {
    let oneKmPace = totalTime / 3;
    return (
        <>
            <section className="workoutPlan">
                <div className="workoutPlanContainer">
                    <h3>אימוני מקטעים</h3>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>אימון מקטעים - פירמידה יורדת</Accordion.Header>
                            <Accordion.Body>
                                רוץ 800 מטרים בקצב של {paceAsMinutes(oneKmPace * 1.05 * 0.8)} דקות - נוח 2 דקות <br></br>
                                רוץ 600 מטרים בקצב של {paceAsMinutes(oneKmPace * 1.05 * 0.6)} דקות - נוח דקה וחציּ <br></br>
                                רוץ 400 מטרים בקצב של {paceAsMinutes(oneKmPace * 1 * 0.4)} דקות - נוח דקה <br></br>
                                רוץ 200 מטרים בקצב של {paceAsMinutes(oneKmPace * 1 * 0.2)} דקות <br></br>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>אימון מקטעים - מקטעים קבועים</Accordion.Header>
                            <Accordion.Body>רוץ 4*500 מטרים בקצב של {paceAsMinutes(oneKmPace * 1 * 0.5)} - נוח דקה וחצי בין המקטעים</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>
        </>
    );
}

function Calculator() {
    const [continuousWorkouts, setContinuousWorkouts] = useState(<></>);
    const [intervalWorkouts, setIntervalWorkouts] = useState(<></>);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    let [oneKmPace, setPace] = useState(0);

    function handleCalculateClick(e: React.MouseEvent) {
        e.preventDefault();
        let totalSecondsToFinish = seconds + minutes * 60 + hours * 60 * 60;
        setPace(totalSecondsToFinish / 3);
        setContinuousWorkouts(<ContinuousWorkouts totalTime={totalSecondsToFinish}></ContinuousWorkouts>);
        setIntervalWorkouts(<IntervalWorkouts totalTime={totalSecondsToFinish}></IntervalWorkouts>);
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <div className="lastExamResultContainer">
                        <h2>
                            <label htmlFor="lastExamResult" className="form-label">
                                תוצאת בוחן הכש"ג
                            </label>
                        </h2>
                        <div id="lastExamResult" className="results">
                            <input className="form-control form-control-sm" onChange={(e) => setHours(Number(e.target.value))} placeholder="שעות" type="number" name="time_hours" min="0" max="59"></input>
                            <input className="form-control form-control-sm" onChange={(e) => setMinutes(Number(e.target.value))} placeholder="דקות" type="number" name="time_minutes" min="0" max="59"></input>
                            <input className="form-control form-control-sm" onChange={(e) => setSeconds(Number(e.target.value))} placeholder="שניות" type="number" name="time_seconds" min="0" max="59"></input>
                        </div>
                        <div className="btn-container">
                            <button type="submit" className="calculate btn btn-primary" onClick={handleCalculateClick}>
                                חשב
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            <div className="paces">
                <div className="circle-singleline">
                    קצב קל - בין {paceAsMinutes(oneKmPace * 1.25)} ל - {paceAsMinutes(oneKmPace * 1.4)} דק' לק"מ{" "}
                </div>
                <div className="circle-singleline">
                    קצב בינוני - בין {paceAsMinutes(oneKmPace * 1.1)} ל - {paceAsMinutes(oneKmPace * 1.2)} דק' לק"מ{" "}
                </div>
                <div className="circle-singleline">
                    קצב מהיר - בין {paceAsMinutes(oneKmPace * 1)} ל - {paceAsMinutes(oneKmPace * 1.05)} דק' לק"מ{" "}
                </div>
            </div>
            <br></br>
            <h2>אימוני ריצה לדוגמה</h2>
            {continuousWorkouts}
            {intervalWorkouts}
            <br></br>
            <p className="lead">
                <strong>האימונים לדוגמה נלקחו מחוברת מערכי הריצה של מערך הכושר הקרבי</strong>
            </p>
        </>
    );
}

export default Calculator;
