import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultValue} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";


function App() {

    const [hero, setHero] = useState(defaultValue);


    return (
        <div>
            <SWContext value={{hero, changeHero:setHero}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>


    )
}


export default App
