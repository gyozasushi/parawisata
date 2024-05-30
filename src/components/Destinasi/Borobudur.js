import React,{useState,useEffect,useRef} from  "react";
import {gsap} from "gsap";
import { Container,Row,Col } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from "../../assets/candiborobudur.jpg";
import gambar2 from "../../assets/lampion.jpg";
import gambar3 from "../../assets/desawisata wanurejo.jpg";
import gambar4 from "../../assets/bukitrhema.jpg";

function Borobudur(){
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
                text: 'Lampion Candi Borobudur',
                subtext: 'Festival Lampion Borobudur merupakan puncak perayaan Waisak yang bisa diikuti oleh masyarakat umum dengan tiket terbatas. Acara ini dinantikan karena bisa melihat pemandangan langit Borobudur dipenuhi oleh lampion.'
            },
            {
                image: gambar3,
                text: 'Desa Wisata Wanurejo',   
                subtext: 'Desa Wisata Wanurejo terletak di sebelah tenggara kompleks wisata Candi Borobudur. Untuk menuju ke tempat ini, pengunjung harus menempuh jarak sekitar 2 km. Desa wisata Wanurejo merupakan salah satu desa wisata yang menjadi pintu gerbang masuk ke Kawasan Borobudur.'
            },
            {
                image: gambar4,
                text: 'Bukit Rhema',
                subtext:'Disebut Bukit Rhema Gereja Ayam karena desain bangunannya mirip seekor ayam dengan ekor dan kepalanya. Kendati begitu, menurut penduduk setempat, bangunan ini dibuat dengan meniru bentuk seekor burung merpati. Menurut catatan sejarah, gereja ini dibangun oleh Daniel Alamsjah.'
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
                    <h1> Candi Borobudur</h1>
                    <img style={{width:"90%",height:"90%",borderRadius:"20px"}}src={gambar1}></img>
                </Col>
                <Col md={7} style={{
                    marginTop:"3rem"
                }}>
                    <p>Candi Borobudur di jawa tengah adalah candi Buddha terbesar di dunia dan merupakan situs warisan
                        dunia UNESCO.Selain keindahan arsitektur candi,wisatawan juga dapat menikmati pemandangan matahari terbit yang memukau dari puncak candi
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

export default Borobudur;