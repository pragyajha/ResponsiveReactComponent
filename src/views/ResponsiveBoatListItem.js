import React from 'react';
import styled from 'styled-components';
import { faStar, faCheck, faBolt, faEuroSign, faQuestionCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Space from '../components/Space';
import Text from '../components/Text';
import ResponsiveGrid from '../components/ResponsiveGrid';
import Button from '../components/Button';
import theme from '../utils/theme';

const BookingTag = styled.div`
  padding: 12px;
  position: absolute;
  top: 32px;
  left: -8px;
  min-width: 80px;
  background-color: ${(props) => props.theme.color.charcoalGrey};
  z-index: -5px;
`;

const Cell = styled.div`
    padding: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    margin-left:-1px;
    border-bottom: none;
`;

const PriceContainer = styled.div`
    padding: 18px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    margin-left:-1px;
    border-bottom: none;
`;

const ImageContainer = styled.div`
    height: 274px;
    padding: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    border-bottom: none;
`;

const BoatDetailsContainer = styled.div`
    padding: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-left:-1px;
    margin-top:-1px;
    border-bottom: none;
`;

const Align = styled.div`
    text-align:left;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const StealDealContainer = styled.div`
    padding: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    border-bottom: none;
    margin-left:-1px;
    margin-top:-1px;
`;

const ResponsiveBoatListItem = ({ booking, navigation }) => (
        <ResponsiveGrid>
            <ResponsiveGrid.Row>
                <ResponsiveGrid.Col xs="12" sm="5">
                    <ImageContainer>
                        <img
                            src={"https://i.pinimg.com/originals/73/fa/a2/73faa26263f113ce81a24eaba6adbd2b.jpg"}
                            alt={'alt'}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <BookingTag
                            size="small"
                            color="red"
                            testID="booking-history-status"
                            accessibilityLabel="booking-history-status"
                        >
                            <Text color="white">ZIZOO RECOMMENDED</Text>
                        </BookingTag>
                    </ImageContainer>
                </ResponsiveGrid.Col>
                <ResponsiveGrid.Col xs="12" sm="7">
                    <ResponsiveGrid.Row>
                        <ResponsiveGrid.Col xs="8" sm="8">
                            <BoatDetailsContainer>
                                <Align>
                                    <Flex>
                                        <Text size="xl" weight="bold" fontFamily="openSans">
                                            Jeannau Sun Odyssey 45.2
                                        </Text>
                                        <Space margin={[0, 0, 0, 2]}>
                                            <Text size="m" color="charcoalGrey">
                                                2001
                                            </Text>
                                        </Space>
                                    </Flex>
                                    <Text size="m" color="charcoalGrey">Split, Croatia</Text>
                                </Align>
                                <FontAwesomeIcon icon={faHeart} color="grey" style={{ margin: "0 8px" }} />
                            </BoatDetailsContainer>
                        </ResponsiveGrid.Col>
                        <ResponsiveGrid.Col xs="4" sm="4">
                            <StealDealContainer>
                                <Flex>
                                    <div style={{ backgroundColor: `${theme.color.paleRed}`, width: "40px", margin: "6px" }}>
                                        <Text size="m" color="white" align="center" weight="bold">HOT</Text>
                                    </div>
                                    <Text size="m" color="paleRed" weight="bold">69 views</Text>
                                </Flex>
                                <Text size="m" color="paleRed" align="left">in the last 24 hours</Text>
                            </StealDealContainer>
                        </ResponsiveGrid.Col>
                    </ResponsiveGrid.Row>
                    <ResponsiveGrid.Row>
                        <ResponsiveGrid.Col xs="2" sm="2">
                            <Cell>
                                <Text size="s" weight="bold">12.04m</Text>
                                <Text size="s" color="pinkishGrey">LENGTH</Text>
                            </Cell>
                        </ResponsiveGrid.Col>
                        <ResponsiveGrid.Col xs="2" sm="2">
                            <Cell>
                                <Text size="s" weight="bold"> 4</Text>
                                <Text size="s" color="pinkishGrey">CABINS</Text>
                            </Cell>
                        </ResponsiveGrid.Col>
                        <ResponsiveGrid.Col xs="2" sm="2">
                            <Cell>
                                <Text size="s" weight="bold"> 10</Text>
                                <Text size="s" color="pinkishGrey">GUESTS</Text>
                            </Cell>
                        </ResponsiveGrid.Col>
                        <ResponsiveGrid.Col xs="6" sm="6">
                            <Cell>
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                </div>
                                <Text size="m" color="pinkishGrey">3 REVIEWS</Text>
                            </Cell>
                        </ResponsiveGrid.Col>
                    </ResponsiveGrid.Row>
                    <ResponsiveGrid.Row>
                        <ResponsiveGrid.Col xs="12" sm="7">
                            <Cell>
                             <Align>
                                <Space padding={[1]}>
                                    <Flex>
                                        <FontAwesomeIcon icon={faCheck} /> 
                                        <Text size="l" weight="regular">Luxury</Text>
                                        <FontAwesomeIcon icon={faCheck} style={{ marginLeft: "24px" }} />
                                        <Text size="l" weight="regular"> Sicherengusshein</Text>
                                    </Flex>
                                </Space>
                                <Space padding={[1]}>
                                    <Flex>
                                        <Space margin={[0, 3, 0, 0]}>
                                            <Text size="m" color="pinkishGrey">SAIL TYPE </Text>
                                        </Space>
                                        <Text size="l" weight="regular">Rolling Mainsail</Text>
                                    </Flex>
                                </Space>
                                <Space padding={[1]}>
                                    <Flex>
                                        <Space margin={[0, 3, 0, 0]}>
                                            <Text size="m" color="pinkishGrey">FREE EXTRAS </Text>
                                        </Space>
                                        <Text size="l" weight="regular">Aircon, wifi</Text>
                                    </Flex>
                                </Space>
                                </Align>
                            </Cell>
                        </ResponsiveGrid.Col>
                        <ResponsiveGrid.Col xs="12" sm="5">
                            <ResponsiveGrid.Col xs="6" sm="12">
                                <PriceContainer>
                                    <Align>
                                        <Flex>
                                            <Text size="m" color="pinkishGrey">FROM</Text>
                                            <FontAwesomeIcon icon={faEuroSign} style={{ margin: "0 8px" }} />
                                            <Text size="l" weight="bold">1083</Text>
                                            <Text size="m" style={{ margin: "0 8px" }}>weekly</Text>
                                            <FontAwesomeIcon icon={faQuestionCircle} color="grey" style={{ marginLeft: "8px" }} />
                                        </Flex>
                                    </Align>
                                </PriceContainer>
                            </ResponsiveGrid.Col>
                            <ResponsiveGrid.Col xs="6" sm="12">
                                    <Cell>
                                        <Flex>
                                            <FontAwesomeIcon icon={faBolt} style={{ marginRight: "8px" }} />
                                            <Text size="s" weight="bold" align="center">DIRECT BOOKINGS</Text>
                                        </Flex>
                                        <Space margin={[1, 0, 0, 0]}>
                                            <Button>View Details</Button>
                                        </Space>
                                    </Cell>
                            </ResponsiveGrid.Col>
                        </ResponsiveGrid.Col>
                    </ResponsiveGrid.Row>
                </ResponsiveGrid.Col>
            </ResponsiveGrid.Row>
        </ResponsiveGrid>
    );

export default ResponsiveBoatListItem;