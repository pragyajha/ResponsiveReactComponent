import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../utils/theme';

const StyledButton = styled(({ ...props }) => (
  <button {...props} />
))`
    position: relative;
    width:112px;
    height:40px;
    margin-left:40px;
    background-color:${(props) => props.theme.color.paleRed};
    text-align:center;
    line-height:20px;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.color.white};
  
  
:before {
    content:"";
    position: absolute;
    right: 100%;
    top:-1px;
    width:0px;
    height:0px;
    border-top:20px solid ${(props) => props.theme.color.paleRed};
    border-left:10px solid transparent;
    border-bottom:20px solid ${(props) => props.theme.color.paleRed};
  }
  
:after {
    content:"";
    position: absolute;
    left: 100%;
    top:-1px;
    width:0px;
    height:0px;
    border-top:20px solid transparent;
    border-left:10px solid ${(props) => props.theme.color.paleRed};
    border-bottom:20px solid transparent;
  }
  
`;

const Button = (props, context) => (
  <StyledButton
    {...props}
    disabled={
      props.disabled
    }
  />
);

Button.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.color)),
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false,
};

Button.contextTypes = {
  formik: PropTypes.object,
};

export default Button;

// display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   text-transform: uppercase;
//   color: ${styles.color};
//   font-size: ${styles.fontSize};
//   background-color: ${styles.backgroundColor};
//   padding: ${styles.padding};
//   width: ${(props) => (props.block ? '100%' : '')};
//   border-width: 1px;
//   border-style: solid;
//   border-color: ${styles.borderColor};
//   border-radius: ${styles.borderRadius};
//   pointer-events: ${styles.pointerEvents};
//   opacity: ${styles.opacity};