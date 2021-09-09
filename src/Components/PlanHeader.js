import React from 'react';
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ErrorIcon from '@material-ui/icons/Error';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import  "../assets/main.css";
const defaultProps = {
    options: [],
    getOptionLabel: (option) => option.title,
  };
export function PlanHeader(){
    return (
            <div>
                <h3>Saving Plan Parameters</h3>
                 <Grid container spacing={3}>
                    <Grid item xs>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Saving Plan type</FormLabel>
                                <RadioGroup aria-label="plan-type" name="plan-type" >
                                    <div className="radio-button">
                                        <FormControlLabel value="Compute Saving Plans" control={<Radio color="primary" />} label="Compute Saving Plans" />
                                        <ErrorIcon className="err-icon"/>
                                    </div>
                                    <div className="radio-button">
                                        <FormControlLabel value="EC2 Instance Saving Plans" control={<Radio color="primary" />} label="EC2 Instance Saving Plans" />
                                        <ErrorIcon className="err-icon"/>
                                    </div>
                                </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Saving Plan Term</FormLabel>
                            <RadioGroup aria-label="plan-term" name="plan-term" >
                                <div>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="1-Year" />
                                </div>
                                <div>
                                    <FormControlLabel value="3" control={<Radio color="primary" />} label="3-Year" />
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Payment options</FormLabel>
                                <RadioGroup aria-label="payment-options" name="payment-options" >
                                        <FormControlLabel value="all" control={<Radio color="primary" />} label="All Upfront" />
                                        <FormControlLabel value="partial" control={<Radio color="primary" />} label="Partial Upfront" />
                                        <FormControlLabel value="no" control={<Radio color="primary" />} label="No Upfront" />
                                </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl className="dropdown-formcontrol">
                            <FormLabel component="legend"  style={{fontSize:"12px",color:"black"}} >Purchase in Account</FormLabel>
                                <div className="dropdown">
                                    <Autocomplete
                                            {...defaultProps}
                                            id="debug"
                                            Select-Account
                                            renderInput={(params) => <TextField {...params} label="Select Account" margin="normal" />}
                                        />
                                </div>
                                <div>
                                    <FormControlLabel
                                            control={<Checkbox name="isTrue"  color="default" />}
                                            label="Account Scoped Purchase"
                                    />
                                </div>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
}

export default PlanHeader
