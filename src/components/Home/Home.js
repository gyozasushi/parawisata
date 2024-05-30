import React,{useEffect,useRef} from "react";
import {Container,Row,Col} from "react-bootstrap";
import {gsap} from "gsap";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { FiArrowRightCircle } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gambar1 from "../../assets/danautoba.jpg";
import gambar2 from "../../assets/candiborobudur.jpg";
import gambar3 from "../../assets/labuanbajo.jpg";
import gambar4 from "../../assets/mandalika.jpg";
import gambar5 from "../../assets/likupang.jpg";

function Home(){
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
    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/destination');
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true, // Tambahkan properti swipe agar pengguna bisa menggeser slider
        autoplay: true, // Aktifkan autoplay
        autoplaySpeed: 3000 
      };
    return(
        
            <Container fluid className="home-section">
                <div className="bg"></div>
                <Container className="home-content" ref={judulRef}>            
                <Row>
                <Col md={5} className="slider-container">
                <Slider {...settings}>
                <div>
                    <img src={gambar1} alt="gambar1" />
                </div>
                <div>
                    <img src={gambar2} alt="gambar2" />
                </div>
                <div>
                    <img src={gambar3} alt="gambar2" />
                </div>
                <div>
                    <img src={gambar4} alt="gambar2" />
                </div>
                <div>
                    <img src={gambar5} alt="gambar2" />
                </div>
                </Slider>
                </Col>
                <Col md={7} style={{color:"#fff"}} className="judultitle" ><h1>Yuk Mengenal 5 Destinasi Prioritas Indonesia</h1>
                <Button 
                    style={{fontSize:"1.2rem"}} variant="dark" onClick={ handleNavigation}>Let see <FiArrowRightCircle /></Button>
                    </Col>
                </Row>
                
               
                </Container>
            </Container>
    )
}

export default Home;