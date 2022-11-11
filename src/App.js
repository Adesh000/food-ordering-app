import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Deals from "./Components/Deals";
import Order from './Components/Order';

function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/deals' element={<Deals />} />
                <Route path='/order' element={<Order />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
