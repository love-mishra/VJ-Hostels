import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import ErrorBoundary from './ErrorBoundary';

const OutpassList = () => {
    const { user } = useUser();
    const [outpasses, setOutpasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(user)

    useEffect(() => {
        const fetchOutpasses = async () => {
            if (!user) {
                setError('User not found. Please log in.');
                setLoading(false);
                return;
            }
            try {
                if (!user?.rollNumber) {
                    throw new Error('User roll number is required');
                }
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/student-api/all-outpasses/${user.rollNumber}`);
                setOutpasses(Array.isArray(response.data.studentOutpasses) ? response.data.studentOutpasses : []);
            } catch (err) {
                console.error('Error fetching outpasses:', err);
                setError(err.response?.data?.message || err.message || 'Failed to fetch outpasses');
            } finally {
                setLoading(false);
            }
        };

        fetchOutpasses();
    }, [user.rollNumber]);

    if (loading) return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading outpasses...</p>
        </div>
    );
    if (error) return (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffebee', borderRadius: '8px' }}>
            <p style={{ color: '#d32f2f' }}>{error}</p>
        </div>
    );
    if (!user) return (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
            <p style={{ color: '#e65100' }}>Please log in to view your outpasses</p>
        </div>
    );
    if (outpasses.length === 0) return (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <p style={{ color: '#666' }}>No outpass requests found.</p>
        </div>
    );

    return (
        <ErrorBoundary>
            <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>My Outpass Requests</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#333', color: '#fff' }}>
                        <th style={styles.th}>Out Time</th>
                        <th style={styles.th}>In Time</th>
                        <th style={styles.th}>Reason</th>
                        <th style={styles.th}>Type</th>
                        <th style={styles.th}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {outpasses.map((outpass) => (
                        <tr key={outpass._id} style={styles.tr}>
                            <td style={styles.td}>{new Date(outpass.outTime).toLocaleString()}</td>
                            <td style={styles.td}>{new Date(outpass.inTime).toLocaleString()}</td>
                            <td style={styles.td}>{outpass.reason}</td>
                            <td style={styles.td}>{outpass.type}</td>
                            <td style={{ ...styles.td, color: getStatusColor(outpass.status) }}>
                                {outpass.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </ErrorBoundary>
    );
};

const getStatusColor = (status) => {
    switch (status) {
        case 'pending': return '#FFA500';
        case 'accepted': return '#4CAF50';
        case 'rejected': return '#FF0000';
        default: return '#000';
    }
};

const styles = {
    th: { padding: '12px', textAlign: 'left', borderBottom: '2px solid #555' },
    td: { padding: '10px', borderBottom: '1px solid #ccc' },
    tr: { backgroundColor: '#f9f9f9' },
};

export default OutpassList;
