import React, { Component } from "react";
import { calculateSalaryFrom } from './helpers/salary'
import InputSalario from "./components/InputSalario";
import ReadOnly from "./components/ReadOnly";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handleInputChange = (salarioText) => {
    this.setState({
      fullSalary: salarioText,
    });
  };
  

  render() {

    const { fullSalary } = this.state
    
    const salaryObject = calculateSalaryFrom(fullSalary)
    
    const {
      baseINSS, 
      discountINSS, 
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = salaryObject
    
    
    return (
      <>
        <h1 style={styles.center}>React Salário</h1>
        <span style={styles.padding}> Salário:</span>
        <div className="row">
        <InputSalario 
        currentValue={fullSalary}
        onChange={this.handleInputChange}/>
        
        <ReadOnly 
          label="Base INSS"
          value={baseINSS}
        />
        
        <ReadOnly
          label="Desconto INSS"
          value={discountINSS}
          percentage={percentINSS}
        />

        <ReadOnly
          label="Base IRPF"
          value={baseIRPF} 
        />

        <ReadOnly
          label="Desconto IRPF"
          value={discountIRPF}
          percentage={percentIRPF}
        />

        <ReadOnly
          label="Salário Líquido"  
          value={netSalary}
          percentage={percentNetSalary}
          />
        
        </div>

      </>
    );
  }
}

const styles = {
  center: {
    textAlign: "center",
  },
  padding: {
    padding: "15px",
  },
};
