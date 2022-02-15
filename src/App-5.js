import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link,
} from "react-router-dom"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
//render a router

function App5() {
    return (
    <Router>
        <Switch>
            <Route path="/movie/:id" element={<Detail />}/>
            <Route path="/" element={<Home />}/>
        </Switch>
    </Router>
    );
}

export default App5;