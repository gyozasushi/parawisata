import React,{useState} from  "react";
import { Container,Row,Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from "../../assets/likupang.jpg";
import gambar2 from "../../assets/pulaulihaga.jpg";
import gambar3 from "../../assets/pantaipaal.jpg";
import gambar4 from "../../assets/tamanlaut.jpg";

function Likupang(){
    
        const slides = [
            {
                image: gambar2,
                text: 'Pulau Lihaga',
                subtext: 'Pulau Lihaga adalah sebuah pulau kecil yang terletak di Kepulauan Sangihe, Sulawesi Utara, Indonesia. Pulau ini terkenal karena keindahan alamnya, terutama pantainya yang indah dengan pasir putih dan air laut yang jernih. Lihaga juga menawarkan kesempatan untuk menyelam dan menikmati kehidupan bawah laut yang kaya akan keanekaragaman biota laut.'
            },
            {
                image: gambar3,
                text: 'Pantai Paal',   
                subtext: 'Pantai Paal terletak di Belgia, terkenal dengan jajaran tiang kayu yang tersebar di sepanjang pantainya. Tiang-tiang tersebut digunakan untuk menandai rute jalan yang aman bagi nelayan. Pantai ini menjadi daya tarik wisata dengan pemandangan yang unik dan menarik bagi pengunjung yang ingin menikmati suasana pantai yang berbeda'
            },
            {
                image: gambar4,
                text: 'Taman Laut Likupang',
                subtext:'Taman Laut Likupang terletak di Sulawesi Utara, Indonesia. Dikenal karena keindahan terumbu karangnya, taman laut ini menawarkan keanekaragaman hayati laut yang luar biasa. Wisatawan dapat menikmati aktivitas menyelam, snorkeling, dan melihat spesies laut yang unik di lingkungan yang terlindungi secara konservasi'
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
                    <h1>Likupang</h1>
                    <img style={{width:"90%",height:"90%",borderRadius:"20px"}}src={gambar1}></img>
                </Col>
                <Col md={7} style={{
                    marginTop:"3rem"
                }}>
                    <p>Likupang di Sulawesi Utara adalah surga tersembunyi yang mulai populer di kalangan wisatawan. Dengan pantai-pantai berpasir putih dan kehidupan bawah laut yang kaya, Likupang menjadi destinasi favorit bagi mereka yang mencari ketenangan dan keindahan alam.
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

export default Likupang;