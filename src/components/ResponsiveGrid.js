import getWidthString from '../utils/getWidthString';
import styled from 'styled-components';

const ResponsiveGrid = styled.div`
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
`;

ResponsiveGrid.Row = styled.div`

    &::after{
        content:"";
        clear:both;
        display:table;
    }
`;

ResponsiveGrid.Col = styled.div`
    float:left;
    box-sizing: border-box;
    text-align: center;
    
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")}

    @media(min-width: 920px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }
`;

ResponsiveGrid.CellContainer = styled.div`
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.charcoalGreyFifty};
    margin-left:-1px;
    border-bottom: none;
`;

export default ResponsiveGrid;