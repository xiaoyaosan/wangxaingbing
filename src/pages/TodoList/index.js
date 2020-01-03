import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter  ,HashRouter as Router, Route, Link } from 'react-router-dom';
export default class App extends Component{
    render(){
        return (
           <div>
               <ul className="header">
                    <h1>网易云音乐</h1>
                   <li><Link to="faxian" >发现音乐</Link></li>
                   <li><Link to="sd" >我的音乐</Link></li>
                   <li><Link to="sa" >朋友</Link></li>
                   <li><Link to="qw" >商城</Link></li>
                   <li><Link to="we" >音乐人</Link></li>
                   <li><Link to="as" >下载客户端</Link></li>
               </ul>
           </div>
        )
    }
 }