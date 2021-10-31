import React, { useState } from 'react';

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th>Events</th>
                <th>Events</th>
                <th>Events</th>
                <th>Events</th>
                <th>Events</th>
                <th>Events</th>
                <th>Events</th>
            </tr>
        </tbody>
  }

class Tania extends React.Component {
    render() {
        return (
            <div className="Tania">
                <h1>Display</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wedneday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <th>Date</th>
                            <th>Date</th>
                            <th>Date</th>
                            <th>Date</th>
                            <th>Date</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Events</th>
                            <th>Events</th>
                            <th>Events</th>
                            <th>Events</th>
                            <th>Events</th>
                            <th>Events</th>
                            <th>Events</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Tania