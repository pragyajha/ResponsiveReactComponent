import styled from 'styled-components';
import PropTypes from 'prop-types';


const ImageContainer = styled.div`
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  background-color: ${(props) =>
    props.showPreview ? props.theme.color.translucent : props.theme.color.transparent};
  position: ${(props) => (props.showPreview ? 'initial' : 'static')};
`;

ImageContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  showPreview: PropTypes.bool,
  borderRadius: PropTypes.string,
};

ImageContainer.defaultProps = {
  width: '',
  height: '',
  showPreview: false,
};

export default ImageContainer;
