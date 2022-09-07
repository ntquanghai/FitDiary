import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MacroTable } from '../macroTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          {children}              
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const BasicTabs = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if(value === 0) {
    return(
      <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <Tabs TabIndicatorProps={{style: {backgroundColor:'#EF4444'}}} sx = {{width: '100%'}} value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab disableRipple sx = {{'&.Mui-selected': {
                  color: '#EF4444',
                  }}} 
                label="MAINTENANCE" {...a11yProps(0)} ></Tab>
                <Tab disableRipple sx = {{'&.Mui-selected': {
                  color: '#EF4444',
                  }}}  label="CUTTING" {...a11yProps(1)} ></Tab>
                <Tab disableRipple sx = {{'&.Mui-selected': {
                  color: '#EF4444',
                  }}}  label="BULKING" {...a11yProps(2)} ></Tab>
              </Tabs>
            </Box>
              <TabPanel value={value} index = {0}>
                <div className = "my-3">
                The following is a table of macronutrient values from <b>{props.caloList.caloMain}</b> calories to maintain your weight (Note: Moderate carb (30/30/35) stands for 30% protein, 30% fats, 35% carbohydrates).
                There are 4 calories per gram of both protein and carbohydrates, and 9 calories per gram of fats. 
                </div>
              </TabPanel>
              <TabPanel value={value} index = {0}  sx = {{"&.MuiBox-root":{
                padding: 0
              }}}>
                  <MacroTable
                      macroRate = {props.macroRate}
                      calo = {props.caloList.caloMain}
                  ></MacroTable>
              </TabPanel>
        </Box>
    )
  }
  else if (value === 1) {
    return(
      <Box sx={{ width: '100%' , }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Tabs TabIndicatorProps={{style: {backgroundColor:'#EF4444'}}} sx = {{width: '100%'}} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab disableRipple sx = {{'&.Mui-selected': {
              color: '#EF4444',
              }}} 
            label="MAINTENANCE" {...a11yProps(0)} ></Tab>
            <Tab disableRipple sx = {{'&.Mui-selected': {
              color: '#EF4444',
              }}}  label="CUTTING" {...a11yProps(1)} ></Tab>
            <Tab disableRipple sx = {{'&.Mui-selected': {
              color: '#EF4444',
              }}}  label="BULKING" {...a11yProps(2)} ></Tab>
          </Tabs>
        </Box>
          <TabPanel value={value} index = {1}>
            <div className = "my-3">
              The following is a table of macronutrient values from <b>{props.caloList.caloCut}</b> calories on a cutting diet with a 500 calorie deficit (Note: Moderate carb (30/30/35) stands for 30% protein, 30% fats, 35% carbohydrates).
              There are 4 calories per gram of both protein and carbohydrates, and 9 calories per gram of fats.
            </div>
          </TabPanel>
          <TabPanel value={value} index = {1}  sx = {{"&.MuiBox-root":{
                padding: 0
              }}}>  
              <MacroTable
                  macroRate = {props.macroRate}
                  calo = {props.caloList.caloCut}
              ></MacroTable>
          </TabPanel>
      </Box>
    )
  }
  else if(value ===2) {
    return(
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Tabs TabIndicatorProps={{style: {backgroundColor:'#EF4444'}}} sx = {{width: '100%'}} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab disableRipple sx = {{'&.Mui-selected': {
              color: '#EF4444',
              }}} 
            label="MAINTENANCE" {...a11yProps(0)} ></Tab>
            <Tab disableRipple sx = {{'&.Mui-selected': {
              color: '#EF4444',
              }}}  label="CUTTING" {...a11yProps(1)} ></Tab>
            <Tab disableRipple sx = {{'&.Mui-selected': {
              color: '#EF4444',
              }}}  label="BULKING" {...a11yProps(2)} ></Tab>
          </Tabs>
        </Box>
          <TabPanel value={value} index = {2}>
          <div className = "my-3">
            The following is a table of macronutrient values from <b>{props.caloList.caloBulk}</b> calories on a cutting diet with a 500 calorie surplus (Note: Moderate carb (30/30/35) stands for 30% protein, 30% fats, 35% carbohydrates).
            There are 4 calories per gram of both protein and carbohydrates, and 9 calories per gram of fats.
          </div>
          </TabPanel>
          <TabPanel value={value} index = {2} sx = {{backgroundColor:"red"}}>        
              <MacroTable
                  macroRate = {props.macroRate}
                  calo = {props.caloList.caloBulk}
              ></MacroTable>
          </TabPanel>
      </Box>
    )
  }
}


