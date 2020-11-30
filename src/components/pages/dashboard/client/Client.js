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
                    <button>+ Add Client</button>
                    <h1>Profile</h1>
                    <h3>DashBoard / Clients</h3>
                </div>
                <div className="container-card">
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                    <Card>
                        <div className='card-content'>
                            <div className='f-r'>
                                <img src={imgThreeDot} alt="three dot"></img>
                            </div>
                            <img className='im-avatar' src={img} alt="" />
                            <h2>Global Technologies</h2>
                            <h4>Bary Cuda</h4>
                            <div className='ceo'>CEO</div>
                            <button className='btn btn-message'>Massage</button>
                            <button className='btn btn-view-profile'>View profile</button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
