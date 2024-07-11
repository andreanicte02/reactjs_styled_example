import {BrewMethodsQ2} from "../../../../_dev/utils/const.ts";
import {BrewMethodCardContainer} from "./BrewMethods.styles.tsx";

interface IBrewMethodCard {
    item: BrewMethodsQ2
}
export const BrewMethodCard = ({item}:IBrewMethodCard) => {
    return (
        <BrewMethodCardContainer color={item.color} rotate={item.rotate} translate={item.translateY}>
            {item.text}
        </BrewMethodCardContainer>
    );
};