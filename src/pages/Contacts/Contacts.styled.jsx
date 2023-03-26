import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  gap: 60px;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  background-color: #fff;
  padding: 0 15px;
  margin: 20px 0;
  /* border: 1px solid #eee;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  } */
`;
export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const ContactsTitle = styled.h2`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
`;

export const ContactsListBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
