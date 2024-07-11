import {Q2Container} from "./Q2.styles.ts";
import {Stepper} from "./components/stepper/Stepper.tsx";
import {StepperTextTitleContainer} from "./components/stepper/Stepper.styles.tsx";
import {BrewMethods} from "./components/brew-methods/BrewMethods.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import {useColorBodyHook} from "../../_dev/hooks/useColorBodyHook.tsx";
import {useState} from "react";
import {ContinueMethod} from "./components/continue-method/ContinueMethod.tsx";

export const Q2 = () => {
    useColorBodyHook('beige')
    const [itemSelect, setItemSelect] = useState(-1);
    return (
        <Q2Container>
            <Stepper/>
            <StepperTextTitleContainer>
                How do you brew at home?
            </StepperTextTitleContainer>
            <div>
                <BrewMethods setItemSelect={setItemSelect} itemSelect={itemSelect} />
                {itemSelect!==-1&&<ContinueMethod/>}
                <Footer/>
            </div>
        </Q2Container>
    );
};