
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
}
export const Button:React.FC<Props> = ({variant="primary", ...buttonProps}) => {

  if(variant === 'primary') {
    return <button {...buttonProps} >My awesome primary button</button>
  }

  return (
    <button {...buttonProps} >My awesome secondary button</button>
  )
}
