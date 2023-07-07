import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Message from "./Message";
import Calculator from "./LastExamForm";

function App() {
    return (
        <div>
            <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">אתר הכש"ג של בה"ד 1</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#calculator">מחשבון</Nav.Link>
                            <Nav.Link href="#videos">סרטוני לימוד</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Message></Message>
            <section>
                <div id="videos">
                    <h2>סרטוני לימוד</h2>
                    <h3>סרטון הסבר ריצה</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ULrP69QUi-M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>סרטון הסבר שכיבות סמיכה</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9B3Y9kGc79o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </section>
            <section>
                <div id="calculator">
                    <Calculator></Calculator>
                </div>
            </section>
        </div>
    );
}

export default App;
