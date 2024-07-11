import {brewMethodsQ2} from "../../../../_dev/utils/const.ts";
import {BrewMethodCard} from "./BrewMethodCard.tsx";
import {BrewMethodsContainer} from "./BrewMethods.styles.tsx";
import {useState} from "react";

export const BrewMethods = () => {

    const [itemSelect, setItemSelect] = useState(-1);
    return (
        <BrewMethodsContainer>
            {brewMethodsQ2.map((item,index)=>
                <BrewMethodCard
                    itemSelect={itemSelect}
                    setItemSelect={setItemSelect}
                    key={index}
                    item={item}
                    index={index}
                />
            )}
        </BrewMethodsContainer>
    );
};