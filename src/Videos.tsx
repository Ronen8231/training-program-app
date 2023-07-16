import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PageTemplate from "./PageTemplate";
import "./App.css"; 

function Videos() {
    return (
        <div>
            <PageTemplate>
                <div id="videos" className="videos">
                    <div className="header">
                        <span className="title">סרטוני לימוד</span>
                    </div>
                    <div className="runningVid">
                        <h3>סרטון הסבר ריצה</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ULrP69QUi-M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="pushUpsVid">
                        <h3>סרטון הסבר שכיבות סמיכה</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9B3Y9kGc79o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </PageTemplate>
        </div>
    );
}

export default Videos;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Videos />
    </React.StrictMode>
);
