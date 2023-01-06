import React from 'react';
import { FaStar } from 'react-icons/fa';
import { H1, P, RatingButton, RatingCardWrapper, RatingIconBox } from './ratingCardStyle';

const RatingCard = () => {
    return (
        <RatingCardWrapper>
            <RatingIconBox>
                <FaStar style={{color: 'orange', borderRadius: '50%', fontSize: '22px'}}/>
            </RatingIconBox>
            <H1>How did we do?</H1>
            <P>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</P>
            {
                [1,2,3,4,5].map((btn,i) => <RatingButton as='button' key={i}>{btn}</RatingButton>)
            }
        </RatingCardWrapper>
    );
};

export default RatingCard;