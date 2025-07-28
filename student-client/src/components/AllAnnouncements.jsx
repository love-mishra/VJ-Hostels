// AllAnnouncements.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';

const AllAnnouncements = () => {
    const [allAnnouncements, setAllAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllAnnouncements = async () => {
            try {
                setLoading(true);
                const response = await axios.get('process.env.SERVER_URL/student-api/all-announcements');
                setAllAnnouncements(Array.isArray(response.data) ? response.data : []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching all announcements:', error);
                setError('Failed to load announcements');
                setLoading(false);
            }
        };

        fetchAllAnnouncements();
    }, []);

    if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

    const announcementsContent = (
        <div>
            {Array.isArray(allAnnouncements) && allAnnouncements.length > 0 ? (
                allAnnouncements.map((announcement) => (
                    <div key={announcement._id} className="card mb-3" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <div className="card-body">
                            <h5 className="card-title">{announcement.title}</h5>
                            <p className="card-text">{announcement.description}</p>
                            <small style={{ color: '#6c757d' }}>
                                Posted at: {new Date(announcement.createdAt).toLocaleString()}
                            </small>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ color: '#6c757d', textAlign: 'center' }}>No announcements available.</p>
            )}
        </div>
    );

    return (
        <ErrorBoundary>
            {announcementsContent}
        </ErrorBoundary>
    );
};

export default AllAnnouncements;