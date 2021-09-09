import React,{useState} from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import  "../assets/main.css";

export default function Filter() {
    const [Days, setDays] = useState('7');
    const handleFilter = (event, newDays) => {
        setDays(newDays);
    };
    return (
        <div className="filter">
            <span> Filters by Recent Days: &nbsp;&nbsp;&nbsp;</span>
            <ToggleButtonGroup
                thumbSwitchedStyle={{ backgroundColor: 'white' }}
                value={Days}
                exclusive
                onChange={handleFilter}
                aria-label="text alignment"
            >
                <ToggleButton size="large" value="3"  aria-label="left aligned"> 3 day </ToggleButton>
                <ToggleButton size="large" value="7" aria-label="centered"> 7 day </ToggleButton>
                <ToggleButton size="large" value="30" aria-label="right aligned"> 1 Month </ToggleButton>
            </ToggleButtonGroup>
       </div>
    )
}
