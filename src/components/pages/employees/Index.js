import { Table } from 'antd'
import React, { useState } from 'react'
import './_index.scss'
export default function Index() {
    const columns = [
        {
            title: 'Name',
            key: 'names',
            dataIndex: 'names',
            render: (names, record) => (<>{names.map(name => {
                return (<div className='name-item' key={record}>
                    <img src={name.srcAvatar} alt="" />
                    <div >
                        <h3 >{name.name}</h3>
                        <span>{name.position}</span>
                    </div >
                </div>);
            })}
            </>
            )
        },
        {
            title: 'Employee ID',
            key: 'employeeID',
            dataIndex: 'employeeID'
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email'
        }, {
            title: 'Mobile',
            key: 'date',
            dataIndex: 'mobile'
        },
        {
            title: 'Join Date',
            key: 'date',
            dataIndex: 'date'
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            render: texts => (
                <div className='custom-select'>
                    <select>{texts.map(item => {
                        return (<option>{item}</option>)
                    })
                    }
                    </select>
                </div>
            )

        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
            render: (action, record) => <>{
                <div className='wrap-action'>
                    <div className='context-menu'>
                        <p>Edit</p>
                        <p className='delete'>Delete</p>
                    </div>
                    <img onClick={toggleMenu} className='f-r' src={action} alt="" />
                </div>
            }
            </>
        }

    ]
    const data = [{
        key: 1,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 2,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    }
        ,
    {
        key: 3,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    }
        ,
    {
        key: 4,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    }
        ,
    {
        key: 5,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 6,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 7,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 8,
        names: [
            {
                name: 'Viet',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'AT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 9,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 10,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 11,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 12,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 13,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 14,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 15,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 16,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    },
    {
        key: 17,
        names: [
            {
                name: 'join',
                srcAvatar: `http://localhost:3000/assets/leader.jpg`,
                position: 'Web developer'
            }
        ],
        employeeID: 'FT-0001',
        email: 'lkviet@gmail.com',
        mobile: "013120344024",
        date: '1 Jan 2013',
        role: ['web Developer', 'fresher nodejs'],
        action: 'http://localhost:3000/assets/dot.png'
    }
    ]
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 7,
    })
    const toggleMenu = (e) => {
        e.preventDefault();
        if (e.target.parentElement.children[0].style.display === 'block') {
            e.target.parentElement.children[0].style.display = 'none';
            return;
        }
        e.target.parentElement.children[0].style.display = 'block'
    }
    const handleTableChange = (pagination, filters, sorter) => {
        fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };
    const fetch = (params = {}) => {
        setPagination({ ...params.pagination })
    }
    return (
        <div className='container-employee'>
            <div className='m-x'>
                <button className='btn-add-client'>+ Add Client</button>
                <div className="breadcrumb">
                    <h1>Profile</h1>
                    <h3>DashBoard / Clients</h3>
                </div>
                <Table columns={columns} pagination={pagination} onChange={handleTableChange} dataSource={data}>
                </Table>
                <div className='entries'>
                    Showing 1 to 7 of 7 entries
                </div>
            </div>
        </div>
    )
}
