import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import './_itembar.scss'
function Itembar({ className, number, name }) {
    return (
        <Card className="antd-card">
            <span className="dash-widget-icon"><i className={`fa fa-${className}`}></i></span>
            <div className='dash-widget-infor'>
                <h2>{number}</h2>
                <span>{name}</span>
            </div>
        </Card>
    )
}

Itembar.propTypes = {
    className: PropTypes.string,
    number: PropTypes.number,
    name: PropTypes.string,
}

export default Itembar

