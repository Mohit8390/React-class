import React from 'react'
import Charts from './Charts/Charts'
import DataTables from './DataTables/DataTables'
import Footer from './Footer/Footer'
import PrimaryCards from './PrimaryCards/PrimaryCards'

function CenterComponents() {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Dashboard</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <PrimaryCards />
                    <Charts />
                    <DataTables />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default CenterComponents
