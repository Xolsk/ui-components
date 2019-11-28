import get from 'lodash/get';

export const propFromTheme = (theme, prop) => get(theme, `theme.${prop}`);

export const padding = props => propFromTheme(props, 'padding');
export const margin = props => propFromTheme(props, 'padding');
export const border = props => propFromTheme(props, 'border');
export const borderRadius = props => propFromTheme(props, 'borderRadius');
export const borderColor = props => propFromTheme(props, 'borderColor');

export const fontSize = props => propFromTheme(props, 'fontSize');
export const fontColor = props => propFromTheme(props, 'fontColor');
export const fontColorActive = props => propFromTheme(props, 'fontColorActive');
export const fontWeightBold = props => propFromTheme(props, 'fontWeightBold');

export const iconSize = props => propFromTheme(props, 'iconSize');
export const iconColor = props => propFromTheme(props, 'iconColor');
export const iconColorActive = props => propFromTheme(props, 'iconColorActive');

export const backgroundColor = props => propFromTheme(props, 'backgroundColor');
export const backgroundColorSelected = props =>
  propFromTheme(props, 'backgroundColorSelected');
export const backgroundColorActive = props =>
  propFromTheme(props, 'backgroundColorActive');
export const backgroundColorHover = props =>
  propFromTheme(props, 'backgroundColorHover');
export const backgroundColorFocused = props =>
  propFromTheme(props, 'backgroundColorFocused');
export const backgroundColorDisabled = props =>
  propFromTheme(props, 'backgroundColorDisabled');
export const boxShadow = props => propFromTheme(props, 'boxShadow');
export const gray100 = props => propFromTheme(props, 'gray100');
export const gray200 = props => propFromTheme(props, 'gray200');
export const gray300 = props => propFromTheme(props, 'gray300');
export const gray400 = props => propFromTheme(props, 'gray400');
export const gray500 = props => propFromTheme(props, 'gray500');
export const gray600 = props => propFromTheme(props, 'gray600');
export const gray700 = props => propFromTheme(props, 'gray700');
export const gray800 = props => propFromTheme(props, 'gray800');
export const gray900 = props => propFromTheme(props, 'gray900');
export const white = props => propFromTheme(props, 'white');
export const magenta = props => propFromTheme(props, 'magenta');
export const primaryColor = props => propFromTheme(props, 'primary');
export const primaryColorSvg = props => {
  const newPrimaryColor = propFromTheme(props, 'primary');
  return newPrimaryColor.replace('#', '');
};
export const successColor = props => propFromTheme(props, 'success');
export const warningColor = props => propFromTheme(props, 'warning');
export const errorColor = props => propFromTheme(props, 'error');
export const componentHeight = props => propFromTheme(props, 'heightElements');

export const headingFontSize = props =>
  propFromTheme(props, 'heading.fontSize');
export const headingLineHeight = props =>
  propFromTheme(props, 'heading.lineHeight');
export const buttonSize = props => propFromTheme(props, 'button.size');
export const dataPickerHeight = props =>
  propFromTheme(props, 'dataPicker.height');
export const dataPickerFontSize = props =>
  propFromTheme(props, 'dataPicker.fontSize');
export const dataPickerPaddingX = props =>
  propFromTheme(props, 'dataPicker.paddingX');
export const selectHeight = props => propFromTheme(props, 'select.height');
export const selectFontSize = props => propFromTheme(props, 'select.fontSize');
export const selectPaddingX = props => propFromTheme(props, 'select.paddingX');
export const cardPaddingX = props => propFromTheme(props, 'card.paddingX');
export const cardPaddingY = props => propFromTheme(props, 'card.paddingY');
export const cardFontSize = props => propFromTheme(props, 'card.fontSize');
