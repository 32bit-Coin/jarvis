import React, { useState } from 'react';

/* const Events = (props) => {
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
} */

removeEvent = (index) => {
    const {eventsData} = this.state
  
    this.setState({
      eventsData: eventsData.filter((event, i) => {
        return i !== index
      }),
    })
  }
class Honesty extends React.Component {
    state = {
        eventsData: [
            {
                eventName: '420',
                eventDate: '16h',
                eventDetails: 'Cool'
            }, 
            {
                eventName: 'Digest',
                eventDate: '20h',
                eventDetails: 'Sleepy'
            },
        ]
    }
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
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <Events eventsData={characters}/>
                </table>
            </div>
        )
    }
}
export default Honesty