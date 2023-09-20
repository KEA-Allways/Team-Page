import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment/moment';
import "../styles/ReactCalendar.css"
import "../styles/styles.css"
import Navbar from './Navbar';

class ReactCalendar extends Component {
     
    render() {
         
        const events = [
          {
              title: '페이지 제작',
              start: moment('2023-09-11').format('YYYY-MM-DD'),
              end: moment('2023-09-19').format('YYYY-MM-DD'),
              color:'#4388ff'
          },
          {
            title: '요구사항 분석 ',
            start: moment('2023-09-20').format('YYYY-MM-DD'),
            end: moment('2023-10-4').format('YYYY-MM-DD'),
            color:'#43C0FF'
          }
      ];
      
        return (
          <>
            <Navbar/>
            <header className="headerCal">
              <h1>
                  Calendar
              </h1>

            </header>
              <div className="App" style={{width:'50%', height:'50%',margin:'0 auto'}}>
                <FullCalendar
                    
                    plugins={[dayGridPlugin]}
                    events={events}
                  />
              </div>

          </>
          
        );
    }
}
export default ReactCalendar;