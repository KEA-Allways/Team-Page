import React from 'react';
import { motion } from 'framer-motion';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment/moment';
import "../styles/ReactCalendar.css"
import Navbar from './Navbar';

const ReactCalendar = () => {
  const events = [
    {
      title: '페이지 제작',
      start: moment('2023-09-11').format('YYYY-MM-DD'),
      end: moment('2023-09-19').format('YYYY-MM-DD'),
      color: 'blue'
    },
    {
      title: '요구사항 분석 ',
      start: moment('2023-09-20').format('YYYY-MM-DD'),
      end: moment('2023-10-4').format('YYYY-MM-DD'),
      color: 'green'
    }
  ];

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <>
      <Navbar />
      <div className="App" style={{ width: '45%', height: '45%', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeAnimation}
        >
          <FullCalendar
            plugins={[dayGridPlugin]}
            events={events}
          />
        </motion.div>
      </div>
    </>
  );
};

export default ReactCalendar;
