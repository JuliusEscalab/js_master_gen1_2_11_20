import './App.css';
import Header from './components/header'
import { AppBar, Tab } from '@material-ui/core';
import { TabPanel, TabContext, TabList } from '@material-ui/lab';
import { useState } from 'react';
import Home from './components/home'
import Contador from './components/counter';
import Form from './components/form';
import EjemploProps from './components/screens/EjemploProps';
import Fetch from './views/Fetch';

function App() {
  const [tabIndex, updateTabIndex] = useState("1")

  const onChangeTab = (event, value) => updateTabIndex(value)

  return (
    <>
      <Header />
      <TabContext value={tabIndex}>
        <AppBar position="static">
          <TabList
            onChange={onChangeTab}
            arial-label="Ejemplo Tabs"
          >
            <Tab label="Inicio" value="1" />
            {/* <Tab label="Estados" value="2" />
            <Tab label="Props" value="3" /> */}
            <Tab label="Fetch" value="4" />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <Home />
        </TabPanel>
        <TabPanel value="2">
          <Contador />
          <Form />
        </TabPanel>
        <TabPanel value="3">
          <EjemploProps />
        </TabPanel>
        <TabPanel value="4">
          <Fetch />
        </TabPanel>
      </TabContext>
    </>
  );
}

export default App;
