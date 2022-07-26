import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import XLSX from "xlsx";

export const ExportTable = ({ data }) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = {
    Sheets: { data: worksheet },
    SheetNames: ["data"],
  };

  const exportToCSV = useCallback(() => {
    XLSX.writeFile(workbook, "teste.csv");
  }, [workbook]);

  const exportToXLSX = useCallback(() => {
    XLSX.writeFile(workbook, "teste.xlsx");
  }, [workbook]);

  return (
    <>
      <Button variant="warning" onClick={exportToCSV} className="mr-4">
        Export to CSV
      </Button>

      <Button variant="warning" onClick={exportToXLSX} className="mr-4">
        Export to XLSX
      </Button>
    </>
  );
};
