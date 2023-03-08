import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CircleProgressBar = ({ percent }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - percent) / 100) * 600;
    setOffset(progressOffset);
  }, [percent, setOffset]);

  return (
    <svg>
      <circle cx="70" cy="70" r="60" strokeWidth="10" fill="transparent" stroke="#ccc" />
      <circle
        cx="70"
        cy="70"
        r="60"
        strokeWidth="10"
        fill="transparent"
        stroke="#0290ff"
        strokeDasharray="440"
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="progress-circle"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="440"
          to={offset}
          dur="0.5s"
        />
      </circle>
      <text fontSize={24} x="170" y="60" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">
        {percent}
        %
      </text>
      <text className="a" x="195" y="60%" textAnchor="middle" fill="rgba(0, 0, 0, 0.338)" strokeWidth="1px" dy=".3em" style={{ fontSize: '16px' }}>
        Completed
      </text>

    </svg>
  );
};

CircleProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default CircleProgressBar;
