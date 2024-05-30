import React,{useState} from  "react";
import { Container,Row,Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from "../../assets/mandalika.jpg";
import gambar2 from "../../assets/pantaikutamandalika.jpg";
import gambar3 from "../../assets/pantaitanjungaan.jpg";
import gambar4 from "../../assets/sirkuitmandalika.jpg";

function Mandalika(){
    
        const slides = [
            {
                image: gambar2,
                text: 'Pantai Kuta Mandalika',
                subtext: 'Pantai Kuta, terletak di pulau Lombok, adalah tujuan wisata yang terkenal dengan pasir putihnya yang luas, ombak yang cocok untuk berselancar, dan pemandangan matahari terbenam yang memukau. Pantai Mandalika, di Lombok juga, menjadi magnet bagi penggemar balap motor dan wisatawan yang mencari keindahan pantai dan budaya lokal yang kaya.'
            },
            {
                image: gambar3,
                text: 'Pantai Tanjung Aan',   
                subtext: 'Tanjung Aan adalah pantai indah di Lombok, Indonesia, terkenal dengan pasir putihnya yang lembut dan air laut yang jernih. Pantai ini menawarkan pemandangan spektakuler, ombak yang cocok untuk berselancar, dan suasana yang tenang untuk bersantai. Tanjung Aan menjadi destinasi populer bagi wisatawan yang mencari keindahan alam dan ketenangan.'
            },
            {
                image: gambar4,
                text: 'Sirkuit MotoGP Mandalika',
                subtext:'Sirkuit MotoGP Mandalika adalah lintasan balap 4,3 km di Lombok, Indonesia. Dikenal karena treknya yang menantang dengan 17 tikungan, termasuk beberapa yang berliku tajam. Dirancang untuk kecepatan tinggi, sirkuit ini menawarkan tantangan teknis bagi pembalap dengan kombinasi trek lurus dan tikungan tajam. Mandalika menjadi tuan rumah balapan MotoGP pertamanya pada 2023'
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
            <Container className="boro-content" >
            <Row >
                <Col md={5} className="borobudur-content" >
                    <h1> Mandalika</h1>
                    <img style={{width:"90%",height:"90%",borderRadius:"20px"}}src={gambar1}></img>
                </Col>
                <Col md={7} style={{
                    marginTop:"3rem"
                }}>
                    <p>Mandalika, terletak di Lombok, Nusa Tenggara Barat, terkenal dengan pantainya yang indah dan ombak yang cocok untuk berselancar. Mandalika juga tengah dikembangkan sebagai kawasan wisata terpadu dengan fasilitas modern.
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

export default Mandalika;