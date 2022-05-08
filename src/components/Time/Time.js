import { useState, useEffect } from 'react';

import './Time.css';



function Time() {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  const [date, setDate] = useState(new Date());
  const time = date.toLocaleString("ru-ru", { hour: '2-digit', minute: '2-digit' });
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  useEffect(() => {
    const updateTime = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  return (
    <div className='time'>
      <p> <span className='time__line'>Today: {day}</span>
        <span className='time__line time__line--first'>{month} {date.getDate()}, {time}</span>
      </p>
    </div>
  );

}

export default Time;