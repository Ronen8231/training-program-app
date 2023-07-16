import Calculator from "./Calculator";
import PageTemplate from "./PageTemplate";

function App() {
    return (
        <div>
            <PageTemplate>
                <div id="calculator">
                    <Calculator></Calculator>
                </div>
            </PageTemplate>
        </div>
    );
}

export default App;
