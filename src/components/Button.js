import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../utils/theme';

const Button = styled(({ ...props }) => <button {...props} />)`
    position: relative;
    width:100%;
    height:40px;
    background-color:${(props) => props.theme.color.paleRed};
    text-align:center;
    line-height:20px;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.m};
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
  color: 'paleRed',
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