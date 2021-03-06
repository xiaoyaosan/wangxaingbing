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
        fetch('http://119.3.153.161:3000/top/playlist?limit=12&order=new')
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
                   <ul className="ziti">
                       <h2><Link to="tui">热门推荐</Link></h2>
                       <li><Link to="hua">华语</Link></li>
                       <span class="line">|</span>
                       <li><Link to="liu">流行</Link></li>
                       <span class="line">|</span>
                       <li><Link to="yao">摇滚</Link></li>
                       <span class="line">|</span>
                       <li><Link to="min">民谣</Link></li>
                       <span class="line">|</span>
                       <li><Link to="dian">电子</Link></li>
                       <li className="gt"><Link to="gen">更多</Link></li>
                   </ul>
                   <div class="shu">
                   {
                        date.map((item)=>
                            <div  className="yang">
                                <img src={item.coverImgUrl} /><br />
                                <span>{item.name}</span>
                            </div>
                        )
                }
                   </div>
               </div>
        )
    }
 }