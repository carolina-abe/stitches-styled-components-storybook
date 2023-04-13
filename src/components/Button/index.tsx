// <Button css="sc" ... /> -> retorna um StyledComponentsButton
// <Button css="stitches" ... /> -> Retorna um StitchesButton
import * as SC from './styles-sc'
import * as ST from './styles-st'

import { ButtonProps } from './types'

export const Button = ({ style, label, variant = 'primary' }: ButtonProps) => {
  return (
    <>
      {style === 'stitches' && (<ST.Button variant={variant}>{label}</ST.Button>)}
      {style === 'styled-component' && (<SC.Button variant={variant} >{label}</SC.Button>)}
    </>
  )
}