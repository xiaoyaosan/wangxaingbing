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
        fetch('http://119.3.153.161:3000/top/album?offset=0&limit=6')
        .then(res => res.json( ))
        .then((date)=>{
            this.setState({
                date:date.albums,
            })
        })
    }
    render(){
        const {date} = this.state;
        return (
               <div>
                   <ul className="die">
                       <h2><Link to="tui">新碟上架</Link></h2>
                       <li className="gts"><Link to="gen">更多</Link></li>
                   </ul>
                   <div class="shu">
                   {
                        date.map((item)=>
                            <div  className="yang">
                                <img src={item.blurPicUrl} /><br />
                                <span>{item.name}</span>
                            </div>
                        )
                }
                   </div>
               </div>
        )
    }
 }