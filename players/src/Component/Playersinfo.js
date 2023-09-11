import React from 'react';
import './Playersinfo.css';

function Playerinfo() {
    const players = [
        {
            fullname: 'Lionel Andrés Messi',
            born: '24 June 1987',
            firstteam: 'FC Barcelona',
            lasttime: 'Inter Miami',
            image: '/images/messi.png',
            goals: 674,
        },
        {
            fullname: 'Cristiano Ronaldo dos Santos Aveiro',
            born: '5 February 1985',
            firstteam: 'Sporting CP',
            lasttime: 'El Nasr',
            image: '/images/c.ronaldo.webp',
            goals: 805,
        },
        {
            fullname: 'Ronaldo Luís Nazário de Lima',
            born: '18 September 1976',
            firstteam: 'Cruzeiro',
            lasttime: 'Corinthians',
            image: '/images/n.ronaldo.png',
            goals: 414,
        },
        {
            fullname: 'Edson Arantes do Nascimento (Pelé)',
            born: '23 October 1940',
            firstteam: 'Santos FC',
            lasttime: 'New York Cosmos',
            image: '/images/pele.png',
            goals: 1283,
        },
    ];

    return (
        <div className="Playerinfo">
            <h1>List of Players</h1>
            <ul className="players-list">
                {players.map((player, index) => (
                    <li key={index} className="player-item">
                        <img
                            src={player.image}
                            alt={`${player.fullname} Image`}
                            className="player-image"
                        />
                        <div className="player-details">
                            <div className="player-name">{player.fullname}</div>
                            <div className="player-birth"><strong>Born:</strong> {player.born}</div>
                            <div className="player-teams">
                                <strong>First Team:</strong> {player.firstteam}
                                <br />
                                <strong>Last Team:</strong> {player.lasttime}
                            </div>
                            <div className="player-goals"><strong>Total Goals:</strong> {player.goals}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playerinfo;
