import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-arin.jpg';
import Groom from '@assets/images/p-miftah.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  // const finalSubtitle = 'Minggu, 11 September 2022';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Filip Franicevic & Henon Ogbazion</h2>
              <h3 className="sub-title hs">
                You are invited to celebrate our wedding in Oslo on the 10th of February 2024
              </h3>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Henon Ogbazion</h3>
                <p className="parent-name parent-name__top">
                  Daughter of Mr. Ogbazion Hadgu <br />& Mrs. Hiwet Hagos
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Filip Franicevic</h3>
                <p className="parent-name">
                  Son of Mr. Tonci Franicevic <br />& Marijana Franicevic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ width: '500px', borderColor: 'rgb(168, 131, 89)' }}></hr>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
