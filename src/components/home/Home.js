import './home.css'
import React from 'react'
import Top from '../nav/Top'
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Type from '../typewriter/Type';


export default function Home() {
    const Html = 90;
    const Css = 80;
    const Javascript = 90;
    const Bootstrap = 70;
    const ReactJs = 80;
    const Wordpress = 90;

    
    // klj
    const mongodb = 90;
    const nodeJs = 80;
    const express = 90;
    const Laravel = 70;
    const Php = 80;
    const DatabaseMysql =90;
    



    return (
        <div className='home'>
            <Top className='topber' />
            <Container className='homecontent'>
                <Row className='homewrapper'>
                    <Col md={5} className='homeimgwrapper' >
                        <img className='homeimg' src="images/2.jpg" alt="" />
                    </Col>

                    <Col className='homeright' md={7}>
                        <h1>Saran Barua</h1>
                        <Type />
                        <hr className='hr' />
                        <p>I am a passionate web developer who wants to learn more and more about web-based technology. I want to touch the highest peak of web development and provide value to the organization I work.</p>

                        <div className="iconsbtn">

                            <Row>
                                <Col md={4} className="homeicon">
                                    <a className='iconlink' href="https://web.facebook.com/saran.barua.984"><CloudDownloadIcon className='icon' /><span>resum</span></a>
                                </Col>
                                <Col md={4} className="homeicon">
                                    <a className='iconlink' href="https://www.linkedin.com/in/saran-barua/?fbclid=IwAR1Gr_-pWSuTsAH1M_6L8sNHfkHOvnNHIaqm_Jg1AIKvrzB6Tth7lb83QY0"><LinkedInIcon className='icon' /><span>LinkedIn</span></a>
                                </Col>
                                <Col md={4} className="homeicon">
                                    <a className='iconlink' href="https://github.com/saranbarua?fbclid=IwAR0a5Ss0xcdZOJnLDgs7Pp2e2gTrE33R7ZAcidMvtV8nuaEwAOrLk1jjKNs"><GitHubIcon className='icon' /><span>GitHub</span></a>
                                </Col>
                            </Row>


                        </div>

                    </Col>
                </Row>


                {/* ----------skill-------- */}
        

                   <div className="skillcontent">
                    <h1>My Skills & Familiarity</h1>
                    <hr />
                    <p>
                    Below is the list of skills and technologies that I used till now. The assumptions are made based on my thinking and confidence.
                    </p>
                   </div>

                <Row className='softskill'>
                    <Col md={6} className='skillwrapper'>

                        <h1>Html</h1>
                        {/* <ProgressBar now={html} label={`${html}%`} />; */}
                        <ProgressBar now={Html} label={`${Html}%`} />

                        <h1>Css</h1>
                        <ProgressBar now={Css} label={`${Css}%`} />

                        <h1>Javascript</h1>
                        <ProgressBar now={Javascript} label={`${Javascript}%`} />

                        <h1>Bootstrap</h1>
                        <ProgressBar now={Bootstrap} label={`${Bootstrap}%`} />
                        <h1>ReactJs</h1>
                        <ProgressBar now={ReactJs} label={`${ReactJs}%`} />


                        <h1>Wordpress</h1>
                        <ProgressBar now={Wordpress} label={`${Wordpress}%`} />

                    </Col>
                    <Col md={6} className='skillwrapper'>
                        <h1>mongodb</h1>
                        <ProgressBar now={mongodb} label={`${mongodb}%`} />

                        <h1>nodeJs</h1>
                        <ProgressBar now={nodeJs} label={`${nodeJs}%`} />

                        <h1>express</h1>
                        <ProgressBar now={express} label={`${express}%`} />

                        <h1>Laravel</h1>
                        <ProgressBar now={Laravel} label={`${Laravel}%`} />
                        <h1>Php</h1>
                        <ProgressBar now={Php} label={`${Php}%`} />


                        <h1>DatabaseMysql</h1>
                        <ProgressBar now={DatabaseMysql} label={`${DatabaseMysql}%`} />
                    </Col>
                </Row>

                {/* --------projects---------- */}

                <div projecttitle>
                    <div className='projectContent'>
                        <h1>My Projects List</h1>
                        <hr />
                        <p>
                            Here are the top projects that I have done throughout my Journey of web development.
                        </p>
                    </div>
                </div>

                <Row>
                    <Col className='projectimgwrapper' >
                        <Row className='project'>
                            <Col className='projectimg' md={4}>
                                <img src="images/1.jpg" alt="" />
                            </Col>
                            <Col className='projectimg' md={4}>
                                <img src="images/2.jpg" alt="" />

                            </Col>
                            <Col className='projectimg' md={4}>
                                <img src="images/3.jpg" alt="" />

                            </Col>
                        </Row>
                    </Col>

                </Row>



                <Row>
                    <Col className='projectimgwrapper' >
                        <Row className='project'>
                            <Col className='projectimg' md={4}>
                                <img src="images/5.jpg" alt="" />
                            </Col>
                            <Col className='projectimg' md={4}>
                                <img src="images/5.jpg" alt="" />

                            </Col>
                            <Col className='projectimg' md={4}>
                                <img src="images/5.jpg" alt="" />

                            </Col>
                        </Row>
                    </Col>

                </Row>


                <div className="contactme">
                    <div className="contactcontent">
                        <h1>Contact me</h1>
                        <div className="hr">
                            <hr />
                        </div>
                        <p>
                            You can contact me by the form below or send email to kamrulhaider.ssb@gmail.com
                        </p>
                    </div>
                    <div className="contactform">
                        <h5>name</h5>
                        <input type="text" className="input" />

                        <h5>email</h5>
                        <input type="text" className="input" />

                        <h5>massees</h5>
                        <input type="text" className="messes" />
                    </div>
                </div>

                <div className="fotter">
                    <img src="images/logo.png" alt="" />
                    <h4>Made by sopon khakha 2022 ** email:sksoponsk0@gmail.com</h4>
                </div>
            </Container>

        </div>
    )
}
