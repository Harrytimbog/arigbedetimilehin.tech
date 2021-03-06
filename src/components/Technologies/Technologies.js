import React from 'react';
import { DiDatabase, DiReact, DiNodejs, DiRor } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world,
      from Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js | Next.js | Gatsby.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRor size="3rem" />
        <ListContainer>
          <ListTitle>Ruby on rails</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ruby on Rails.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Node JS</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL | MongoDB | REDIS | SQLite and others
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
