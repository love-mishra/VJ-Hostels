// TodayAnnouncements.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const TodayAnnouncements = () => {
    const [todayAnnouncements, setTodayAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodayAnnouncements = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/student-api/announcements`);
                setTodayAnnouncements(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching today\'s announcements:', error);
                setError('Failed to load today\'s announcements');
                setLoading(false);
            }
        };

        fetchTodayAnnouncements();
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

    return (
        <div className="announcements-list">
            {todayAnnouncements.length > 0 ? (
                todayAnnouncements.map((announcement) => (
                    <div key={announcement._id} className="announcement-card">
                        <div className="announcement-card-body">
                            <h5 className="announcement-card-title">{announcement.title}</h5>
                            <p className="announcement-card-text">{announcement.description}</p>
                            <small className="announcement-card-date">
                                Posted at: {new Date(announcement.createdAt).toLocaleString()}
                            </small>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-announcements">No announcements for today.</p>
            )}
        </div>
    );
};

export default TodayAnnouncements;