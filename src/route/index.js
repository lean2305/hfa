import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuInicial from '../menu-inicial/menu';



function RoutesApp() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path='/' element={ <MenuInicial/> }></Route>

            </Routes>

        </BrowserRouter>

     );

}