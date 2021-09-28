import React, {FC, useEffect, useState} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";
import axios from "axios";

const App:FC = () => {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
               .then((res) => {
                setPizzas(res.data.pizzas)
            })
    }, []);


    return (

        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path={'/'} render={() => <Home items={pizzas}/>} exact/>
                <Route path={'/cart'} component={Cart} exact/>

            </div>
        </div>


    );
}

export default App;
