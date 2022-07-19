import React, { Component } from 'react'
import { Outlet } from 'react-router'
import Footer from '../../templates/Footer'

export default class ProductWrap extends Component {
    render() {
        return (
            <div>
                <br />
                <h4 className="titlereg2">SECCION VENTAS</h4>
                <br />
                <Outlet/>
                <Footer />
            </div>
        )
    }
}
