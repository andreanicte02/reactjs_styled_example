import {TabContainer} from "./Tab.styles.tsx";

interface ITabItem {
    text: string
}

export const TabItem = ({text}: ITabItem) => {
    return (
        <TabContainer>{text}</TabContainer>
    );
};