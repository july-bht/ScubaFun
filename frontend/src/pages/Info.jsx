import Line from "../components/Line";
import React, { useState } from 'react';
import data from '../assets/data.json';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 2rem;
  }
`;

const Info = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <section className="pt-8">
    <div className='sm:text-center'>
    <h2 className='sm:text-3xl sm:font-bold'>Praktisk Informasjon</h2>
    < Line />
  </div>
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {data.info.map((item, index) => {
            return (
              <section className="grid md:grid-cols-2">
              <div className="pb-5">
                <Wrap onClick={() => toggle(index)} key={index}>
                  <p className="text-2xl text-white">{item.title}</p>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <h4 className="text-white">{item.text}</h4>
                  </Dropdown>
                ) : null}
              </div>
              </section>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider></section>
  );
};

export default Info;