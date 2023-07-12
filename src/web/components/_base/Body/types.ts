export type BodyProps = React.HTMLProps<HTMLParagraphElement> & {
  scale: BodyScale
  shade?: BodyShade
  style?: BodyStyle
}
type BodyScale = 100 | 200 | 300 | 400
type BodyShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type BodyStyle = 'normal' | 'italic' | 'bold'
