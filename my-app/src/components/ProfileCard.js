import React from 'react';
import './ProfileCard.css';

function ProfileCard({image, name, jobTitle, bio}){
    return(
        <div className="profile-card">
            <img src = {image} alt = {`${name}'s profile`} />
            <h2>{name}</h2>
            <h3>{jobTitle}</h3>
            <p>{bio}</p>
        </div>
    );
}

export default ProfileCard;