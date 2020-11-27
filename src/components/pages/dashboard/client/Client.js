import React from 'react'
import './_client.scss'
import { Card } from 'antd'
import img from 'assets/leader.jpg'
import imgThreeDot from 'assets/dot.png'
export default function Client() {
    return (
        <div className="container-clients">
            <div className='auto-margin'>
                <div className="breadcrumb">
                    <h1 style={{ margin: '0px' }}>Profile</h1>
                    <h3 style={{ margin: '0px', fontWeight: '200' }}>DashBoard / Clients</h3>
                </div>
                <div className="container-card">
                    <Card>
                        <div style={{ margin: '0px', textAlign: 'center' }}>
                            <div style={{ float: 'right' }}>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <h4>Team: </h4>
                            <div style={{ width: '70px', height: '70px', margin: "0 auto" }} >
                                <img style={{ width: '100%', height: '100%', borderRadius: '50%' }} src={img} alt="" />
                            </div>
                            <h2>Global Technologies</h2>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
