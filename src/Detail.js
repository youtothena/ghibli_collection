import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detail.css';

function Detail(){
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchUsers = async() => {
            try {
                setUsers(null);
                setError(null);
                setLoading(true);
                const response = await axios.get('https://ghibliapi.herokuapp.com/films');
                setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    },[]);

    if (loading) return <div>로딩중 입니다.</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return null;


    return <section className="box">
            {users.map(user => <div  className="detailBox" key={user.id}>
                <h2>{user.title}</h2>
                <h4>{user.original_title}</h4>
                <p className="romanised">{user.original_title_romanised}</p>
                <h5>{user.director}</h5>
                <p className="date">{user.release_date}</p>
                <p className="score">rating : {user.rt_score} / 100</p>
                <p className="descrip">{user.description}</p>
            </div>)}
     </section>
}
export default Detail;

