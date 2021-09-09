import './App.css';
import React from 'react';
import PlanHeader from './Components/PlanHeader';
import Grid from '@material-ui/core/Grid';
import GraphAnalysis from './Components/GraphAnalysis';
import ExpenseForm from './Components/ExpenseForm';

function App() {
  return (
    <div className="container">
      <Grid container spacing={3}>
          <Grid item xs={12}> 
              <PlanHeader />
          </Grid>
          <Grid item xs={6}> 
              <GraphAnalysis />
          </Grid>
          <Grid item xs={6}> 
              <ExpenseForm />
          </Grid>
       </Grid>
    </div>
  );
}

export default App;
