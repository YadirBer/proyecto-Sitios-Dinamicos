import styled from "styled-components";
import { SkillsData } from "../components/skillsData";
import SkillCard from "./SkillCard";
const Skills = (props) => {
  return (
    <Wrap>
      <h2>My Skills</h2>
      <SkillGrid>
        {SkillsData.map((skill) => {
          return <SkillCard key={skill.name} {...skill} />;
        })}
      </SkillGrid>
    </Wrap>
  );
};
const Wrap = styled.section`
  background-color: #262435;
  width: 100%;
  padding: 50px 10%;
  color: #fff;
  min-height: 650px;
  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
  }
`;
const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
export default Skills;