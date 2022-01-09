import React from 'react'
import CenterComponents from './CenterComponents/CenterComponents'
import LeftSideNav from './LeftSideNav/LeftSideNav'

function ALLComponets() {
    return (
              <div id="layoutSidenav">
                <LeftSideNav/>
                <CenterComponents/>
            </div>
    )
}

export default ALLComponets
