import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './ye.css';
import axios from 'axios';
import { BrowserRouter  ,HashRouter as Router, Route, Link } from 'react-router-dom';
export default class App extends Component{
    
    render(){
        return (
                <div className="g-ft ">
<div className="m-ft">
<div className="wrap f-cb">
<div className="copy">
<p className="link" id="music-link">
<a href="//st.music.163.com/official-terms/service" target="_blank" className="item s-fc4">服务条款</a><span className="line">|</span>
<a href="//st.music.163.com/official-terms/privacy" target="_blank" className="item s-fc4">隐私政策</a><span className="line">|</span>
<a href="//st.music.163.com/official-terms/children" target="_blank" className="item s-fc4">儿童隐私政策</a><span className="line">|</span>
<a href="//music.163.com/st/staticdeal/complaints.html" target="_blank" className="item s-fc4">版权投诉指引</a><span className="line">|</span>
<a id="g_feedback" href="#" className="item s-fc4" onclick="nm.x.feedback();return false;" hidefocus="true">意见反馈</a>
<span className="line">|</span><a className="s-fc4"></a></p>
<p className="right s-fc3">
<span className="sep span">网易公司版权所有©1997-2020</span><span className="span">杭州乐读科技有限公司运营：</span><a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" className="alink s-fc3">浙网文[2018]3506-263号</a>
</p>
<p className="contact s-fc3">
<span className="sep span">违法和不良信息举报电话：0571-89853516</span>
<span className="span">举报邮箱：</span><a className="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
</p>
<p className="right s-fc3">
<span className="sep span">粤B2-20090191-18</span><a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank" className="alink s-fc3">工业和信息化部备案管理系统网站</a>
</p>
</div>
</div>
</div>
</div>
        )
    }
 }