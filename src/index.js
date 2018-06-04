import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import CourseManager from "./containers/CourseManager";
import './index.css';

ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);