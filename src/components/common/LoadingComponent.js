import PropTypes from 'prop-types';
import React from 'react';
import { Spin } from 'antd';

import '../../styles/App.scss';

function LoadingComponent(props) {
  return (
    <div className="spinner-div">
      <p>{props.message}</p>
      <Spin size="large" />
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
