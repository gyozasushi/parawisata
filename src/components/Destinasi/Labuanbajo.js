import React,{useState,useEffect,useRef} from  "react";
import {gsap} from "gsap";
import { Container,Row,Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from "../../assets/labuanbajo.jpg";
import gambar2 from "../../assets/pulaukomodo.jpg";
import gambar3 from "../../assets/pulaupadar.jpg";
import gambar4 from "../../assets/pinkbeach.jpg";

function Labuanbajo(){
    const judulRef = useRef(null);

    useEffect(
        ()=>{
            gsap.fromTo(
                judulRef.current,
                { x: '-100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
            )
        }
    );
        const slides = [
            {
                image: gambar2,
                text: 'Pulau Komodo',
                subtext: 'Pulau Komodo adalah bagian dari Taman Nasional Komodo di Indonesia, terkenal karena habitatnya yang kaya akan biodiversitas, termasuk komodo, kadal terbesar di dunia. Pulau ini juga menawarkan pemandangan alam yang indah, snorkeling yang menakjubkan, dan trekking untuk melihat komodo dalam habitat aslinya.'
            },
            {
                image: gambar3,
                text: 'Pulau Padar',   
                subtext: 'Pulau Padar adalah sebuah pulau kecil yang terletak di Taman Nasional Komodo, Indonesia. Pulau ini terkenal karena pemandangan panorama alamnya yang memukau, terdiri dari bukit-bukit yang menjulang tinggi, pantai-pantai berpasir putih, dan air laut yang jernih. Pulau Padar menjadi tujuan populer untuk trekking dan wisata alam'
            },
            {
                image: gambar4,
                text: 'Pink Beach',
                subtext:'Pink Beach atau Pantai Pink, terkenal karena pasirnya yang berwarna pink yang langka. Warna pink disebabkan oleh pecahan karang merah yang dicampur dengan pasir putih. Pantai ini terletak di berbagai lokasi di seluruh dunia, termasuk Pulau Komodo di Indonesia, di mana keindahannya menarik banyak wisatawan untuk menikmati pemandangan yang unik.'
            }
            
        ];
        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            swipe: true, // Tambahkan properti swipe agar pengguna bisa menggeser slider
            autoplay: true,
            autoplaySpeed: 3000 
        };
    return (
        <Container fluid className="desti-boro">
            <Container className="boro-content" ref={judulRef} >
            <Row >
                <Col md={5} className="borobudur-content" >
                    <h1> Labuan Bajo</h1>
                    <img style={{width:"90%",height:"90%",borderRadius:"20px"}}src={gambar1}></img>
                </Col>
                <Col md={7} style={{
                    marginTop:"3rem"
                }}>
                    <p>Labuan Bajo di Nusa Tenggara Timur adalah gerbang menuju Taman Nasional Komodo, rumah bagi komodo, kadal terbesar di dunia. Selain itu, Labuan Bajo juga menawarkan keindahan bawah laut yang luar biasa, menjadikannya destinasi ideal bagi para penyelam.
                    </p>
                </Col>
            </Row>
            </Container>
            <Container className="atraksi-utama">
                <Container className="slideratraksi">
                
                <h2>Atraksi Utama</h2>
                <Row>
                    <Col md={5} className="col-slider">
                        <Slider {...settings}>
                            {slides.map((slide, idx) => (
                                <div key={idx} style={{ position: 'relative',gap:"5px"}}>
                                    <img
                                        src={slide.image}
                                        alt={`Slide ${idx + 1}`}
                                        style={{ width: "100%", height: "100%", borderRadius: "20px", margin: 'auto', display: 'block' }}
                                    />
                                    <p style={{
                                        fontSize:"1.2rem",
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        marginTop:'20px',
                                        padding: '10px',
                                        borderRadius: '10px',
                                        fontWeight:'bold'
                                    }}>{slide.text}<div
                                    style={{
                                        fontSize:"1rem",
                                        fontWeight:'300'
                                    }}>{slide.subtext}</div></p>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
                </Container>
            </Container>
            
            
        </Container>
     
    );
}

export default Labuanbajo;