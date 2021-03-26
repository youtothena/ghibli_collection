import React, { Component } from 'react';
import Picture from './Picture';
import { Link } from 'react-router-dom';

class Films extends Component {
    render(){
    return (
            <>
                <section>
                    <h1>GHIBLI STUDIO</h1>
                    <Link to={{pathname: '/detail'}}><button>READ MORE</button></Link>
                        <div className="filmBox">
                            {aniImage.map(ani=> <Picture title={ani.title} picture={ani.image} alt="지브리 포스터"/>)}
                        </div>
                    
                </section>
            </>
        );
    }
};


export default Films;

const aniImage = [
    {   
        title: 'Castle in the Sky',
        image: process.env.PUBLIC_URL+"/images/img01.jpg"
    },
    {
        title: 'Grave of the Fireflies',
        image: process.env.PUBLIC_URL+"/images/img02.jpg"
    },
    {
        title: "My Neighbor Totoro",
        image: process.env.PUBLIC_URL+"/images/img03.jpg"
    },
    {
        title: "Kiki's Delivery Service",
        image: process.env.PUBLIC_URL+"/images/img04.jpg"
    },
    {
        title: "Only Yesterday",
        image: process.env.PUBLIC_URL+"/images/img05.jpg"
    },
    {
        title: "Porco Rosso",
        image: process.env.PUBLIC_URL+"/images/img06.jpg"
    },
    {
        title: "Pom Poko",
        image: process.env.PUBLIC_URL+"/images/img07.jpg"
    },
    {
        title: "Whisper of the Heart",
        image: process.env.PUBLIC_URL+"/images/img08.jpg"
    },
    {
        title: "Princess Mononoke",
        image: process.env.PUBLIC_URL+"/images/img09.jpg"
    },
    {
        title: "My Neighbors the Yamadas",
        image: process.env.PUBLIC_URL+"/images/img10.jpg"
    },
    {
        title: "Spirited Away",
        image: process.env.PUBLIC_URL+"/images/img11.jpg"
    },
    {
        title: "The Cat Returns",
        image: process.env.PUBLIC_URL+"/images/img12.jpg"
    },
    {
        title: "Howl's Moving Castle",
        image: process.env.PUBLIC_URL+"/images/img13.jpg"
    },
    {
        title: "Tales from Earthsea",
        image: process.env.PUBLIC_URL+"/images/img14.jpg"
    },
    {
        title:"Ponyo",
        image: process.env.PUBLIC_URL+"/images/img15.jpg"
    },
    {
        title: "Arrietty",
        image: process.env.PUBLIC_URL+"/images/img16.jpg"
    },
    {
        title: "From Up on Poppy Hill",
        image: process.env.PUBLIC_URL+"/images/img17.jpg"
    },
    {
        title: "The Wind Rises",
        image: process.env.PUBLIC_URL+"/images/img18.jpg"
    },
    {
        title: "The Tale of the Princess Kaguya",
        image: process.env.PUBLIC_URL+"/images/img19.jpg"
    },
    {
        title: "When Marnie Was There",
        image: process.env.PUBLIC_URL+"/images/img20.jpg"
    },
    {
        title: "The Red Turtle",
        image: process.env.PUBLIC_URL+"/images/img21.jpg"
    },
]
