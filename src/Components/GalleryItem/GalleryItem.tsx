import * as React from 'react';
import Button from '../Button/Button';
import './GalleryItem.css';

interface IGalleryItemProps {
    title: string;
    language: any;
}

const GalleryItem = (props: IGalleryItemProps) => {
    const lang = props.language.GALLERY;
    return (<div className="gallery-item">
        <div className="box">
            <div className="box-title" dangerouslySetInnerHTML={{__html: props.title}}/>
        </div>
        <div className="gallery-button">
            <Button>{lang.BUTTON}</Button>
        </div>
    </div>)
}

export default GalleryItem;