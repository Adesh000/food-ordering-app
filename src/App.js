import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Orders from "./Components/Orders";

function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Hero />
            {/* <Routes>
                <Route path='/' component={<Hero />} />
                <Route path='/orders' component={<Orders />} />
            </Routes> */}
        </BrowserRouter>
        </>
    );
}

export default App;
