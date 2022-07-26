import React, { useState } from "react";
import "./App.css";
import { Customers } from "./Customers";
import { Header } from "./Header";
import { ExportTable } from "./ExportTable";
import { ExportPrint } from "./ExportPrint";

const App = () => {
  const [customers] = useState(() => {
    let custs = [];
    for (let i = 0; i <= 25; i++) {
      custs.push({
        firstName: `first${i}`,
        lastName: `last${i}`,
        email: `abc${i}@gmail.com`,
        address: `000${i} street city, ST`,
        zipcode: `0000${i}`,
      });
    }
    return custs;
  });

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <h2>Customers</h2>
        </div>

        <div className="col-md-4 right">
          <ExportTable data={customers} />
          <ExportPrint />
        </div>
      </div>

      <Customers customers={customers} />
    </div>
  );
};

export default App;
