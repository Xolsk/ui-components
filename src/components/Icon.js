import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import get from 'lodash/get';
import isNumber from 'lodash/isNumber';
import icons from 'config/icon';
import theme from 'styles/theme';

import { StyledIcon } from 'styles/components/StyledIcon';
import { BUTTON_SIZE } from 'components/Button';

const propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(BUTTON_SIZE), PropTypes.number]),
  className: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  name: 'vader',
  color: 'iconColor',
  size: 'large',
  theme: theme,
};

export const getIconSize = size => {
  if (isNumber(size)) return size;
  if (size === 'small') return 16;
  if (size === 'medium') return 20;
  if (size === 'large') return 24;
  if (size === 'xlarge') return 32;
  return 24;
};

const getIconPaths = name => {
  let paths = [];
  icons.forEach(item => {
    if (item.name === name) {
      paths = item.icon;
    }
  });
  return paths.map((path, i) => {
    const { d, opacity, clipRule, fillRule } = path;
    return (
      <path
        key={i}
        d={d}
        opacity={opacity}
        clipRule={clipRule}
        fillRule={fillRule}
      />
    );
  });
};

export const Icon = props => {
  const { name, color, size, className, theme } = props;
  const fillColor = get(theme, color);
  const pathElements = getIconPaths(name);
  const iconSize = getIconSize(size);
  return (
    <StyledIcon
      width={iconSize}
      viewBox="0 0 24 24"
      strokeWidth="0"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fillColor={fillColor}
      theme={theme}
      className={className}
    >
      {pathElements}
    </StyledIcon>
  );
};

StyledIcon.displayName = 'StyledIcon';

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
