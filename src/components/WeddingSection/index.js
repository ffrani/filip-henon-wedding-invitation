import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';
import CountContainer from '../WelcomeSection/CountContainer';
import { GOOGLE_CALENDAR_LINK } from '@/constants';
import { styButtonWrapper } from './styles';

import { css } from '@emotion/core';

export const styCenterFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Wedding Details</h2>
              <span className="sub-title sub-title__wedding"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Ceremony"
                time="10.00 AM"
                date="Saturday, February 10th 2024"
                description="Stanseveien 6, 0975 Oslo"
                location1="Get Loaction"
              />
              <WeddingInfoBox
                title="Reception"
                time="15.00 PM to 02.00 AM"
                date="Saturday, February 10th 2024"
                description="Ole Deviks v. 10, 0666 Oslo"
                location2="Get Location"
              />
            </div>
          </div>
        </div>
        <div css={[styCenterFlex]}>
          <CountContainer />
        </div>
        <div className="row" css={styButtonWrapper}>
          <div className="col-md-3">
            <a href={GOOGLE_CALENDAR_LINK} title="Add to My Calendar" target="_blank" rel="noreferrer">
              <button className="btn btn-default btn-block">Add to Calendar</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ width: '500px', borderColor: 'rgb(168, 131, 89)', height: '20px' }}></hr>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
