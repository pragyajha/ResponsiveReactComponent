import React from 'react';
import styled from 'styled-components';
import { faStar, faCheck, faBolt, faEuroSign, faQuestionCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Space from '../components/Space';
import Text from '../components/Text';
import ResponsiveGrid from '../components/ResponsiveGrid';
import Button from '../components/Button';
import Tag from '../components/Tag';
import theme from '../utils/theme';

const ImageContainer = styled(ResponsiveGrid.CellContainer) `
    height: 274px;
    padding: 16px;
`;

const BoatDetailsContainer = styled(ResponsiveGrid.CellContainer) `
    padding: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top:-1px;
`;

const Align = styled.div`
    text-align:left;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const StealDealContainer = styled(ResponsiveGrid.CellContainer) `
    padding: 16px;
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
                    <Tag>
                        <Text color="white">ZIZOO RECOMMENDED</Text>
                    </Tag>
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
                        <Space padding={[2]}>
                            <ResponsiveGrid.CellContainer>
                                <Text size="s" weight="bold">12.04m</Text>
                                <Text size="s" color="pinkishGrey">LENGTH</Text>
                            </ResponsiveGrid.CellContainer>
                        </Space>
                    </ResponsiveGrid.Col>
                    <ResponsiveGrid.Col xs="2" sm="2">
                        <Space padding={[2]}>
                            <ResponsiveGrid.CellContainer>
                                <Text size="s" weight="bold"> 4</Text>
                                <Text size="s" color="pinkishGrey">CABINS</Text>
                            </ResponsiveGrid.CellContainer>
                        </Space>
                    </ResponsiveGrid.Col>
                    <ResponsiveGrid.Col xs="2" sm="2">
                        <Space padding={[2]}>
                            <ResponsiveGrid.CellContainer>
                                <Text size="s" weight="bold"> 10</Text>
                                <Text size="s" color="pinkishGrey">GUESTS</Text>
                            </ResponsiveGrid.CellContainer>
                        </Space>
                    </ResponsiveGrid.Col>
                    <ResponsiveGrid.Col xs="6" sm="6">
                        <Space padding={[2]}>
                            <ResponsiveGrid.CellContainer>
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                </div>
                                <Text size="m" color="pinkishGrey">3 REVIEWS</Text>
                            </ResponsiveGrid.CellContainer>
                        </Space>
                    </ResponsiveGrid.Col>
                </ResponsiveGrid.Row>
                <ResponsiveGrid.Row>
                    <ResponsiveGrid.Col xs="12" sm="7">
                        <Space padding={[2]}>
                            <ResponsiveGrid.CellContainer>
                                <Align>
                                    <Space padding={[1]}>
                                        <Flex>
                                            <FontAwesomeIcon icon={faCheck} style={{ marginRight: "12px" }} />
                                            <Text size="l" weight="regular">Luxury</Text>
                                            <FontAwesomeIcon icon={faCheck} style={{ marginLeft: "24px", marginRight: "8px" }} />
                                            <Text size="l" weight="regular">Sicherengusshein</Text>
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
                            </ResponsiveGrid.CellContainer>
                        </Space>
                    </ResponsiveGrid.Col>
                    <ResponsiveGrid.Col xs="12" sm="5">
                        <ResponsiveGrid.Col xs="6" sm="12">
                            <Space padding={[2.3]}>
                                <ResponsiveGrid.CellContainer>
                                    <Align>
                                        <Flex>
                                            <Text size="m" color="pinkishGrey">FROM</Text>
                                            <FontAwesomeIcon icon={faEuroSign} style={{ margin: "0 8px" }} />
                                            <Text size="l" weight="bold">1083</Text>
                                            <Text size="m" style={{ margin: "0 8px" }}>weekly</Text>
                                            <FontAwesomeIcon icon={faQuestionCircle} color="grey" style={{ marginLeft: "8px" }} />
                                        </Flex>
                                    </Align>
                                </ResponsiveGrid.CellContainer>
                            </Space>
                        </ResponsiveGrid.Col>
                        <ResponsiveGrid.Col xs="6" sm="12">
                            <Space padding={[2]}>
                                <ResponsiveGrid.CellContainer>
                                    <Flex>
                                        <FontAwesomeIcon icon={faBolt} style={{ marginRight: "8px" }} />
                                        <Text size="s" weight="bold" align="center">DIRECT BOOKINGS</Text>
                                    </Flex>
                                    <Space margin={[1, 0, 0, 0]}>
                                        <Button>View Details</Button>
                                    </Space>
                                </ResponsiveGrid.CellContainer>
                            </Space>
                        </ResponsiveGrid.Col>
                    </ResponsiveGrid.Col>
                </ResponsiveGrid.Row>
            </ResponsiveGrid.Col>
        </ResponsiveGrid.Row>
    </ResponsiveGrid>
);

export default ResponsiveBoatListItem;