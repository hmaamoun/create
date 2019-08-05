// Imports
import React from "react";
import PropTypes from "prop-types";
import { primary as primaryGradient } from "../common/gradients";
import { grey, grey1 } from "../common/colors";
import { level1 } from "../common/shadows";
import Button from "..//button";

// Component
const PromptModal = props => {
  const {
    visible,
    closeModalText,
    confirmModal,
    closeModal,
    confirmModalText,
    modalHeaderText,
    modalBodyText,
    ...other
  } = props;

  return (
    <div
      {...other}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9,
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease-in-out"
      }}
    >
      <div
        style={{
          boxShadow: level1,
          position: "relative",
          zIndex: -1,
          width: 400,
          height: "auto",
          backgroundColor: "",
          textAlign: "center",
          margin: "auto",
          marginTop: "25%"
        }}
      >
        <div
          className="modal-header"
          style={{
            backgroundImage: primaryGradient,
            padding: "0 2em",
            height: "3em",
            boxShadow: level1
          }}
        >
          <p
            style={{
              padding: "1em 1em",
              textTransform: "uppercase",
              color: "white"
            }}
          >
            {modalHeaderText}
          </p>
        </div>
        <div
          className="modal-body"
          style={{
            padding: "2em",
            backgroundColor: "#F9F9F9"
          }}
        >
          <p
            style={{
              color: grey1
            }}
          >
            {modalBodyText}
          </p>
        </div>
        <div
          className="modal-footer"
          style={{
            padding: "0.6em 1em",
            backgroundColor: grey
          }}
        >
          <div
            className="modal-actions"
            style={{
              display: "inline-block"
            }}
          >
            <div
              style={{
                width: "50%",
                display: "inline-block"
              }}
            >
              <Button theme="primary" onClick={() => closeModal()}>
                {closeModalText}
              </Button>
            </div>
            <div
              style={{
                width: "50%",
                display: "inline-block"
              }}
            >
              <Button theme="secondary" onClick={() => confirmModal()}>
                {confirmModalText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component Properties
PromptModal.propTypes = {
  visible: PropTypes.bool.isRequired
};
PromptModal.defaultProps = {
  visible: false
};

export default PromptModal;
