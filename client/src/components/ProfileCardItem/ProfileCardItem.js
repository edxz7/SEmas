import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './ProfileCardItem.Styles';

const ProfileCardItem = ({ username, userLastName, email }) => (
  <MenuItemContainer>
    <ContentContainer className='content'>
      <ContentTitle>{username.toUpperCase()}</ContentTitle>
      <ContentSubtitle>{userLastName.toUpperCase()}</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(ProfileCardItem);