import React from 'react'
import './_addclient.scss'
import { Form, Input, Button } from 'antd';
export default function AddClient() {
    return (
        <div>
            <div className="main"></div>
            <div className="alert-add-client">
                <span className="close">&times;</span>
                <h1>Add client</h1>
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
                                <Input />
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
                            <div className="text-left required">Client ID</div>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <div className='text-left'>Company Name</div>
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

                        </div>
                    </div>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div >
    )
}
