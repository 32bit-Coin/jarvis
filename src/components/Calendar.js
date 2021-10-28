import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function MyCal(){
    const [value, onChange] = useState(new Date());
    return (
        <div className="jarvis-calendar">
        <Calendar
            onChange={onChange}
            value={value}
        />
    </div>
    )
}