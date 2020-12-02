import React from "react";

import { Button } from "react-bootstrap";

import { toTop } from "../helper/toTop";

const ToTopButton = () => {
  return (
    <Button variant="outline-danger" onClick={toTop} id="buttoncss">
      Top
    </Button>
  );
};

export default ToTopButton;
