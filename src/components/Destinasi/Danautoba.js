import React,{useState,useEffect,useRef} from  "react";
import {gsap} from "gsap";
import { Container,Row,Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from "../../assets/danautoba.jpg";
import gambar2 from "../../assets/pulausamosir.jpg";
import gambar3 from "../../assets/airterjunsipiso.jpg";
import gambar4 from "../../assets/pemandianairpanas.jpg";

function Danautoba(){
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
            text: 'Pulau Samosir',
            subtext: 'Pulau Samosir adalah sebuah pulau di tengah Danau Toba, Sumatera Utara, Indonesia. Terkenal karena keindahan alamnya, dihiasi oleh pegunungan dan sawah hijau. Pulau ini juga merupakan pusat budaya suku Batak Toba, dengan tradisi dan kebiasaan yang masih dijaga hingga saat ini.'
        },
        {
            image: gambar3,
            text: 'Air Terjun Sipiso-piso',   
            subtext: 'Air Terjun Sipiso-piso adalah air terjun tertinggi di Indonesia, terletak di Sumatera Utara. Dengan ketinggian sekitar 120 meter, airnya jatuh dalam langkah-langkah batu vulkanik, menciptakan pemandangan spektakuler. Air terjun ini terletak di lereng Gunung Sibayak dan mengalir ke Danau Toba.'
        },
        {
            image: gambar4,
            text: 'Pemandian Air Panas Pangururan',
            subtext:'Pemandian Air Panas Pangururan terletak di Sumatera Utara, Indonesia. Tempat ini terkenal dengan sumber air panas alami yang menawarkan relaksasi dan kesehatan bagi pengunjungnya. Diapit oleh hutan tropis, pemandian ini menawarkan suasana alami yang menenangkan serta khasiat alami dari mineral air panasnya'
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
                    <h1> Danau Toba </h1>
                    <img style={{width:"90%",height:"90%",borderRadius:"20px"}}src={gambar1}></img>
                </Col>
                <Col md={7} style={{
                    marginTop:"3rem"
                }}>
                    <p>Danau Toba, yang terletak di Sumatera Utara, merupakan danau vulkanik terbesar di dunia. Danau ini memiliki pulau di tengahnya yang disebut Pulau Samosir. Selain pemandangan alam yang menakjubkan, wisatawan dapat menikmati budaya Batak yang kaya, mengunjungi desa-desa tradisional, dan menikmati kuliner khas daerah.
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

export default Danautoba;