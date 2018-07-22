import * as React from 'react';
import Button from '../Button/Button';
import './Card.css';
import star from './star.svg';

interface ICardProps {
    title: string;
    desc: string;
    language: any;
}

const Card = (props: ICardProps) => (
    <div className="card">
        <div className="card-content">
            <img src={star} id="star-logo" alt="logo" width={85}/>
            <div className="card-title">{props.title}</div>
            <div className="card-desc">{props.desc}</div>
            {/* <div className="card-video">asd</div> */}
            <iframe className="card-video" id="video"  src="//www.youtube.com/embed/Wc5qmQqA4jU?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullScreen={true}/>
            <div className="card-button">
                <Button>{props.language.CARDS.BUTTON}</Button>
            </div>
        </div>
    </div>
)

export default Card;

// width="350" height="200"