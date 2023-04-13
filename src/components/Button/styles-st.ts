import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  color: 'white',
  background: '$gray400',
  fontSize: '14px',
  border: 'none',
  borderRadius: '10px',
  padding: '12px',
  transition: 'all 0.5s',

  variants: {
    variant: {
      primary: {
        background: '$pink200',

        '&:hover': {
          background: '$pink400',
          fontSize: '14px',
        },
      },
      secondary: {
        background: '$purple200',

        '&:hover': {
          background: '$purple400',
          fontSize: '14px',
        },
      },
    },
  },
});