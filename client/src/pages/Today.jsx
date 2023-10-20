import React, { useState, useEffect} from 'react';
// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'
import '../css/today.css';
// Sidebar/Context
import {useContext} from "react";
import {UserContext} from '../../context/userContext'
import Sidebar from '../components/Sidebar';
// icons for fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icons for iconify
import {Icon} from '@iconify-icon/react';
// import today_icon from 'iconify-icon/react/ic:round-today';
// import collapse_icon from '@iconify-icon/react/gridicons:dropdown';


const Today = () =>{
    // const [currentDate, setCurrentDate] = useState(new Date());

    // useEffect(() =>{
    //     const intervalId = setInterval(() =>{
    //         setCurrentDate(new Date());
    //     }, 1000);

    //     return () => clearInterval(intervalId);
    // }, []);


    // React-Bootstrap
    const CustomToggle =({ children, eventKey })=> {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <p
            type="button"
            style={{
            color:'#232323',
        }

        }
            onClick={decoratedOnClick}
          >
            {children}
          </p>
        );
      };
    // Sidebar/Context
    const {user} = useContext(UserContext)
    return(
        <>
                    <Sidebar 
                    userimg = {!!user && (<h4>{user.username.charAt(0).toUpperCase()}</h4>)}
                    username= {!!user && (<h5>{user.username}</h5>)}/>


            <Container className='Dashboard-Box'>
                        <Row className='Today_Header' mb={3}>
                            <p><Icon icon="ic:round-today" /> Today</p>
                            {/* <span>{currentDate}</span> */}
                        </Row>                           
                        <Row >
                            <Accordion className='Accodion-Box' defaultActiveKey='0' alwaysOpen>
                                <Card>
                                    <Card.Header>
                                    <CustomToggle eventKey='1'>
                                        <p className='Today_Subheader'><Icon icon='gridicons:dropdown'></Icon>Overdue</p>
                                    </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='1'>
                                        <Card.Body>
                                        <p className='Task'>Add Task here</p>
                                        <hr />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    
                                </Card>
                            </Accordion>
                            <Accordion defaultActiveKey='0' alwaysOpen>
                                <Card>
                                    <Card.Header>
                                    <CustomToggle eventKey='2'>
                                        <p className='Today_Subheader'><Icon icon='gridicons:dropdown'></Icon>Set Date Here</p>
                                    </CustomToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey='2'>
                                        <Card.Body>
                                        <p className='Task'>Add Task here</p>
                                        <hr />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    
                                </Card>
                            </Accordion>
                        </Row>
                        <br />
             </Container>


        </>

    )
}

export default Today;