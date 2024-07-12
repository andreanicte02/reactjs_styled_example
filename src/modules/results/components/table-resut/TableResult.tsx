import {
    TableContainer,
    TableLeftContainer,
    TableResultContainer, TableRightBottomContainer, TableRightBottomItemContainer,
    TableRightContainer,
    TableRightTopContainer, TextTableContainer
} from "./TableResult.styles.tsx";
import {coffeeDetailList} from "../../../../_dev/utils/const.ts";

export const TableResult = () => {
    return (
        <TableResultContainer>
            <TableContainer>
                <TableLeftContainer>
                    <TextTableContainer
                        $fontSize={'23.4px'}
                        $color={'#7E836D'}
                        $textTransform={'uppercase'}
                        $marginBottom={'9.36px'}
                    >
                        best match
                    </TextTableContainer>
                    <img src={'/media/product.png'} style={{paddingLeft:"1rem", paddingRight:'1rem'}}/>
                    <TextTableContainer
                        $fontSize={'20px'}
                        $color={'#222222'}
                        $textTransform={'uppercase'}
                        $marginTop={'18.72px'}
                    >
                        guatemala coffee
                    </TextTableContainer>
                    <TextTableContainer
                        $fontSize={'18px'}
                        $color={'#222222'}
                        $fontWeight={'700'}
                        $marginTop={'18.72px'}
                    >
                        $20.50
                    </TextTableContainer>
                </TableLeftContainer>
                <TableRightContainer>
                    <TableRightTopContainer>
                        <TextTableContainer
                            $textTransform={'uppercase'}
                            $fontSize={'12px'}
                            $color={'#222222'}
                            $marginBottom={'1rem'}
                            $marginLeft={'1rem'}
                        >
                            WHY YOU’LL LOVE IT
                        </TextTableContainer>

                        <div style={{textAlign: "center"}}>
                            <div>
                                <TextTableContainer
                                    $textTransform={'uppercase'}
                                    $fontSize={'20px'}
                                    $color={'#222222'}
                                >
                                    If you’ve ever taken a bite from a ripe red apple,
                                </TextTableContainer>

                                <TextTableContainer
                                    $textTransform={'uppercase'}
                                    $fontSize={'20px'}
                                    $color={'#222222'}
                                >
                                    you’ll know the way this coffee tastes.
                                </TextTableContainer>
                            </div>
                        </div>
                    </TableRightTopContainer>
                    <TableRightBottomContainer>
                        {coffeeDetailList.map((item, index) =>
                            <TableRightBottomItemContainer key={index} $borderRight={!item.border?'1.5px dotted #222222':''}>
                                <TextTableContainer
                                    $textTransform={'uppercase'}
                                    $fontSize={'12px'}
                                    $color={'#222222'}
                                >
                                    {item.title}
                                </TextTableContainer>
                                <img src={item.image} />

                                <TextTableContainer
                                    $textTransform={'uppercase'}
                                    $fontSize={'12px'}
                                    $color={'#222222'}
                                >
                                    {item.description}
                                </TextTableContainer>

                            </TableRightBottomItemContainer>
                        )}
                    </TableRightBottomContainer>

                </TableRightContainer>
            </TableContainer>
        </TableResultContainer>
    );
};