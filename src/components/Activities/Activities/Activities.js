import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('/activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div>
            <h2>ADVENTURE & ACTIVITY</h2>
            <div className="container">
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