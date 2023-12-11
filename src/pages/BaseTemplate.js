import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Components/SideBar/SIdebar';
import NavigationBar from './Components/SideBar/NavigationBar';
import { Flex } from '@chakra-ui/react';
import './Styles/divStyle.css'
import Home from './Home';

function BaseTemplate (props)
{
    return(
        
           <div>
            <NavigationBar/>
            <div className='mainContent'>
                <div className = 'sidebar'><Sidebar/></div>
                {/* <div className = 'content'>{props.childern}</div>    */}
                {props.children}
            </div>
            
           </div>
        
    );
}

export default BaseTemplate;