import {StepContainer} from "./Stepper.styles.tsx";
import {IStepMock} from "../../utils/const.ts";

interface IStep {
    step: IStepMock
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