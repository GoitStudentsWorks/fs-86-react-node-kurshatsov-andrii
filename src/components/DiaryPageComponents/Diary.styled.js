import styled from 'styled-components';

export const DiarySections = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 335px;
  max-height: ${(props) => props.height || '826px'};
  padding: 16px 8px 16px 16px;
  gap: 22px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    min-height: 236px;
    height: 236px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`;

export const SectionsWrapTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-right: 8px;
  }
`;

export const DiaryTitle = styled.h3`
  color: rgba(239, 237, 232, 0.5);
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
`;

export const DiaryLink = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--orange-color);
  font-weight: 500;
  line-height: 1.29;
  font-size: 14px;
  margin-right: 4px;
  background-color: transparent;
  border: none;
  &:hover,
  &:focus {
    color: var(--orange-light-color);
    svg {
      stroke: var(--orange-light-color);
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const NextIconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: var(--orange-color);
  display: inline-block;
`;

export const WrapTitlesTablet = styled.ul`
  display: flex;
  gap: 8px;
  line-height: 1.5;
  margin-bottom: -8px;
  color: var(--orange-light-color);

  @media screen and (min-width: 1440px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;

export const DiarySupTitleTablet = styled.li`
  display: inline-block;
  font-size: 12px;
  width: ${(props) => props.width || '100%'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DiaryLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-right: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding-right: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 16px;
    padding-right: 0px;
  }
`;

export const DiaryCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc((100% - 2 * 16px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: auto;
  }
`;

export const DiarySupTitle = styled.h4`
  max-width: ${(props) => props.size || 'inherit'};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  color: var(--orange-light-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ValueBox = styled.div`
  display: ${(props) => props.display || 'inline-block'};
  gap: 8px;
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.$maxwidth || '100%'};
  height: 38px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.29;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: none;
    height: 40px;
    padding: 8px 14px;
    line-height: 1.5;
    font-size: 16px;
  }
`;

export const WrapLastDescrBox = styled.div`
  position: relative;
  display: flex;
  padding-right: 28px;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    gap: 8px;
  }
`;

export const DiaryTrashButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 9px;
  padding: 0;
  line-height: 0;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
`;

export const TrashIconWrapper = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--orange-light-color);
  display: inline-block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: var(--orange-color);
  }
`;

export const EmptyText = styled.p`
  margin: auto;
  display: block;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.28;
`;

export const Circle = styled.div`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${(props) => (props.color === 'false' ? '#419B09' : '#E9101D')};
`;
