import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import  Header  from "../TodoList/index.js";
import List from "../TodoList/Shoulist.js";
import Die from "../TodoList/Xindie.js";
import Bang from "../TodoList/Bang.js";
import Jiao from "../TodoList/Jiao.js";
import "./index.css";

import { BrowserRouter  ,HashRouter as Router } from 'react-router-dom';

function App() {
    return (
      <div>
          <div className="App">
              <Header />
          </div>
          <div class="list">
            <List />
            <Die />
            <Bang />
          </div>
            <Jiao />
            </div>
    );
  }
export default App;