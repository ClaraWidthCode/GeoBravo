import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegPlusSquare } from "react-icons/fa";
import { PiGraph } from "react-icons/pi";
import GeoGebraApplet from "./GeoGebraApplet";

import "../../styles/AppletStyle.css";

const Lineal = () => {
  const [inputs, setInputs] = useState([{ id: 1, value: "", error: "" }]);
  const [ggbApplet, setGgbApplet] = useState(null);

  const handleLoad = useCallback((applet) => setGgbApplet(applet), []);

  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, value, error: "" } : input
      )
    );
  };

  const isLinearFunction = (func) => {
    const linearRegex = /^[+-]?\d*x([+-]\d+)?$/;
    return linearRegex.test(func.replace(/\s+/g, ""));
  };

  const handleButtonClick = () => {
    if (ggbApplet) {
      const appletObject = ggbApplet.getAppletObject();
      if (appletObject && appletObject.evalCommand) {
        setInputs((prevInputs) =>
          prevInputs.map((input) => {
            if (input.value) {
              if (isLinearFunction(input.value)) {
                appletObject.evalCommand(`f${input.id}(x)=${input.value}`);
                return { ...input, error: "" };
              } else {
                return {
                  ...input,
                  error: "Por favor, ingresa una función lineal.",
                };
              }
            }
            return input;
          })
        );
      }
    }
  };

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { id: prevInputs.length + 1, value: "", error: "" },
    ]);
  };

  return (
    <Container fluid className="p-3 mb-5">
      <Row>
        <h3 className="title-graphic mb-5">
          <PiGraph size={50} /> Funciones Lineales
        </h3>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={8} className="d-flex justify-content-center">
          <div className="ggb-container">
            <GeoGebraApplet onLoad={handleLoad} />
          </div>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Row className="align-items-center p-3">
            {inputs.map((input) => (
              <Col xs={12} key={input.id} className="mb-2">
                <input
                  type="text"
                  value={input.value}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                  placeholder={`Ingresa una función lineal (ej. 2x+3)`}
                  className={`input-graphic w-100 ${
                    input.error ? "input-error" : ""
                  }`}
                />
                {input.error && (
                  <div className="text-error">{input.error}</div>
                )}
              </Col>
            ))}
            <Col xs={12} className="d-flex justify-content-start mb-3">
              <button onClick={handleAddInput} className="button-add-input">
                <FaRegPlusSquare size={25} /> Añadir otra función
              </button>
            </Col>
            <Col xs={12} className="mb-3">
              <button
                onClick={handleButtonClick}
                className="button-graphic btn btn-primary w-100"
              >
                Graficar
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Lineal;
