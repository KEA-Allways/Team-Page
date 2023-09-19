import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "../styles/ReactCalendar.css"
import Navbar from './Navbar';

class ReactCalendar extends Component {
    render() {
        return (
          <>
            <Navbar/>
          <div className="App">
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]}
            />
          </div>
          </>
          
        );
    }
}
export default ReactCalendar;