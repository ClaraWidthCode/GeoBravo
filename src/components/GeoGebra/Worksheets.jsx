import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';


const Worksheets = () => {
  return (
    <div>
      <h1>Hojas de Trabajo </h1>
      <Link to="/">
        <Button variant="primary" className="d-flex align-items-center">
          <FaArrowLeft style={{ marginRight: "8px" }} /> 
        </Button>
      </Link>
    </div>
  )
}

export default Worksheets