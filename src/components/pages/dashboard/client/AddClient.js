import React from 'react'
import './_addclient.scss'
import { Form, Input, Button } from 'antd';
export default function AddClient() {
    return (
        <div>
            <div className="main"></div>
            <div className="alert-add-client">
                <span class="close">&times;</span>
                <h1>Add client</h1>
                <Form>
                    <div className="column">
                        <div>
                            <div style={{ textAlign: 'left' }}>Firstname</div>
                            <Form.Item

                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input style={
                                    {
                                        height: "50px"
                                    }
                                } />
                            </Form.Item>
                            <div style={{ textAlign: 'left' }}>Email</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input style={
                                    {
                                        height: "50px"
                                    }
                                } />
                            </Form.Item>
                            <div style={{ textAlign: 'left' }}>Phone</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input style={
                                    {
                                        height: "50px"
                                    }
                                } />
                            </Form.Item>
                        </div>
                        <div>
                            <div style={{ textAlign: 'left' }}>Last Name</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input style={
                                    {
                                        height: "50px"
                                    }
                                } />
                            </Form.Item>
                            <div style={{ textAlign: 'left' }}>Client ID</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input style={
                                    {
                                        height: "50px"
                                    }
                                } />
                            </Form.Item>
                            <div style={{ textAlign: 'left' }}>Company Name</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input style={
                                    {
                                        height: "50px"
                                    }
                                } />
                            </Form.Item>

                        </div>
                    </div>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div>
    )
}
