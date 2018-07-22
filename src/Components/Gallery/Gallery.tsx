import * as React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';

interface IGalleryProps {
    language: any;
}

const Gallery = (props: IGalleryProps) => {
    const lang = props.language.GALLERY.LIST;
    return (<div className="gallery-container">
        {lang.map((item: any, index: number) => {
            return (<GalleryItem key={index} language={props.language} title={item.TITLE}/>)
        })}
    </div>)
}

export default Gallery;