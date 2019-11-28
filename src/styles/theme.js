// Colors (https://dexmatech.atlassian.net/wiki/spaces/design/pages/698253492/Colour)
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F2F5F7',
  gray100: '#F1F2F3',
  gray200: '#D6D8DB',
  gray300: '#adb0b6',
  gray400: '#9FA3AA',
  gray500: '#7E8085',
  gray600: '#606266',
  gray700: '#404145',
  gray800: '#2C2D30',
  gray900: '#141518',
  turquoise: '#13C3A3',
  blue: '#003B6F',
  blueLight: '#56A6F1',
  red: '#F65B5B',
  amber: '#FFC400',
  orange: '#F7863B',
  brown: '#9C755F',
  grey: '#9FA3AA',
  green: '#1FB275',
  magenta: '#DC3B3C',
  purple: '#9230B0',
};

export const transparent = 'transparent';
export const primary = colors.turquoise;
export const success = colors.green;
export const warning = colors.amber;
export const error = colors.red;

// Font
export const fontSizeNumber = 0.75;
export const fontSizeType = 'rem';
export const fontSize = `${fontSizeNumber}${fontSizeType}`;
export const fontColor = colors.gray700;
export const fontColorActive = colors.white;
export const fontWeightLight = 300;
export const fontWeightNormal = 400;
export const fontWeightSemiBold = 600;
export const fontWeightBold = 700;

const getSize = (size = fontSizeNumber, type = fontSizeType) =>
  `${size}${type}`;

// Icon
export const iconSize = fontSize;
export const iconColor = colors.gray500;
export const iconColorActive = colors.white;

// Background
export const backgroundColor = colors.white;
export const backgroundColorSelected = colors.gray100;
export const backgroundColorActive = primary;
export const backgroundColorHover = colors.white;
export const backgroundColorFocused = colors.white;

// Others
export const radius = '4px';
export const padding = '20px';
export const borderColor = colors.gray200;
export const heightElements = '30px';
export const heightComponents = 2;
export const spacer = '1rem';
export const boxShadow = '0 1px 5px 0 rgba(0,0,0,0.2)';
export const boxShadowHover = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';

// Base
// ==========================================================================
const base = {
  border: `1px solid ${borderColor}`,
  borderRadius: radius,
  borderColor: borderColor,
  padding: padding,

  fontSize: fontSize,
  fontColor: fontColor,
  fontColorActive: fontColorActive,
  fontWeightLight: fontWeightLight,
  fontWeightNormal: fontWeightNormal,
  fontWeightSemiBold: fontWeightSemiBold,
  fontWeightBold: fontWeightBold,

  iconSize: iconSize,
  iconColor: iconColor,
  iconColorActive: iconColorActive,

  backgroundColor: backgroundColor,
  backgroundColorSelected: backgroundColorSelected,
  backgroundColorActive: backgroundColorActive,
  backgroundColorHover: backgroundColorHover,
  backgroundColorFocused: backgroundColorFocused,
  backgroundColorDisabled: colors.gray200,

  boxShadow: boxShadow,
  boxShadowHover: boxShadowHover,

  // Colors
  ...colors,

  primary: primary,
  success: success,
  warning: warning,
  error: error,

  heightComponents: heightComponents,
  heightElements: heightElements,
};

// Button
// ==========================================================================

const buttonPaddingX = 0.75;
const buttonHeight = heightComponents;
const buttonFontSize = fontSizeNumber;

const button = {
  size: {
    small: {
      paddingX: getSize(buttonPaddingX),
      fontSize: getSize(buttonFontSize),
      height: getSize(buttonHeight),
    },
    medium: {
      paddingX: getSize(buttonPaddingX + 0.25),
      fontSize: getSize(buttonFontSize + 0.25),
      height: getSize(buttonHeight + 0.25),
    },
    large: {
      paddingX: getSize(buttonPaddingX + 0.25 * 3.5),
      fontSize: getSize(buttonFontSize + 0.25 * 2),
      height: getSize(buttonHeight + 0.75),
    },
    xlarge: {
      paddingX: getSize(buttonPaddingX + 0.25 * 5),
      fontSize: getSize(buttonFontSize + 0.25 * 3),
      height: getSize(buttonHeight + 1.25),
    },
  },
};

