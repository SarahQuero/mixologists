import React from "react";
import "./Style/Lab.scss";
import PropTypes from "prop-types";

class LabResult extends React.Component {
  state = {
    shaker: false,
  };

  render() {
    const { displayResult, message } = this.props;
    const { shaker } = this.state;
    return (
      <div className="popup">
        <div className="popup-inner">
          <div className="popup-inner-text">
            <h1>{message}</h1>
            <p>{shaker}</p>
          </div>
          <div>
            <button
              className="popup-bottom"
              type="button"
              onClick={displayResult}
            >
              Close me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

LabResult.propTypes = {
  displayResult: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default LabResult;
