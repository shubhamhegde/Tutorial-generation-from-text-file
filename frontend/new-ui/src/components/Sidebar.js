import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { render } from '@testing-library/react';
import TreeMenu from 'react-simple-tree-menu';

class Sidebar extends React.Component {
	constructor(){
		super()
		this.state={
			hierarchy:[{'heading': 'What is Information Retrieval?', 'level': 1, 'pgno': 1, 'children': []}, {'heading': 'What is an IR Model? ', 'level': 1, 'pgno': 3, 'children': []}, {'heading': 'Components of Information Retrieval/ IR Model ', 'level': 1, 'pgno': 4, 'children': [{'heading': ' Acquisition', 'level': 2, 'pgno': 5, 'children': []}, 
			{'heading': ' Representation', 'level': 2, 'pgno': 6, 'children': []}, {'heading': ' File Organization', 'level': 2, 'pgno': 7, 'children': []}, {'heading': ' Query', 'level': 2, 'pgno': 8, 'children': []}]}, {'heading': 'User Interaction With Information Retrieval System ', 'level': 1, 'pgno': 9, 'children': []}],
		}
	}
render(){
	const TreeRecursive = ({ data }) => {
		// loop through the data
		return data.map(item => {
		  // if its a file render <File />
		  if (item["children"].length == 0) {
			return <MenuItem>{item["heading"]}</MenuItem>;
		  }
		  // if its a folder render <Folder />
		  else {
			return (
			  <SubMenu title={item["heading"]}>
				{/* Call the <TreeRecursive /> component with the current item.childrens */}
				<TreeRecursive data={item["children"]} />
			  </SubMenu>
			);
		  }
		});
	  };

	// this.populate();
return (
	// <TreeMenu data={this.state.data}></TreeMenu>
	<ProSidebar>
		<Menu iconShape="square" id="sidebar">
	<TreeRecursive data={this.state.hierarchy}/>
	</Menu>
	</ProSidebar>
)
}
}

export default Sidebar;