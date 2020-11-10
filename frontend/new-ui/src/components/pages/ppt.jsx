import React from 'react';
import './Products.css';
import CardItem from './CardItem';
import Tutorial from './Tutorial';
import { BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import Profile from './Profile';
import Assessment from './Assessment';
import Upload from './Upload';
import Sidebar from '../Sidebar';
import '../Sidebar.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Iframe from 'react-iframe'
import './Upload.css'
import jwt_decode from 'jwt-decode'
class ppt extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.openFullscreen=this.openFullscreen.bind(this);
        this.print=this.print.bind(this);
        this.state={
            hierarchy: this.props.location.mapping,
            src:"http://localhost:5000/return-files1?pptpath="+this.props.location.pdf_path+"#page=1",
            index:0,
            ppt_path:"http://localhost:5000/return-files?pptpath="+this.props.location.ppt_path,
            mcq:this.props.location.mcq,
            id:this.props.location.tid
        }
    }
    openFullscreen(ev) {
        ev.preventDefault();
        // console.log(elem.parentNode.childNodes)
        // elem=elem.parentNode.childNodes[3];
        console.log("here");
        var elem=document.getElementById("button1");
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
      } 
    print(pgno){
        // var x=document.getElementById("button1");
        // console.log(x);
        // document.getElementById("myId").src="http://localhost:5000/return-files1?pptpath=D:/College/Capstone Project/Final/backend/Create-tutorials-from-text-file/scripts/ppt_trial.pdf#page=9";
        var x=this.state.src.split("#")[0];
        this.setState({src:x+"#page="+pgno.toString(),index:this.state.index+1})
        // document.getElementById("button1").contentDocument.location.reload(true);
    }
    render(){
        const TreeRecursive = ({ data }) => {
            // loop through the data
            return data.map(item => {
              // if its a file render <File />
              if (item["children"].length == 0) {
                return <MenuItem onClick={() => this.print(item["pgno"])}>{item["heading"]}</MenuItem>;
              }
              // if its a folder render <Folder />
              else {
                return (
                  <SubMenu title={item["heading"]} onClick={() => this.print(item["pgno"])}>
                    {/* Call the <TreeRecursive /> component with the current item.childrens */}
                    <TreeRecursive data={item["children"]} />
                  </SubMenu>
                );
              }
            });
          };
          // var { tutorial_id } = useParams();
        console.log(this.props.match);
        const student=<div><Link to={{pathname:"/student_assessments/", data:this.state.mcq, tid: this.state.id}}><button  className="btn-secondary btn-lg" style={{color:"black"}}><h5>Assessments</h5></button></Link></div>;
    const teacher=<div><Link to={{pathname:"/assessments", data:this.state.mcq}}><button  className="btn-secondary btn-lg" style={{color:"black"}}><h5>Assessments</h5></button></Link></div>;
  return (
    
  	 <div class="row">
	     <div class="col-2">
	     <ProSidebar>
		<Menu iconShape="square" id="sidebar">
	<TreeRecursive data={this.state.hierarchy}/>
    {/* <Link to={{pathname:"/assessments"}}>
        <MenuItem>Assessments</MenuItem>
      </Link> */}
	</Menu>
	</ProSidebar>
	     </div> 
	     <div class="col-8"> 
               <center>
                   <br></br>
               <h5>Click here to download PPT with voiceover <button  className="btn-secondary btn-lg"><a href={this.state.ppt_path} download style={{color: "black"}}>Download PPT</a></button></h5>
               <br></br>
      <div class="embed-responsive embed-responsive-16by9">
	                        
	                       	
        <a  class="elem-fullscreen-link" onClick={this.openFullscreen} id="button">
            <span class="fa fa-arrows-alt" aria-hidden="true"></span>
            </a>
        <iframe class="embed-responsive-item elem-fullscreen" src={this.state.src} allowfullscreen="" width="10%" height="100%" id="button1" key={this.state.index} src={this.state.src} style={{margin:"0 auto"}}>
        </iframe>
        <h5 style={{color:"black"}}>Click here to {jwt_decode(localStorage.usertoken).identity.role==="student"?"take":"view"} assessments{jwt_decode(localStorage.usertoken).identity.role==="student"?student:teacher}</h5> 
        </div>
        
	      <hr/>
        </center>
    {/* <Iframe src={this.state.src}
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}
	    </div>
        {/* <embed id="button1" src={this.state.src} allowfullscreen="" width="100%" height="100%" id="button1"></embed>
        </center></div> */}
	    <div class="col-2">
	    <br/>
	      <ul className='cards__items'>
            <CardItem
              src='http://i.ytimg.com/vi/BdhErO4a9XE/maxresdefault.jpg'
              text='Learn about the various events in PES University'
              path='https://events.pes.edu/'
            />
           </ul>
           <ul>
            <CardItem
              src='https://minutes.co/wp-content/uploads/2019/06/research-and-scholarship.jpg'
              text='Learn about the ongoing Research in PES University'
              path='https://research.pes.edu/patents/'
            />
           </ul>
           <ul>
            <CardItem
              src='https://news.pes.edu/Uploads/20190704%20103742_1.jpg'
              text='Be Updated with the current news in PES University'
              path='https://news.pes.edu/'
            />
          </ul>
	    </div>
	  </div>
  	)
}
}

export default ppt;