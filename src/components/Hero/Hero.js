import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I Am A <br />
        Fullstack Developer
      </SectionTitle>
      <SectionText>
        I can help you build web applications and also use my development skills to take your ideas to the next level by building awesome apps.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More.</Button>
    </LeftSection>
  </Section>
);

export default Hero;
