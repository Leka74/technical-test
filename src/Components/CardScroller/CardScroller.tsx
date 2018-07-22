import * as React from 'react';
import Card from '../Card/Card';
import './CardScroller.css';

let reference: HTMLDivElement | null;
let leftFadeReference: HTMLDivElement | null;
let rightFadeReference: HTMLDivElement | null;

// Mouse movement X position
let mx = 0;
// Starting mouse X position
let sx = 0;
let dragging = false;

const handleMouseDown = (e: any) => {
    if (reference instanceof HTMLDivElement) {
        dragging = true;
        sx = reference.scrollLeft;
        mx = e.pageX - reference.offsetLeft;
        reference.style.cursor = "move";
    }
}

const handleMouseUp = (e: any) => {
    dragging = false;
    if (reference instanceof HTMLDivElement) {
        reference.style.cursor = "default";
        // Hide the left fade div if the scroll is under 5 (almost no scrolling)
        if (reference.scrollLeft < 5 && leftFadeReference instanceof HTMLDivElement) {
            leftFadeReference.style.visibility = "hidden";
        }
        // Hide the right fade div if the scroll is under 5 (almost no scrolling)
        const maxWidth = reference.scrollWidth - reference.offsetWidth;
        const distanceFromRight = maxWidth - reference.scrollLeft;
        if (distanceFromRight < 5 && rightFadeReference instanceof HTMLDivElement) {
            rightFadeReference.style.visibility = "hidden";
        }
    }
}

const handleMouseMove = (e: any) => {
    if (!dragging) {return}
    if (reference instanceof HTMLDivElement) {
        const mx2 = e.pageX - reference.offsetLeft;
        if (mx) {
            reference.scrollLeft =  sx + mx - mx2;
            // Fade the left 'smooth-fade' depending on how far the user has scrolled
            if (leftFadeReference instanceof HTMLDivElement) {
                if (reference.scrollLeft > 5) {
                    // Start showing the left fade because we have enough space towards the beginning, raise opacity slowly as well
                    leftFadeReference.style.opacity = (reference.scrollLeft/150).toString();
                    leftFadeReference.style.visibility = "visible";
                } else {
                    // Hide the left fade because we're at the beginning
                    leftFadeReference.style.visibility = "hidden";
                }
            }

            // Check if the user has reached the right end
            if (rightFadeReference instanceof HTMLDivElement) {
                const maxWidth = reference.scrollWidth - reference.offsetWidth;
                const distanceFromRight = maxWidth - reference.scrollLeft;
                if (distanceFromRight < 5) {
                    // Hide the right fade because we've reached almost the end
                    rightFadeReference.style.visibility = "hidden";
                } else {
                    // Start showing the right fade because we have enough space to scroll towards the end, raise opacity slowly as well
                    rightFadeReference.style.visibility = "visible";
                    rightFadeReference.style.opacity = ((distanceFromRight)/150).toString();
                }
            }
        }
    }
}

interface ICardScrollerProps {
    language: any;
}

const CardScroller = (props: ICardScrollerProps) => {
    const lang = props.language.CARDS.LIST;
    return (<div className="cont">
        <div className="smooth-fade left" ref={(ref: any) => {leftFadeReference = ref;}}/>
        <div className="scrolling-wrapper" onMouseLeave={handleMouseUp} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} ref={(ref: any) => {reference = ref;}}>
            {lang.map((item: any, index: number) => {
                return (<Card key={index} title={item.TITLE} desc={item.DESC} language={props.language}/>)
            })}
        </div>
        <div className="smooth-fade right" ref={(ref: any) => {rightFadeReference = ref;}}/>
    </div>)
}

export default CardScroller;