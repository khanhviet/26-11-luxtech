import React from 'react'
import { Form, Input, Button } from 'antd';
import './_addemployee.scss'
export default function AddEmployee() {
    return (
        <div>
            <div className="main"></div>
            <div className="alert-add-employee">
                <span className="close">&times;</span>
                <h1>Add Employee</h1>
                <Form>
                    <div className="column">
                        <div className='inner-column'>
                            <div className="text-left required">Firstname</div>
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
                            <div className='text-left required'>Email</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div className="text-left required">Employee ID</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div className="text-left required">Date Of Birth</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='date' />
                            </Form.Item>
                        </div>
                        <div className='inner-column'>
                            <div className="text-left">Last Name</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div className="text-left">Password</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div className="text-left">Phone</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div className='text-left'>Joining Date</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type='date' />
                            </Form.Item>

                        </div>
                    </div>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div >
    )
}
