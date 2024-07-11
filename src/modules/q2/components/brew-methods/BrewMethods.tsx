import {brewMethodsQ2} from "../../../../_dev/utils/const.ts";
import {BrewMethodCard} from "./BrewMethodCard.tsx";
import {BrewMethodsContainer} from "./BrewMethods.styles.tsx";

export const BrewMethods = () => {
    return (
        <BrewMethodsContainer>
            {brewMethodsQ2.map((item,index)=><BrewMethodCard key={index} item={item}/>)}
        </BrewMethodsContainer>
    );
};