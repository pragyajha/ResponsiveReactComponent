import getWidthString from '../utils/getWidthString';
import styled from 'styled-components';

const ResponsiveGrid = styled.div`
  box-sizing: border-box;
`;

ResponsiveGrid.Row = styled.div`
    &::after{
        content:"";
        clear:both;
        display:table;
    }
`;

ResponsiveGrid.Col =  styled.div`
    float:left;
    box-sizing: border-box;
    text-align: center;
    
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}

    @media(min-width: 1000px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }
`;

export default ResponsiveGrid;