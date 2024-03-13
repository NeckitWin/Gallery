import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Pages/Main";
import Buy from "./components/Pages/Buy";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Gallery' element={<Main />} />
                    <Route path='/buy-art' element={<Buy />} />
                </Routes>

            </main>
        </BrowserRouter>
    );
}

export default App;
