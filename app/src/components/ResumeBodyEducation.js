
import React from 'react';
import {ListItem, ListItemIcon, List, Typography} from 'material-ui';
import CodeIcon from 'material-ui-icons/Code';
import TabContainer from './TabContainer';
import Spacer from './Spacer';

const educationListContainer = (educationList) => educationList.map(education =>
  <ListItem key={education.replace(/ /g, '')} disableGutters={true} className="card_education">
    <ListItemIcon>
      <CodeIcon className="card__icon" />
    </ListItemIcon>
    <div className="card__education-text">{education}</div>
  </ListItem>
)

const ResumeBodyEducation = ({educationList}) =>
  <div className='card__content-view'>
    <TabContainer>
      <List>
        {educationListContainer(educationList)}
      </List>
    </TabContainer>
  </div>

export default ResumeBodyEducation;
