import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

export const Geometry = () => {
  return (
    <div>
      <h1>Geometria</h1>
      <Link to="/">
        <Button variant="primary" className="d-flex align-items-center">
          <FaArrowLeft style={{ marginRight: "8px" }} /> Volver al inicio
        </Button>
      </Link>
    </div>
    
  )
}
