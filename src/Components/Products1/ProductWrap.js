import React, { Component } from 'react'
import { Outlet } from 'react-router'

export default class ProductWrap extends Component {
    render() {
        return (
            <div>
                <br />
                <h4 className="titlereg2">SECCION PRODUCTOS</h4>
                <br />
                <Outlet/>
            </div>
        )
    }
}
