import React from "react";
const globaldata = {
  number: 0
};
const NumberContext = React.createContext(globaldata.number);
 export default NumberContext;
