import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl, FormGroup, Col, Row } from 'react-bootstrap';
import './PrimaryCards.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


function PrimaryCards() {
    const [show, setShow] = useState(false);
    const [noOfRows, setNoOfRows] = useState(1);
    const [date, setDate] = useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const items = [
        {
            id: 0,
            name: 'Mohit'
        },
        {
            id: 1,
            name: 'Manish'
        },
        {
            id: 2,
            name: 'Manoj'
        },
        {
            id: 3,
            name: 'Mayuresh'
        },
        {
            id: 4,
            name: 'Mayur'
        },
        {
            id: 5,
            name: 'Minakshi'
        },
        {
            id: 6,
            name: 'Mukesh'
        },
        {
            id: 7,
            name: 'Mayank'
        }
    ]
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };


    return (
        <div class="row">
            <div class="col-xl-3 col-md-6">
                <div class="card bg-primary text-white mb-4" >
                    <div class="card-body" >Primary Card</div>
                    <div class="card-footer d-flex align-items-center justify-content-between" variant="primary" onClick={handleShow}>
                        <a class="small text-white stretched-link" href="#" >View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6">
                <div class="card bg-warning text-white mb-4">
                    <div class="card-body">Warning Card</div>
                    <div class="card-footer d-flex align-items-center justify-content-between" variant="primary" onClick={handleShow}>
                        <a class="small text-white stretched-link" href="#">View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6">
                <div class="card bg-success text-white mb-4">
                    <div class="card-body">Success Card</div>
                    <div class="card-footer d-flex align-items-center justify-content-between" variant="primary" onClick={handleShow}>
                        <a class="small text-white stretched-link" href="#">View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6">
                <div class="card bg-danger text-white mb-4">
                    <div class="card-body">Danger Card</div>
                    <div class="card-footer d-flex align-items-center justify-content-between" variant="primary" onClick={handleShow}>
                        <a class="small text-white stretched-link" href="#">View Details</a>
                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                    </div>
                </div>
            </div>


            <Modal dialogClassName="my-modal" show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title>ADD NEW VOUCHER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Row className="md-12">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Voucher Type</Form.Label>
                                <div className="form-group">
                                    <select className="form-control" name="payment" >
                                        <option value="select">Payment</option>
                                        <option value="select">Payment</option>
                                        <option value="select">Cash</option>
                                        <option value="select">NEFT</option>
                                    </select>
                                </div>

                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Voucher Date</Form.Label>
                                <DatePicker
                                    timeFormat={false}
                                    isValidDate={disablePastDt}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Voucher Number</Form.Label>
                                <Form.Control type="text" placeholder="Type here" />
                            </Form.Group>
                        </Row>
                        {[...Array(noOfRows)].map((elementInArray, index) => {
                            return (
                                <>
                                    <Row className="md-12 mt-4">
                                        <div style={{ marginTop: "-5px", width: "278px" }}>
                                            <Form.Label>Account Name</Form.Label>
                                            <ReactSearchAutocomplete items={items} autoFocus />
                                        </div>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Debit</Form.Label>
                                            <Form.Control type="text" placeholder="amount" className="my-input" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword" >
                                            <Form.Label>Credit</Form.Label>
                                            <Form.Control type="text" placeholder="0" className="my-form" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword" style={{ marginTop: "30px" }} >
                                            <Button type="button" class="close" onClick={() => setNoOfRows(noOfRows - 1)}>
                                                <span aria-hidden="true">&times;</span>
                                            </Button>
                                        </Form.Group>
                                    </Row>

                                    <Row className="md-12 mt-4">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Narration</Form.Label>
                                            <Form.Control type="email" placeholder="Type here" />
                                        </Form.Group>
                                    </Row>
                                    <hr />
                                </>
                            );
                        })}
                    </Form>

                    <Button variant="outline-info" className="mt-2" onClick={() => setNoOfRows(noOfRows + 1)}>+ Add More</Button>
                    <label className="my-debit">Dr.10000</label>
                    <label className="my-credit">Dr.10000</label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PrimaryCards

