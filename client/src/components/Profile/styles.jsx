import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: '5%',
  },
  picContainer: {
    minHeight: '20vh',
    paddingLeft: '30%',
  },
  nutritionContainer: {
    minHeight: '65vh',
    paddingTop: '2%',
  },
  statusContainer: {
    minHeight: '13vh',
    padding: '2%',
  },
  feedContainer: {
    minHeight: '68vh',
    paddingTop: '5%',
    paddingLeft: '2%',
    paddingRight: '2%',
    maxHeight: '58vh',
    overflow: 'scroll',
  },
  messageContainer: {
    minHeight: '10vh',
  },
  orderContainer: {
    minHeight: '28.2vh',
    paddingLeft: '2%',
  },
  profilePhoto: {
    minHeight: '20vh',
    minWidth: '10vw',
  },
  mealContainer: {
    minHeight: '18vh',
    paddingTop: '15%',
  },
  mealPhoto: {
    minHeight: '10vh',
    minWidth: '5vw',
  },
});

export default useStyles;
