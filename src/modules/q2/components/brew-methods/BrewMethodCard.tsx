import {BrewMethodsQ2} from "../../../../_dev/utils/const.ts";
import {BrewMethodCardContainer, BrewMethodImageCardContainer} from "./BrewMethods.styles.tsx";

interface IBrewMethodCard {
    item: BrewMethodsQ2
}
export const BrewMethodCard = ({item}:IBrewMethodCard) => {
    return (
        <BrewMethodCardContainer color={item.color} rotate={item.rotate} translate={item.translateY}>
            <BrewMethodImageCardContainer rotate={item.rotate}>
                <img src={item.img}/>
            </BrewMethodImageCardContainer>
            <div>
                {item.text}
            </div>
        </BrewMethodCardContainer>
    );
};