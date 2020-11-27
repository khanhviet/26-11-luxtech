import React from 'react'
import imgProfile from '../../../assets/profile.jpg'
import './_profile.scss';
import { Card } from 'antd';
import imageLeader from 'assets/leader.jpg'
export default function Profile() {
    return (
        <div className="container-profile">
            <div className='auto-margin'>
                <div className="breadcrumb">
                    <h1 style={{ margin: '0px' }}>Profile</h1>
                    <h3 style={{ margin: '0px', fontWeight: '200' }}>DashBoard / Profile</h3>
                </div>
                <div className="infor-profile">
                    <div className="infor-person">
                        <div> <img src={imgProfile} style={{ borderRadius: '50%' }} alt='avatar'></img>
                        </div>
                        <div className="right">
                            <h2>Global Technologies</h2>
                            <div style={{ fontWeight: 'bold' }}>barry Cuda</div>
                            <div className="ceo">CEO</div>
                            <br />
                            <div fontWeight={{ fontWeight: 'bold' }}>EmployeeID: CLT-001</div>
                            <button>Send Message</button>
                        </div>
                    </div>
                    <div className="border-center" ></div>
                    <div className="detail-person">
                        <div style={{ minWidth: '100px', width: "50%" }}>
                            <div>Phone:</div>
                            <br />
                            <div>Email:</div>
                            <br />
                            <div>Birthday: </div>
                            <br />
                            <div>Address</div>
                            <br />
                            <div>Gender</div>
                        </div>
                        <div>
                            <div>09876543210</div>
                            <br />
                            <div>lkviet@gmail.com</div>
                            <br />
                            <div>2nd august</div>
                            <br />
                            <div>3753 Airport Rd, coosada,AL,324243</div>
                            <div>Male</div>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div>Project </div>
                </div>
                <div className="column">
                    <Card>
                        <h2 style={{ margin: '0px' }}>Office management</h2>
                        <div className="card-detail">
                            <strong>1</strong>
                            <span> open tasks, </span>
                            <strong>9</strong>
                            <span> task completed</span>
                        </div>
                        <div className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                        <div className="deadline">
                            <h4>Deadline</h4>
                            <div> 17 Apr 2019</div>
                        </div>
                        <div className="project-leader">
                            <h4>Project leader</h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="team">
                            <h4>Team: </h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{ float: 'left' }}>Progress</div>
                            <div style={{ float: "right", color: 'green' }}>
                                40%
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div className="progress-border">
                                <div style={{ height: '100%', width: '50%', backgroundColor: 'green' }} > </div>
                            </div>
                        </div>
                    </Card>
                    <Card>

                        <h2 style={{ margin: '0px' }}>Project Management</h2>
                        <div className="card-detail">
                            <strong>1</strong>
                            <span> open tasks, </span>
                            <strong>9</strong>
                            <span> task completed</span>
                        </div>
                        <div className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                        <div className="deadline">
                            <h4>Deadline</h4>
                            <div> 17 Apr 2019</div>
                        </div>
                        <div className="project-leader">
                            <h4>Project leader</h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="team">
                            <h4>Team: </h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{ float: 'left' }}>Progress</div>
                            <div style={{ float: "right", color: 'green' }}>
                                40%
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div className="progress-border">
                                <div style={{ height: '100%', width: '50%', backgroundColor: 'green' }} > </div>
                            </div>
                        </div>

                    </Card>
                    <Card >
                        <h2 style={{ margin: '0px' }}>Video calling App</h2>
                        <div className="card-detail">
                            <strong>1</strong>
                            <span> open tasks, </span>
                            <strong>9</strong>
                            <span> task completed</span>
                        </div>
                        <div className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                        <div className="deadline">
                            <h4>Deadline</h4>
                            <div> 17 Apr 2019</div>
                        </div>
                        <div className="project-leader">
                            <h4>Project leader</h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="team">
                            <h4>Team: </h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{ float: 'left' }}>Progress</div>
                            <div style={{ float: "right", color: 'green' }}>
                                40%
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div className="progress-border">
                                <div style={{ height: '100%', width: '50%', backgroundColor: 'green' }} > </div>
                            </div>
                        </div>

                    </Card>
                    <Card >
                        <h2 style={{ margin: '0px' }}>Project Management</h2>
                        <div className="card-detail">
                            <strong>1</strong>
                            <span> open tasks, </span>
                            <strong>9</strong>
                            <span> task completed</span>
                        </div>
                        <div className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                        <div className="deadline">
                            <h4>Deadline</h4>
                            <div> 17 Apr 2019</div>
                        </div>
                        <div className="project-leader">
                            <h4>Project leader</h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="team">
                            <h4>Team: </h4>
                            <div style={{ width: '30px', height: '30px' }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={imageLeader} alt="" />
                            </div>
                        </div>
                        <div className="progress">
                            <div style={{ float: 'left' }}>Progress</div>
                            <div style={{ float: "right", color: 'green' }}>
                                40%
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div className="progress-border">
                                <div style={{ height: '100%', width: '50%', backgroundColor: 'green' }} > </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
