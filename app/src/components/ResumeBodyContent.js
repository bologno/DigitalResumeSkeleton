import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {ResumeBodySkills, ResumeBodyExperience, ResumeBodyEducation} from '../components';

const ResumeBodyContent = ({value, handleChangeIndex, skillsList, experienceList, educationList}) => (
  <SwipeableViews
    index={value}
    onChangeIndex={handleChangeIndex}
  >
    <ResumeBodySkills skills={skillsList} />
    <ResumeBodyExperience className='card__content-view' experiences={experienceList} />
    <ResumeBodyEducation educationList={educationList} />
  </SwipeableViews>
  )

export default ResumeBodyContent;
