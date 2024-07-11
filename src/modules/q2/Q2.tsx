import {Q2Container} from "./Q2.styles.ts";
import {useHeightBodyHook} from "../../_dev/hooks/useHeightBodyHook.tsx";
import {Stepper} from "./components/stepper/Stepper.tsx";
import {StepperTextTitleContainer} from "./components/stepper/Stepper.styles.tsx";

export const Q2 = () => {
    const containerHeight = useHeightBodyHook();
    return (

        <Q2Container style={{height: containerHeight}}>
                <Stepper/>
                <StepperTextTitleContainer>
                    How do you brew at home?
                </StepperTextTitleContainer>
        </Q2Container>
    );
};