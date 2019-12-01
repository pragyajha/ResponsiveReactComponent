import React from 'react';
import styled from 'styled-components';
import { faStar, faCheck, faBolt, faEuroSign, faQuestionCircle, faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Space from '../components/Space';
import ResponsiveContainer from '../components/ResponsiveContainer';
import Button from '../components/Button';

const Container1 = styled.div`
     height: 52px;
`;

const ImageContainer = styled.div`
  height: 246px;
  ${'' /* background-size: cover; */}
  ${'' /* background-repeat: no-repeat; */}
`;

const H2 = styled.div`
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.quattrocento};
`;

const H5 = styled.div`
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.openSans};
`;

const H7 = styled.div`
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  font-family: ${(props) => props.theme.fontFamily.openSans};
`;


const SubHeading = styled.div`
  font-size: ${(props) => props.theme.fontSize.s};
  font-family: ${(props) => props.theme.fontFamily.openSans};
  color: ${(props) => props.theme.color.charcoalGreyTwo};
`;

export default function Grid(props) {

    return (
        <ResponsiveContainer>
            <ResponsiveContainer.Row>
                <ResponsiveContainer.Col xs="12" sm="5">
                    <Space padding={[1]}>
                        <ImageContainer>
                            <img
                                src={"https://i.pinimg.com/originals/73/fa/a2/73faa26263f113ce81a24eaba6adbd2b.jpg"}
                                alt={'alt'}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </ImageContainer>
                    </Space>
                </ResponsiveContainer.Col>
                <ResponsiveContainer.Col xs="12" sm="7">
                    <ResponsiveContainer.Row>
                        <Space padding={[1]}>
                            <ResponsiveContainer.Col xs="9" sm="9">
                                <div style={{display:"flex", alignItems: "flex-start", justifyContent:"flex-end"}}>
                                    <div style={{height:"72px", textAlign:"left"}}>
                                        <div style={{display:"flex", alignItems: "center"}}>
                                            <Space margin={[0,1,0,0]}>
                                                <H2 >Jeannau Sun Odyssey 45.2</H2>
                                            </Space>
                                            <H5>2001</H5>
                                        </div>
                                        <H5>Split,Croatia</H5>
                                    </div>
                                    <FontAwesomeIcon icon={faHeart} color="grey" style={{margin:"0 8px"}}/> 
                                </div>
                            </ResponsiveContainer.Col>
                        </Space>
                        <Space padding={[1]}>
                            <ResponsiveContainer.Col xs="3" sm="3">
                                <div style={{height:"72px"}}>
                                    <H5 style={{backgroundColor:"red", width:"50px"}}>HOT</H5>
                                    <H5>69 views</H5>
                                    <H5>in last 24h</H5>
                                </div>
                            </ResponsiveContainer.Col>
                        </Space>
                    </ResponsiveContainer.Row>
                    <ResponsiveContainer.Row>
                        <Space padding={[1]}>
                            <ResponsiveContainer.Col xs="2" sm="2">
                                <H5>12.04m</H5>
                                <SubHeading>LENGTH</SubHeading>
                            </ResponsiveContainer.Col>
                        </Space>
                        <Space padding={[1]}>
                            <ResponsiveContainer.Col xs="2" sm="2">
                                <H5>4</H5>
                                <SubHeading>CABINS</SubHeading>
                            </ResponsiveContainer.Col>
                        </Space>
                        <Space padding={[1]}>
                            <ResponsiveContainer.Col xs="2" sm="2">
                                <H5>10</H5>
                                <SubHeading>GUESTS</SubHeading>
                            </ResponsiveContainer.Col>
                        </Space>
                        <Space padding={[1]}>
                            <ResponsiveContainer.Col xs="6" sm="6">
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                    <FontAwesomeIcon icon={faStar} color="gold" />
                                </div>
                                <SubHeading>3 REVIEWS</SubHeading>
                            </ResponsiveContainer.Col>
                        </Space>
                    </ResponsiveContainer.Row>
                    <ResponsiveContainer.Row>
                        <ResponsiveContainer.Col xs="12" sm="7">
                            <Space padding={[1]}>
                                <div style={{height: "116px"}}>
                                    <div> 
                                        <FontAwesomeIcon icon={faCheck}/> Luxury
                                        <FontAwesomeIcon icon={faCheck}  style={{marginLeft:"16px"}}/> Sicherengusshein 
                                    </div>   
                                    <div style={{display:'flex', alignItems: "center"}}> 
                                        <SubHeading style={{width:"106px", margin:"16px", textAlign: 'left', fontSize: '16px', color: '#c0c9c9'}}>SAIL TYPE </SubHeading>
                                        <H5>Rolling Mainsail</H5>
                                    </div>
                                    <div style={{display:'flex',alignItems: "center"}}> 
                                        <SubHeading style={{width:"106px", margin:"16px", textAlign: 'left', fontSize: '16px', color: '#c0c9c9'}}>FREE EXTRAS </SubHeading>
                                        <H5>Aircon, wifi</H5>
                                    </div>
                                </div>
                            </Space>
                        </ResponsiveContainer.Col>
                        <ResponsiveContainer.Col xs="12" sm="5">
                            <Space padding={[1]}>
                                <ResponsiveContainer.Col xs="6" sm="12">
                                    <div style={{display: "flex",alignItems:"center"}}>
                                        <SubHeading>FROM</SubHeading>
                                        <FontAwesomeIcon icon={faEuroSign}  style={{margin:"0 8px"}}/> 
                                        <H2 style={{marginRight:"8px"}}>1083</H2> 
                                        <H5>weekly</H5>
                                        <FontAwesomeIcon icon={faQuestionCircle}  style={{marginLeft:"8px"}}/>
                                    </div>
                                </ResponsiveContainer.Col>
                            </Space>
                            <Space padding={[1]}>
                                <ResponsiveContainer.Col xs="6" sm="12">
                                    <Container1>
                                        <div style={{display: "flex", textAlign:"center"}}>
                                            <FontAwesomeIcon icon={faBolt}  style={{marginRight:"8px"}}/>
                                            <H7>DIRECT BOOKINGS</H7>
                                        </div>
                                        <Button>View Details</Button>
                                    </Container1>
                                </ResponsiveContainer.Col>
                            </Space>
                        </ResponsiveContainer.Col>
                    </ResponsiveContainer.Row>
                </ResponsiveContainer.Col>
            </ResponsiveContainer.Row>
        </ResponsiveContainer>
    )
}