
/*
*  打包入口文件
*
*
*/

import React  from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App.js';
const http = require('http');


// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http:`);
// });


render(
    <Router><App /></Router>,
    document.getElementById('root')
);


// 不使用库的方式
// import A from './a.js';
// import B from './b.js';
// const container = document.getElementById('container');
//
// A();
// B();
// container.innerHTML = 1111;


