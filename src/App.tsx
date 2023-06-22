import './App.css'
import {Route, Routes} from "react-router-dom";
import About from "./components/About.tsx";
import Home from "./components/Home.tsx";
import Nav from "./components/Nav.tsx";
import Booklist from "./components/Booklist.tsx";
import Book from "./components/Book.tsx";

const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/books" element={<Booklist/>}></Route>
                <Route path="books/:id" element={<Book/>}></Route>
            </Routes>

        </>)
};

export default App






