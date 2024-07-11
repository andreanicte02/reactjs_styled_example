import {StepperListQ2} from "../../../../_dev/utils/const.ts";
import {StepContainer} from "./Stepper.styles.tsx";

interface IStep {
    step: StepperListQ2
}

export const Step = ({step}: IStep) => {
    return (
        <StepContainer $status={step.status}>
            <div>
                {step.num}
            </div>
        </StepContainer>
    );
};