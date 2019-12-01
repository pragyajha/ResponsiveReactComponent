import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  padding: 12px;
  position: absolute;
  top: 32px;
  left: -8px;
  min-width: 80px;
  background-color: ${(props) => props.theme.color.charcoalGrey};
  z-index: -5px;
`;

export default Tag;
