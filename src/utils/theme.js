const theme = {};

theme.borderRadius = '2px';

theme.color = {};
theme.color.charcoalGrey = '#363E40';
theme.color.charcoalGreyTwo = '#3D4748';
theme.color.charcoalGreyFifty = 'rgba(54, 62, 64, 0.5)';
theme.color.pinkishGrey = '#CAC9C9';
theme.color.white = '#F8F8F8';
theme.color.gunmetal = '#486863';
theme.color.greenyBlue = '#36A6B4';
theme.color.paleRed = '#DE6449';
theme.color.lightTeal = '#ADEEE3';
theme.color.uglyBlue = '#2A8691';



theme.fontFamily = {};
theme.fontFamily.quattrocento = 'Quattrocento';
theme.fontFamily.openSans = 'OpenSans';

theme.fontSize = {};
theme.fontSize.xxl = '36px';
theme.fontSize.xl = '24px';
theme.fontSize.l = '20px';
theme.fontSize.m = '16px';
theme.fontSize.s = '14px';
theme.fontSize.xs = '12px';


theme.fontWeight = {};
theme.fontWeight.regular = 400;
theme.fontWeight.medium = 500;
theme.fontWeight.semibold = 600;
theme.fontWeight.bold = 700;

theme.pxScale = 8;

theme.px = (value) => {
  const values = [].concat(value);
  return values.map((v) => (typeof v === 'string' ? v : `${v * theme.pxScale}px`)).join(' ');
};

export default theme;
