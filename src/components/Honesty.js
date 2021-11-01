import React, { useState } from 'react';

const Events = () => {
    return (
        <tbody>
            <tr>
                <td>420</td>
                <td>16h</td>
                <td>Cool</td>
            </tr>
            <tr>
                <td>Digest</td>
                <td>20h</td>
                <td>Sleepy</td>
            </tr>
        </tbody>
    )
}
class Honesty extends React.Component {
    render() {
        return (
            <div className="Honesty">
                <h1>Honesty</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <Events />
                </table>
            </div>
        )
    }
}
export default Honesty