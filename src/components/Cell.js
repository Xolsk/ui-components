import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultGeneralPropTypes,
  GeneralPropTypes,
  BreakpointsPropTypes,
} from 'utils/propTypes';
import { withTheme } from 'styled-components';
import { StyledCell } from 'styles/components/StyledCell';

const propTypes = {
  ...GeneralPropTypes,
  /**
   * Responsive extra small size
   */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Responsive small size
   */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Responsive medium size
   */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Responsive large size
   */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: BreakpointsPropTypes,
  last: BreakpointsPropTypes,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

export const Cell = ({
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  first,
  last,
  dataCy,
  children,
  className,
  theme,
}) => {
  return (
    <StyledCell
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xsOffset={xsOffset}
      smOffset={smOffset}
      mdOffset={mdOffset}
      lgOffset={lgOffset}
      first={first}
      last={last}
      data-cy={dataCy}
      theme={theme}
      className={className}
    >
      {children || null}
    </StyledCell>
  );
};

StyledCell.displayName = 'StyledCell';

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default memo(withTheme(Cell));
