import React from 'react';
import './Coursework.css'
import Table from 'react-bootstrap/Table'

function Coursework() {

  return (
  	<div className="Coursework" id="coursework">
        <h1> Relevant Coursework </h1>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th> USC Courses </th>
                    <th> Description </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ITP-435</td>
                    <td>Professional C++</td>
                </tr>
                <tr>
                    <td>ITP-325</td>
                    <td>Ethical Hacking and System Defense</td>
                </tr>
                 <tr>
                    <td>CSCI-353</td>
                    <td>Introduction to Internetworking</td>
                </tr>
                <tr>
                    <td>CSCI-201 & CSCI 310</td>
                    <td>Principles of Software Dev & Software Engineering </td>
                </tr>
                <tr>
                    <td>CSCI-104</td>
                    <td>Data Structures & OOD </td>
                </tr>
                <tr>
                    <td>CSCI-170 & CS-270</td>
                    <td>Discrete Math & Algorithms </td>
                </tr>
                <tr>
                    <td>CSCI-360</td>
                    <td>Introduction to A.I</td>
                </tr>
                <tr>
                    <td>CSCI-350</td>
                    <td>Introduction to Operating Systems</td>
                </tr>
                <tr>
                    <td>CSCI-356</td>
                    <td>Introduction to Computer Systems</td>
                </tr>
                <tr>
                    <td>EE-109</td>
                    <td>Introduction to Embedded Systems </td>
                </tr>

            </tbody>
        </Table>
  	     
    </div>
  );
}

export default Coursework;
