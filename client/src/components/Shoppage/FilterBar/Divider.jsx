import React from 'react';

function Divider() {
  return (
    <div className="filter-bar-bottom-divider" aria-hidden="true">
      <div className="hairline-divider-left"></div>
      <span className="botanical-center-emblem">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A46A" strokeWidth="0.8">
          <circle cx="12" cy="12" r="3" strokeDasharray="1.5 1.5" />
          <path d="M12,4 Q10,8 12,12 Q14,8 12,4" />
          <path d="M12,20 Q10,16 12,12 Q14,16 12,20" />
          <path d="M4,12 Q8,10 12,12 Q8,14 4,12" />
          <path d="M20,12 Q16,10 12,12 Q16,14 20,12" />
        </svg>
      </span>
      <div className="hairline-divider-right"></div>
    </div>
  );
}

export default Divider;