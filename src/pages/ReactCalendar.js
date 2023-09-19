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
              events={[
                { title: '자료조사', date: '2023-09-11' },
                { title: '자료조사', date: '2023-09-12' }
            ]}
            />
          </div>
          </>
          
        );
    }
}
export default ReactCalendar;