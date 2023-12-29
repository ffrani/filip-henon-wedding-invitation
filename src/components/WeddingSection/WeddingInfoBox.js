import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, description, location1, location2 }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap">
        <h3>{title}</h3>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        {description && (
          <div className="event-col">
            <i className="icon-location-pin"></i>
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}{' '}
        {location1 && (
          <div className="event-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href="https://www.google.com/maps/place/Stanseveien+6,+0975+Oslo/@59.9463725,10.8690946,17z/data=!3m1!4b1!4m6!3m5!1s0x46416ffd237b409f:0xa59ff30c23628e30!8m2!3d59.9463698!4d10.8716695!16s%2Fg%2F11c29dxzfv?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  backgroundColor: 'rgb(168, 131, 89)',
                  border: '1px solid rgb(168, 131, 89)',
                  borderRadius: '10px',
                  fontSize: '15px',
                  color: 'white',
                }}
              >
                Get Location
              </button>
            </a>
          </div>
        )}{' '}
        {location2 && (
          <div className="event-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href="https://www.google.com/maps/place/Eventhallen/@59.9148919,10.8239648,17z/data=!3m1!4b1!4m6!3m5!1s0x46416fa69a5426b9:0x8ccf5b55dac6d01c!8m2!3d59.9148892!4d10.8265397!16s%2Fg%2F1hc30mzkh?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  backgroundColor: 'rgb(168, 131, 89)',
                  border: '1px solid rgb(168, 131, 89)',
                  borderRadius: '10px',
                  fontSize: '15px',
                  color: 'white',
                }}
              >
                Get Location
              </button>
            </a>
          </div>
        )}{' '}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
