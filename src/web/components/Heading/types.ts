export type HeadingProps = React.HTMLProps<HTMLParagraphElement> & {
  scale: HeadingScale;
  shade?: HeadingShade;
  as?: As;
};
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingScale = 100 | 200 | 300 | 400 | 500 | 600;
type HeadingShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
