import {useColorBodyHook} from "../../_dev/hooks/useColorBodyHook.tsx";
import {ResultsContainer} from "./Results.styles.ts";

export const Results = () => {
    useColorBodyHook('beige')
    return (
        <ResultsContainer></ResultsContainer>
    );
};