import {starWarsInfo} from "../utils/constants.js";
import Text from "./ui/Text.jsx";
import {useErrorPage} from "../hooks/useErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";


const StarWars = () => {
    const {isError} = useErrorPage();

    return !isError ? (
        <Text>{starWarsInfo}</Text>
    ): <ErrorPage/>;
};


export default StarWars;
