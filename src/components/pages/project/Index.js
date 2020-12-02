import React from 'react'
import './_index.scss'
import { List, Progress, Avatar } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
export default function Index() {
    return (
        <div className='container-hospital'>
            <div className='m-y'>
                <div className='header-hospital'>
                    <button className='btn-edit-project'>+ Edit Project</button>
                    <MenuOutlined className='menu' />
                    <div>
                        <h2>Hospital Admin</h2>
                        <p> <strong>Dashboard </strong>/ Project</p>
                    </div>
                </div>
                <div className='column-left'>
                    <div className='text-hospital'>
                        <h4>Hispital adminstration</h4>
                        <p>2 open tasks, 5 tasks completed  </p>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                    </div>
                    <div className='uploaded-img'>
                        <h3>Uploaded images</h3>
                        <div>
                            <div className="container-img"><img src='http://localhost:3000/assets/leader.jpg' alt=''></img></div>
                            <div className="container-img"><img src='http://localhost:3000/assets/leader.jpg' alt=''></img></div>
                            <div className="container-img"><img src='http://localhost:3000/assets/leader.jpg' alt=''></img></div>
                            <div className="container-img"><img src='http://localhost:3000/assets/leader.jpg' alt=''></img></div>
                        </div>
                    </div>
                    <div className='uploaded-files'>
                        <h3>Uploaded files</h3>
                        <div className='detail-file'>
                            <i className="f-z">&#xf1c1;</i>
                            <p>ten file</p>
                            <p><a>Viet dt</a> date,hour</p>
                        </div>
                        <div className='detail-file'>
                            <i className="fa">&#xf1c1;</i>
                            <p>ten file</p>
                            <p><a>Viet dt</a> date,hour</p>
                        </div>
                    </div>
                </div>
                <div className='column-right'>
                    <List className='list'>
                        <h3>Project detail</h3>
                        <ul>
                            <li>
                                <span className='f-l'>Cost</span>
                                <span className='f-r'>3213</span>
                            </li>
                            <li>
                                <span className='f-l'>Cost</span>
                                <span className='f-r'>3213</span>
                            </li>
                            <li>
                                <span className='f-l'>Cost</span>
                                <span className='f-r'>3213</span>
                            </li>
                            <li>
                                <span className='f-l'>Cost</span>
                                <span className='f-r'>3213</span>
                            </li>
                            <li>
                                <span className='f-l'>Cost</span>
                                <span className='f-r'>3213</span>
                            </li>
                            <li>
                                <span className='f-l'>Cost</span>
                                <span className='f-r'>3213</span>
                            </li>
                        </ul>
                        <h3>Progress</h3>
                        <Progress className='progress' percent={50} showInfo={false}></Progress>
                    </List>
                    <div className='assigned'>
                        <div className='header'>
                            <h3 className='f-l'>Assigned leader</h3>
                            <button className='f-r btn btn-add'>+ Add</button>
                        </div>
                        <div className='main'>
                            <div className='row'>
                                <Avatar className='f-l' size='small' src='http://localhost:3000/assets/leader.jpg'>  </Avatar>
                                <div>
                                    <h4>Wiafdadsf asdfad</h4>
                                    <span>Team leader</span>
                                </div>
                            </div>
                            <div className='row'>
                                <Avatar className='f-l' size='small' src='http://localhost:3000/assets/leader.jpg'>  </Avatar>
                                <div>
                                    <h4>Wiafdadsf asdfad</h4>
                                    <span>Team leader</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='assigned'>
                        <div className='header'>
                            <h3 className='f-l'>Assigned users</h3>
                            <button className='f-r btn btn-add'>+ Add</button>
                        </div>
                        <div className='main'>
                            <div className='row'>
                                <Avatar className='f-l' size='small' src='http://localhost:3000/assets/leader.jpg'>  </Avatar>
                                <div>
                                    <h4>Wiafdadsf asdfad</h4>
                                    <span>Team leader</span>
                                </div>
                            </div>
                            <div className='row'>
                                <Avatar className='f-l' size='small' src='http://localhost:3000/assets/leader.jpg'>  </Avatar>
                                <div>
                                    <h4>Wiafdadsf asdfad</h4>
                                    <span>Team leader</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
