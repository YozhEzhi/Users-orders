import React from 'react';
import SortAgeButton from './SortAgeButton';
import SortNameButton from './SortNameButton';

const Toolbar = ({ icoClass, onSortByAge, onSortByName }) => {
  return (
    <div>
      <SortNameButton icoClass={icoClass} onSortByName={onSortByName} />
      <SortAgeButton icoClass={icoClass} onSortByAge={onSortByAge} />
    </div>
  );
};

Toolbar.propTypes = {
  icoClass: React.PropTypes.string,
  onSortByAge: React.PropTypes.func.isRequired,
  onSortByName: React.PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  icoClass: 'asc',
};

export default Toolbar;
