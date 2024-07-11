import {useColorBodyHook} from "../../_dev/hooks/useColorBodyHook.tsx";
import {ResultsContainer} from "./Results.styles.ts";
import {Stepper} from "../../_dev/custom-components/stepper/Stepper.tsx";
import {stepperListResults} from "../../_dev/utils/const.ts";
import {TextContainer, TextTitleContainer} from "../../_dev/custom-components/text/Text.styles.tsx";

export const Results = () => {
    useColorBodyHook('beige')
    return (
        <ResultsContainer>
            <Stepper list={stepperListResults}/>
            <TextTitleContainer $marginBottom={"1.5rem"} $marginTop={"3.875rem"} $fontSize={'3rem'}>
                Meet your new favorite coffee.
            </TextTitleContainer>
            <TextContainer $fontSize={"14.5px"}>
                Here’s what we recommend for your busy days, quiet moments, and upcoming adventures.
            </TextContainer>
        </ResultsContainer>
    );
};