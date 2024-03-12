import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Pages/Main";
import News from "./components/Pages/News";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/Main' element={<Shop />} />
                    <Route path='/News' element={<News />} />
                </Routes>

            </main>
        </BrowserRouter>
    );
}

export default App;
