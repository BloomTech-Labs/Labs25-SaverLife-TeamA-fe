import PropTypes from 'prop-types';
import React from 'react';
import { Spin } from 'antd';

import '../../styles/Navbar.css';

function LoadingComponent() {
  return (
    <div className="spinner-div">
      <Spin size="large" />
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
