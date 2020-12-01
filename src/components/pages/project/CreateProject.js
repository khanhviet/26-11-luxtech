import React from 'react'
import { Form, Input, Button, Select, Avatar, Tooltip } from 'antd'
import './_createProject.scss'
const { Option } = Select;
const { TextArea } = Input;
export default function CreateProject() {
    return (
        <div>
            <div className="main"></div>
            <div className="alert-create-project">
                <span className="close">&times;</span>
                <h1>Create Project</h1>
                <Form>
                    <div className="column">
                        <div className='inner-column'>
                            <div className="text-left required">Project Name</div>
                            <Form.Item

                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input
                                />
                            </Form.Item>
                            <div className='text-left required'>Start data</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='date' placeholder='' />
                            </Form.Item>
                            <div className="text-left required"> Rate</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='number' placeholder='$50' />
                            </Form.Item>
                            <div className="text-left required">Add Project Leader</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='text' />
                            </Form.Item>
                            <div className="text-left required">Add Team</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='text' />
                            </Form.Item>
                        </div>
                        <div className='inner-column'>
                            <div className="text-left">Client</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select className="select">
                                    <div>
                                        <p>afsfdfasdf</p>
                                    </div>
                                </Select>
                            </Form.Item>
                            <div className="text-left">End Date</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='date' />
                            </Form.Item>
                            <div className="text-left">Type</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select name="client-select">
                                    <Option value="volvo">gloable technologies</Option>
                                    <Option value="saab">Saab</Option>
                                </Select>
                            </Form.Item>
                            <div className='text-left'>Team Leader</div>
                            <Form.Item>
                                <Avatar style={{
                                    margin: '10px 0'
                                }} src='http://localhost:3000/assets/leader.jpg' alt=""></Avatar>
                            </Form.Item>
                            <div className='text-left'>Team Leader</div>
                            <Form.Item>
                                <Avatar.Group maxCount={2} >
                                    <Avatar src='http://localhost:3000/assets/leader.jpg'></Avatar>
                                    <Avatar src='http://localhost:3000/assets/leader.jpg'></Avatar>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                        />
                                    </Tooltip>
                                </Avatar.Group>

                            </Form.Item>

                        </div>
                    </div>
                    <h4>Desciption</h4>
                    <TextArea className='textarea' />
                    <div className='container-btn'><Button className='btn-submit'>Submit</Button></div>
                </Form>
            </div>
        </div >
    )
}
