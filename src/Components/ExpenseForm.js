import React from 'react';
import { FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import  "../assets/main.css";
import AssessmentIcon from '@material-ui/icons/Assessment';
export function ExpenseForm() {

        const [values, setValues] = React.useState({amount:''});

        const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
        };
        return (
            <div className="expense-form">
                <FormControl style={{width:300}}>
                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                            <Input
                                id="standard-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                               
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                </FormControl>
                <br/>
                <span className="expense-input-msg"> Default value is highest Savings from graph </span>
                <br/> <br/>
                <div className="rec-block">
                    <h3>AWS Recommendation: $37.50</h3>
                    <p className="expense-input-msg"> 7 Day Analysis by AWS </p>
                </div>
                <h4>
                    Expected Target Coverage
                    <br/>
                    0.99%
                </h4>
                <div className="view-cov">
                     <AssessmentIcon/>
                      <a><u>View Your current coverage</u></a> 
                </div>
                <h4>
                    Estimeted net Addtionlly Monthly Savings
                    <br/>
                   $5,028.64
                </h4>
                <span className="expense-input-msg">
                     Estimeted Savings produced by <br/>
                     savings plan purchase
                 </span>
            </div>
        )
}

export default ExpenseForm
