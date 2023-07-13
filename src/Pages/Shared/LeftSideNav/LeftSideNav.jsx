import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categrouies, setCategrouies] = useState([]);
    useEffect(() => {
        fetch('https://bayannor-kantho-server-main.vercel.app/news-categrouies')
            .then(res => res.json())
            .then(data => setCategrouies(data))
    }, [])
    return (
        <div style={{ position: "sticky", top: 0, }}>
            <h4>All Categrouies</h4>
            {
                categrouies.map(categroy => <p key={categroy.id}>
                    <Link to={`/category/${categroy.id}`} >{categroy.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;