import React from 'react'
import imgProfile from '../../../assets/profile.jpg'
import './_profile.scss'
export default function Profile() {
    return (
        <div className="container-profile">
            <div className='auto-margin'>
                <div className="title">
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
                    <div> project </div>
                </div>
                <div className="column">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </div>
    )
}
