import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {

    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'bottom bottom',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    })

    return () => {
      ScrollTrigger.kill();
    };
  }, [])

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>

        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="Qu'est ce que NFBs ?" >
            NFBs est une abréviation de NFunnyBulls
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="Pourquoi Metaferme ?" >
            Casse pas les couilles

          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="Qu'est ce que la révélation et comment y parvenir" >
            bzezene il est temps de t'acheter un beschrelle
          </Accordion>
        </Box>
        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="Quand et comment utiliser mes NFBs ?" >
            Demande à ta mère
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="Qu'est ce que le staking?" >
            c'est une sorte de stak haché
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="Pour quand la V2" >
            Laisse moi le temps de finir la une stp
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq