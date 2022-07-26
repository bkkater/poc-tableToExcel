import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";

export const ExportPrint = () => {
  const printFile = useCallback(() => {
    window.print();
  }, []);

  return (
    <Button variant="warning" onClick={printFile}>
      Print
    </Button>
  );
};
