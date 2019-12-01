import getWidthString from '../utils/getWidthString';
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  box-sizing: border-box;
`;

ResponsiveContainer.Row = styled.div`
    &::after{
        content:"";
        clear:both;
        display:table;
    }
`;

ResponsiveContainer.Col =  styled.div`
    float:left;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    ${'' /* box-shadow: inset 0 0 0 -1px red; */}
    text-align: center;
    
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}

    @media(min-width: 1000px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }
`;

export default ResponsiveContainer;