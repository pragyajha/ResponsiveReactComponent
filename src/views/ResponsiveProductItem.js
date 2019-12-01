import React from 'react';
import styled from 'styled-components';
import Space from '../components/Space';
// import ImageContainer from '../components/ImageContainer';

const Container = styled.div`
  box-sizing: border-box;
`;

const Container1 = styled.div`
  height: 70px;
`;

const ImageContainer = styled.div`
  height: 244px;
  ${'' /* background-size: cover;
  background-repeat: no-repeat; */}
`;

const H1 = styled.div`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-family: ${(props) => props.theme.fontFamily.quattrocento};
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

const Row = styled.div`
    &::after{
        content:"";
        clear:both;
        display:table;
    }
`;

function getWidthString(span, screenSize) {
  if (!span) return;
  let width = span / 12 * 100;
  console.log({ span, width, screenSize });
  return `width: ${width}%`;
}

const Col = styled.div`
    float:left;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    ${({ xs }) => (xs ? getWidthString(xs, "xs") : "width: 100%")}

    @media(min-width: 1000px) {
        ${({ sm }) => sm && getWidthString(sm, "sm")};
    }
`;


export default function Grid(props) {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="4">
          <Space padding={[1]}>
            <ImageContainer>
              <img
                src={"https://i.pinimg.com/originals/73/fa/a2/73faa26263f113ce81a24eaba6adbd2b.jpg"}
                alt={'alt'}
                style={{ width: '100%', height: '244px' }}
              />
            </ImageContainer>
          </Space>
        </Col>
        <Col xs="12" sm="8">
          <Row>
            <Space padding={[1]}>
              <Col xs="9" sm="9">
                <Container1>
                  <H2>Jeannau Sun Odyssey 45.2 2001</H2>
                  <H5>Split,Croatia</H5>
                </Container1>
              </Col>
            </Space>
            <Space padding={[1]}>
              <Col xs="3" sm="3">
                <Container1>
                  <H5>HOT 69 views</H5>
                  <H5>in last 24h</H5>
                </Container1>
              </Col>
            </Space>
          </Row>
          <Row>
            <Space padding={[1]}>
              <Col xs="2" sm="2">
                <H5>12.04m</H5>
                <H7>LENGTH</H7>
              </Col>
            </Space>
            <Space padding={[1]}>
              <Col xs="2" sm="2">
                <H5>4</H5>
                <H7>CABINS</H7>
              </Col>
            </Space>
            <Space padding={[1]}>
              <Col xs="2" sm="2">
                <H5>10</H5>
                <H7>GUESTS</H7>
              </Col>
            </Space>
            <Space padding={[1]}>
              <Col xs="6" sm="6">
                <H5>4</H5>
                <H7>3 REVIEWS</H7>
              </Col>
            </Space>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <Space padding={[1]}>
                <Container1>
                  <H5>TICK Luxury   TICK Sicherengusshein</H5>
                  <H5>SAIL TYPE Rolling Mainsail</H5>
                  <H5> FREE EXTRAS Aircon, wifi</H5>
                </Container1>
              </Space>
            </Col>
            <Col xs="12" sm="6">

              <Space padding={[1]}>
                <Col xs="6" sm="12">
                  <Container1>
                    FROM
                    Icon/ Euro 1083 weekly
                                        </Container1>
                </Col>
              </Space>
              <Space padding={[1]}>
                <Col xs="6" sm="12">
                  <Container1>
                    <div>Button/ Icon Direct booking</div>
                    <div>Button/ View Details</div>
                  </Container1>
                </Col>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}