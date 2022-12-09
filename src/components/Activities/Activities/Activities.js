import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';
import extraimg from '../../../images/extra/extra.jpg';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    // fetch('https://arcane-tundra-73847.herokuapp.com/activities')
    fetch('https://traveler-server-site.vercel.app/activities')
      // fetch('activity.json')
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div>
      <h2 className="heading-color">ADVENTURE & ACTIVITY</h2>
      <div className="container mb-5 " data-aos="flip-down">
        <div className="row row-cols-2 row-cols-md-6 g-4 my-2">
          {activities.map((activity) => (
            <Activity key={activity._id} activity={activity}></Activity>
          ))}
        </div>
      </div>
      <div>
        <img className="img-fluid" src={extraimg} alt="" />
      </div>
    </div>
  );
};

export default Activities;
