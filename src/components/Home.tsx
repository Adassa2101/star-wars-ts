import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";
import {useParams} from "react-router";
import {SWContext} from "../utils/context.ts";
import {useContext, useEffect} from "react";
import {characters, defaultValue} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {heroId = defaultValue } = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if(!(heroId in characters)){
            return;
        }
        changeHero(heroId);
    },[heroId])

    return (heroId in characters) ?  (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ): <ErrorPage/>;
};


export default Home;
