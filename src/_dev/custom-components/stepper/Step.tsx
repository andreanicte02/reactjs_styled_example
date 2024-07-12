import {IStepMock} from "../../../../_dev/utils/const.ts";
import {StepContainer} from "./Stepper.styles.tsx";

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