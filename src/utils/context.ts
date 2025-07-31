import {createContext} from "react";
import type {SWContextValue} from "./types";
import {defaultValue} from "./constants.ts";

export  const SWContext = createContext<SWContextValue>({
    hero: defaultValue,
    changeHero: (hero: string) => console.log(hero)
});