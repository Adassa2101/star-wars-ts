import {useContext, useEffect} from "react";
import {characters, defaultValue} from "../utils/constants.ts";
import {useParams} from "react-router";
import {SWContext} from "../utils/context.ts";

export const useErrorPage = () => {
    const {heroId = defaultValue } = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if(!(heroId in characters)){
            return;
        }
        changeHero(heroId);
    },[heroId])

    return {
        isError: !(heroId in characters),
        heroId
    }


}