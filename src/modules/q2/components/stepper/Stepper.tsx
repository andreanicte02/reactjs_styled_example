import {stepperListQ2} from "../../../../_dev/utils/const.ts";
import {Step} from "./Step.tsx";
import {StepperContainer} from "./Stepper.styles.tsx";

export const Stepper = () => {
    return (
            <StepperContainer>
                {stepperListQ2.map((item, index) => <Step key={index} step={item}/>)}
            </StepperContainer>
    );
};