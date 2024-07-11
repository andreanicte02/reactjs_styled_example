import {Q2Container} from "./Q2.styles.ts";
import {BrewMethods} from "./components/brew-methods/BrewMethods.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import {useColorBodyHook} from "../../_dev/hooks/useColorBodyHook.tsx";
import {useState} from "react";
import {ContinueMethod} from "./components/continue-method/ContinueMethod.tsx";
import {stepperListQ2} from "../../_dev/utils/const.ts";
import {Stepper} from "../../_dev/custom-components/stepper/Stepper.tsx";
import {TextTitleContainer} from "../../_dev/custom-components/title/Title.styles.tsx";


export const Q2 = () => {
    useColorBodyHook('beige')
    const [itemSelect, setItemSelect] = useState(-1);
    return (
        <Q2Container>
            <Stepper list={stepperListQ2}/>
            <TextTitleContainer $marginTop={"4rem"} $fontSize={'1.875rem'}>
                How do you brew at home?
            </TextTitleContainer>
            <div>
                <BrewMethods setItemSelect={setItemSelect} itemSelect={itemSelect} />
                {itemSelect!==-1&&<ContinueMethod/>}
                <Footer/>
            </div>
        </Q2Container>
    );
};