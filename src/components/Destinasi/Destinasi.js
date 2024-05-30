import React,{useEffect,useRef}from "react";
import {gsap} from "gsap";
import {Container} from "react-bootstrap";
import Borobudur from "../Destinasi/Borobudur";
import Danautoba from "../Destinasi/Danautoba";
import Labuanbajo from "../Destinasi/Labuanbajo";
import Mandalika from "../Destinasi/Mandalika";
import Likupang from "../Destinasi/Likupang";
function Destination(){
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
   return(
     <section id="borobudur">
        <Container className="borobudur-section" >
            <Borobudur />
        </Container>
        <Container className="borobudur-section">
            <Danautoba/>
        </Container>
        <Container className="borobudur-section">
            <Labuanbajo/>
        </Container>
        <Container className="borobudur-section">
            <Mandalika/>
        </Container>
        <Container className="borobudur-section">
          <Likupang/>
        </Container>
     </section>
   );
}

export default Destination;