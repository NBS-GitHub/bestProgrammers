import React from 'react';
import './Card.css';

const Card = props => {
    const { user, place } = props;
    const firstName = user.name.first.charAt(0).toUpperCase() + user.name.first.substr(1);
    const lastName = user.name.last.charAt(0).toUpperCase() + user.name.last.substr(1);

    return (

        <div className={`card card--${place}`}>
            <header className="card__header">
                <h2 className="card__title">{`${place} place`}</h2>
                <div className="card__image-wrapper">
                    <img className="card__image" src={user.picture.large} alt={`User ${firstName} ${lastName}`} />
                </div>
            </header>
            <div className="card__body">
                <h2 className="card__name">{`${firstName} ${lastName}`}</h2>
                <div className="card__website">
                    <div>
                        Email:
                    </div>
                    <div>
                        {user.email}
                    </div>
                </div>
                <div className="card__phone">
                    <div>
                        Phone:
                    </div>
                    <div>
                        {user.phone}
                    </div>
                </div>
            </div>
            <footer className="card__footer">sponsored by frontEpic</footer>
        </div>
    );
}

export default Card;