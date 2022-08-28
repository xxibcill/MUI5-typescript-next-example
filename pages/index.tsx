import type { NextPage } from 'next'
import { 
  Grid,
  Box,
  styled 
} from '@mui/material';
import CenterContainer from 'components/CenterContainer'

const StyledBox = styled(Box)(({theme}) => ({
  width: 300,
  height: 300,
  backgroundColor: theme.palette.primary.dark,
  border: 1,
  borderColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    opacity: [0.9, 0.8, 0.7],
  },
}))

const Home: NextPage = () => {
  return (
    <CenterContainer container spacing={3}>
      <Grid item xs={12}>
        <StyledBox>
          
        </StyledBox>
      </Grid>
    </CenterContainer>
  )
}

export default Home
