import {brewMethodsQ2} from "../../../../_dev/utils/const.ts";
import {BrewMethodCard} from "./BrewMethodCard.tsx";
import {BrewMethodsContainer} from "./BrewMethods.styles.tsx";

interface IBrewMethods{
    itemSelect: number
    setItemSelect: (item:number) => void
}

export const BrewMethods = ({itemSelect,setItemSelect}:IBrewMethods) => {

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