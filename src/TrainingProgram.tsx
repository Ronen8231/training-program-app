import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PageTemplate from "./PageTemplate";
import Table from "react-bootstrap/Table";

import "./App.css";

function TrainingProgram() {
    return (
        <div>
            <PageTemplate>
                <p className="lead bold">
                    <strong>
                        רוצים להבין מה הקצב שאתם צריכים לרוץ בו בריצה קלה, בינונית ומהירה?
                        <br></br>
                        גשו ל<a href="/training-program-app/index.html">מחשבון</a>
                        <br></br>
                        לחצו <a href="/training-program-app/program.pdf">כאן</a> בשביל pdf עם אימוני כוח לדוגמה
                    </strong>
                </p>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>יום א</th>
                            <th>יום ב</th>
                            <th>יום ג</th>
                            <th>יום ד</th>
                            <th>יום ה</th>
                            <th>יום ו</th>
                            <th>סה"כ ריצה שבועית</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ריצה 2 ק"מ בקצב קל + אימון כח על מחזורי</td>
                            <td>מנוחה</td>
                            <td>אימון כח מחזורי</td>
                            <td>מנוחה</td>
                            <td>
                                ריצת שינויי קצב 1.5 ק"מ <br></br> - 500 מטר קצב בינוני <br></br> - 700 מטר קצב קל <br></br> - 300 מטר קצב מהיר
                            </td>
                            <td>מנוחה</td>
                            <td>סה"כ ריצה שבועית 3.5 ק"מ</td>
                        </tr>
                        <tr>
                            <td>ריצה 2.5 ק"מ בקצב קל + אימון כח על מחזורי</td>
                            <td>מנוחה</td>
                            <td>אימון כח מחזורי</td>
                            <td>מנוחה</td>
                            <td>
                                ריצת שינויי קצב 1.5 ק"מ <br></br> - 500 מטר קצב בינוני <br></br> - 700 מטר קצב קל <br></br> - 300 מטר קצב מהיר
                            </td>
                            <td>מנוחה</td>
                            <td>סה"כ ריצה שבועית 4 ק"מ</td>
                        </tr>
                        <tr>
                            <td>ריצה 3 ק"מ בקצב קל + אימון כח על מחזורי</td>
                            <td>מנוחה</td>
                            <td>אימון כח מחזורי</td>
                            <td>מנוחה</td>
                            <td>
                                ריצת שינויי קצב: <br></br> - 500 מ' הליכה <br></br> - 3 דק' ריצה קלה <br></br> - 15 שניות ספרינט <br></br> - דקה מנוחה <br></br> - 2 דק' ריצה בקצב בינוני <br></br> - 500 מ' הליכה
                            </td>
                            <td>מנוחה</td>
                            <td>סה"כ ריצה שבועית 5 ק"מ</td>
                        </tr>
                        <tr>
                            <td>ריצה 3.5 ק"מ בקצב קל + אימון כח על מחזורי</td>
                            <td>מנוחה</td>
                            <td>אימון כח מחזורי</td>
                            <td>מנוחה</td>
                            <td>
                                ריצת שינויי קצב: <br></br> - 500 מ' הליכה <br></br> - 3 דק' ריצה קלה <br></br> - 15 שניות ספרינט <br></br> - דקה מנוחה <br></br> - 2 דק' ריצה בקצב בינוני <br></br> - 500 מ' הליכה
                            </td>
                            <td>מנוחה</td>
                            <td>סה"כ ריצה שבועית 5.5 ק"מ</td>
                        </tr>
                    </tbody>
                </Table>
            </PageTemplate>
        </div>
    );
}

export default TrainingProgram;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <TrainingProgram />
    </React.StrictMode>
);
