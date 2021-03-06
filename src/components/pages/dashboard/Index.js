import React from 'react'
import './_index.scss'
import { Progress, Card } from 'antd';
import image from 'assets/leader.jpg';
import imgDot from 'assets/dot.png';
import Itembar from 'components/generals/Itembar';
export default function Index() {
    return (
        <div className='container-dashboard'>
            <div className='auto-margin'>
                <div className="breadcrumb">
                    <h1 style={{ margin: '0px' }}>Profile</h1>
                    <h3 style={{ margin: '0px', fontWeight: '200' }}>DashBoard / Profile</h3>
                </div>
                <div className='row-one'>
                    <Itembar name='project' number='112' className='cubes'></Itembar>
                    <Itembar name='project' number='112' className='cubes'></Itembar>
                    <Itembar name='project' number='112' className='cubes'></Itembar>
                </div>
                <div className='row-true'>
                    <Card className="antd-card">
                        <span className='percent'>+10%</span>
                        <h4>New Employees</h4>
                        <h3>10</h3>
                        <Progress percent={40} showInfo={false}></Progress>
                    </Card>
                    <Card className="antd-card">
                        <span className='percent'>+10%</span>
                        <h4>New Employees</h4>
                        <h3>
                            <i class="fa fa-dollar" style={{ color: "black" }}></i>
                            10</h3>
                        <Progress percent={40} showInfo={false}></Progress>
                    </Card>
                    <Card className="antd-card">
                        <span className='percent'>+10%</span>
                        <h4>New Employees</h4>
                        <h3>
                            <i class="fa fa-dollar" style={{ color: "black" }}></i>
                            10</h3>
                        <Progress percent={40} showInfo={false}></Progress>
                    </Card>
                    <Card className="antd-card">
                        <span className='percent'>+10%</span>
                        <h4>New Employees</h4>
                        <h3>
                            <i class="fa fa-dollar" style={{ color: "black" }}></i>
                            10</h3>
                        <Progress percent={40} showInfo={false}></Progress>
                    </Card>
                </div>
                <div className="row-three">
                    <div className='client'>
                        <h2>Clients</h2>
                        <table>
                            <tr>
                                <th className='setWidth'>Name</th>
                                <th className='setWidth'>Email</th>
                                <th className='setWidth'>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <th>
                                    <img className='row-avatar' src={image} alt=''></img>
                                    <div>Barry Cuda</div>
                                    <span>CEO</span>
                                </th>
                                <th>
                                    barry@gmail.com
                                </th>
                                <th>
                                    <select>
                                        <option>
                                            Active
                                        </option>
                                        <option>Inactive</option>
                                    </select>
                                </th>
                                <th>
                                    <img src={imgDot} style={{ float: 'right', marginRight: '5px' }} alt=""></img>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div className='recent-project'>
                        <h2>Recent Project</h2>
                        <table>
                            <tr>
                                <th className='project-name'>
                                    Project Name
                                    </th>
                                <th className='Progress'>
                                    Progress
                                    </th>
                                <th className='action'>
                                    Action
                                    </th>
                            </tr>
                            <tr>
                                <th>
                                    <h4 >Office Management</h4>
                                    <strong>1 </strong><span>open task, </span><strong>9</strong><span> task completed</span>
                                </th>
                                <th>
                                    <Progress percent={50} showInfo={false}></Progress>
                                </th>
                                <th>
                                    <img className='img-dot' src={imgDot} alt=""></img>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
