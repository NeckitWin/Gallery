import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./components/Pages/Main";
import Buy from "./components/Pages/Buy";
import Footer from "./components/Footer";
import About from "./components/Pages/About";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Gallery' element={<Main />} />
                    <Route path='/buy-art' element={<Buy />} />
                    <Route path='/about-us' element={<About />} />
                </Routes>
                <Footer />
            </main>
        </BrowserRouter>
    );
}

export default App;
