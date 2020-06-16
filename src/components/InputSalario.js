import React, { Component } from 'react'
import css from './input.module.css'

export default class InputSalario extends Component {
    

    handleInputChange = (event) => {
        const salarioText = event.target.value
        this.props.onChange(salarioText)
    }

   
    render() {
        const { currentValue } = this.props
        return (
            <div className={css.margin}>
                <input 
                placeholder="Digite seu salário"
                type="number"
                value={currentValue}
                onChange={this.handleInputChange}
                />
            </div>
        )
    }
}
