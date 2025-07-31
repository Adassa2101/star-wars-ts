import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";
import {useParams} from "react-router";
import {SWContext} from "../utils/context.ts";
import {useContext, useEffect} from "react";
import {characters, defaultValue} from "../utils/constants.ts";

const Home = () => {
    let {heroId = defaultValue } = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        heroId = (heroId in characters) ? heroId : defaultValue;
        changeHero(heroId);
    },[heroId])

    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};


export default Home;
