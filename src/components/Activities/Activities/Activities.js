import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <h2 className="heading-color">ADVENTURE & ACTIVITY</h2>
            <div className="container mb-5">
                <div className="row row-cols-2 row-cols-md-6 g-4">
                    {
                        activities.map(activity => <Activity
                            key={activity.key}
                            activity={activity}
                        ></Activity>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Activities;