import React, { useState } from 'react';
import YourOutfitEntry from './YourOutfitEntry.jsx';
import { Container, RowContainer, SectionTitle, NextButton, PreviousButton, FadeoutRight } from './styles/Cards.style.js';

const YourOutfit = (props) => {
  var [leftMost, setLeftMost] = useState(true);
  var [rightMost, setRightMost] = useState(false);

  var exampleArr = [1, 2, 3, 4, 5, 6, 7];

  var clickHandlerRight = () => {
    document.querySelector('#outfitContainer').scrollLeft += 202;
    console.log('Right button click!', document.querySelector('#outfitContainer').scrollLeft);
    if (document.querySelector('#outfitContainer').scrollLeft >= exampleArr.length * 50) {
      setRightMost(true);
    }
    setLeftMost(false);
  };

  var clickHandlerLeft = () => {
    document.querySelector('#outfitContainer').scrollLeft -= 202;
    console.log('Left button click!', document.querySelector('#outfitContainer').scrollLeft);
    if (document.querySelector('#outfitContainer').scrollLeft < 203) {
      setLeftMost(true);
    }
    setRightMost(false);
  };

  return (
    <Container>
      <SectionTitle>YOUR OUTFIT</SectionTitle>
      {!leftMost ? <PreviousButton onClick={clickHandlerLeft}>{'<'}</PreviousButton> : null}
      <FadeoutRight>
        <RowContainer id="outfitContainer">
          <YourOutfitEntry first={true} />
          {exampleArr.map(item => {
            if (exampleArr[exampleArr.length - 1] === item) {
              return <YourOutfitEntry key={item} last={true} />;
            } else {
              return <YourOutfitEntry key={item} />;
            }
          })}
        </RowContainer>
      </FadeoutRight>
      {!rightMost ? <NextButton onClick={clickHandlerRight}>{'>'}</NextButton> : null}
    </Container>
  );
};

export default YourOutfit;