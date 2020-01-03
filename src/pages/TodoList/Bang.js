import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { BrowserRouter  ,HashRouter as Router, Route, Link } from 'react-router-dom';
export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            date:[],
        }
    }
    componentDidMount() {
        fetch('http://119.3.153.161:3000/top/playlist?limit=5')
        .then(res => res.json( ))
        .then((date)=>{
            // console.log(date)
            this.setState({
                date:date.playlists,
            })
        })
    }
    render(){
        const {date} = this.state;
        return (
               <div>
                   <ul className="dies">
                       <h2><Link to="tui">榜单</Link></h2>
                       <li className="gtss"><Link to="gen">更多</Link></li>
                   </ul>
                   <div class="shu">
                       <ul className="cd">
                   {
                        date.map((item)=>
                            <li className="yan">
                                <span>{item.name}</span>
                            </li>
                        )
                }
                </ul>
                <ul className="cd">
                   {
                        date.map((item)=>
                            <li className="yan">
                                <span>{item.name}</span>
                            </li>
                        )
                }
                </ul>
                <ul className="cd">
                   {
                        date.map((item)=>
                            <li className="yan">
                                <span>{item.name}</span>
                            </li>
                        )
                }
                </ul>
                <ul className="cd">
                   {
                        date.map((item)=>
                            <li className="yan">
                                <span>{item.name}</span>
                            </li>
                        )
                }
                </ul>
                   </div>
               </div>
        )
    }
 }