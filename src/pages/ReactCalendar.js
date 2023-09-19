import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment/moment';
import "../styles/ReactCalendar.css"
import Navbar from './Navbar';

class ReactCalendar extends Component {
    render() {
        const events = [
          {
              title: '페이지 제작',
              start: moment('2023-09-11').format('YYYY-MM-DD'),
              end: moment('2023-09-19').format('YYYY-MM-DD'),
              color:'blue'
          },
          {
            title: '요구사항 분석 ',
            start: moment('2023-09-20').format('YYYY-MM-DD'),
            end: moment('2023-10-4').format('YYYY-MM-DD'),
            color:'green'
          }
      ];
      
        return (
          <>
            <Navbar/>
          <div className="App">
          <FullCalendar
                        defaultView="dayGridMonth"
                        plugins={[dayGridPlugin]}
                        events={events}
                    />
          </div>
          </>
          
        );
    }
}
export default ReactCalendar;