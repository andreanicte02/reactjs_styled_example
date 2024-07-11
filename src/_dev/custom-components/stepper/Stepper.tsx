import {StepperContainer} from "./Stepper.styles.tsx";
import {Step} from "./Step.tsx";
import {IStepMock} from "../../utils/const.ts";

export interface IStepper{
    list:IStepMock[]
}
export const Stepper = ({list}:IStepper) => {
    return (
            <StepperContainer>
                {list.map((item, index) => <Step key={index} step={item}/>)}
            </StepperContainer>
    );
};