// Heading
// ==========================================================================

const heading = {
  fontSize: {
    h1: getSize(2.625),
    h2: getSize(2),
    h3: getSize(1.75),
    h4: getSize(1.5),
    h5: getSize(1.25),
    h6: getSize(fontSizeNumber),
  },
  lineHeight: {
    h1: getSize(3),
    h2: getSize(2.5),
    h3: getSize(2.25),
    h4: getSize(2),
    h5: getSize(1.75),
    h6: getSize(1.5),
  },
};

// DatePicker
// ==========================================================================

const datePickerPaddingX = 0.75;
const datePickerHeight = heightComponents;
const datePickerFontSize = fontSizeNumber;

const dataPicker = {
  paddingX: getSize(datePickerPaddingX),
  fontSize: getSize(datePickerFontSize),
  height: getSize(datePickerHeight),
};

// Select
// ==========================================================================

const selectPaddingX = 0.75;
const selectHeight = heightComponents;
const selectFontSize = fontSizeNumber;

const select = {
  paddingX: getSize(selectPaddingX),
  fontSize: getSize(selectFontSize),
  height: getSize(selectHeight),
};

// Card
// ==========================================================================

const cardPaddingX = 1.25;
const cardPaddingY = 0.5;
const cardFontSize = 1;
const cardLineHeight = 1.25;

const card = {
  paddingX: getSize(cardPaddingX),
  paddingY: getSize(cardPaddingY),
  fontSize: getSize(cardFontSize),
  lineHeight: getSize(cardLineHeight),
};

// SwitchPeriodComparative
// ==========================================================================

const switchPeriodComparativeFontSize = 0.875;

const switchPeriodComparative = {
  fontSize: getSize(switchPeriodComparativeFontSize),
};

// Grid
// ==========================================================================

const columns = 12;
const gridGutterWidth = 1;
const gridOuterMargin = 2;
const gridOuterPadding = 2;
const gridXS = 30;
const gridSM = 48;
const gridMD = 64;
const gridLG = 75;

const grid = {
  outerPadding: getSize(gridOuterPadding),
  outerMargin: getSize(gridOuterMargin),
  gutterWidth: getSize(gridGutterWidth),
  gutterCompensation: getSize(gridGutterWidth * 0.5 * -1),
  halfGutterWidth: getSize(gridGutterWidth * 0.5),
  breakpoints: {
    xs: getSize(gridXS),
    sm: getSize(gridSM),
    md: getSize(gridMD),
    lg: getSize(gridLG),
  },
  columns: columns,
  screenSm: getSize(gridSM, 'em'),
  screenMd: getSize(gridMD, 'em'),
  screenLg: getSize(gridLG, 'em'),
  containerSm: getSize(gridSM + gridGutterWidth),
  containerMd: getSize(gridMD + gridGutterWidth),
  containerLg: getSize(gridLG + gridGutterWidth),
};

// Pagination
// ==========================================================================

const paginationPaddingX = 0.75;
const paginationHeight = heightComponents;
const paginationFontSize = fontSizeNumber;

const pagination = {
  paddingX: getSize(paginationPaddingX),
  fontSize: getSize(paginationFontSize),
  height: getSize(paginationHeight),
};

// Tag
// ==========================================================================

const tagPaddingX = 0.5;
const tagHeight = 1.25;
const tagFontSize = fontSizeNumber;

const tag = {
  paddingX: getSize(tagPaddingX),
  fontSize: getSize(tagFontSize),
  height: getSize(tagHeight),
};

const theme = {
  ...base,
  button,
  heading,
  dataPicker,
  select,
  card,
  switchPeriodComparative,
  grid,
  pagination,
  tag,
};

export default theme;
