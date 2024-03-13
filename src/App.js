import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Pages/Main";
import News from "./components/Pages/News";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/News' element={<News />} />
                </Routes>

            </main>
        </BrowserRouter>
    );
}

export default App;
