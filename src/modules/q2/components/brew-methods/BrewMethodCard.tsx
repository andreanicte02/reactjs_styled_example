import {BrewMethodsQ2} from "../../../../_dev/utils/const.ts";
import {BrewMethodCardContainer, BrewMethodImageCardContainer} from "./BrewMethods.styles.tsx";

interface IBrewMethodCard {
    item: BrewMethodsQ2
    index: number
    itemSelect: number
    setItemSelect: (item:number) => void
}
export const BrewMethodCard = ({item, index, itemSelect, setItemSelect}:IBrewMethodCard) => {


    const onClick = ()=>{

        if(itemSelect===index){
            setItemSelect(-1);
            return;
        }
        setItemSelect(index);
    }

    return (
        <BrewMethodCardContainer
            rotate={item.rotate}
            translate={item.translateY}
            onClick={onClick}
            style={{
                backgroundColor: itemSelect === -1 ? item.color : itemSelect === index ? item.color : "#E9E4DB",
                opacity:itemSelect === -1 ? "100%" : itemSelect === index ? "100%" : "50%",
        }}
        >
            <BrewMethodImageCardContainer rotate={item.rotate}>
                <img src={item.img}/>
            </BrewMethodImageCardContainer>
            <div>
                {item.text}
            </div>
        </BrewMethodCardContainer>
    );
};