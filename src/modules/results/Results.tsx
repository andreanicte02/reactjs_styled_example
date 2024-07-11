import {useColorBodyHook} from "../../_dev/hooks/useColorBodyHook.tsx";
import {ResultsContainer} from "./Results.styles.ts";
import {Stepper} from "../../_dev/custom-components/stepper/Stepper.tsx";
import {stepperListResults} from "../../_dev/utils/const.ts";

export const Results = () => {
    useColorBodyHook('beige')
    return (
        <ResultsContainer>
            <Stepper list={stepperListResults}/>
        </ResultsContainer>
    );
};