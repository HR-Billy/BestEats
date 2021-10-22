import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    paddingTop: '3%',
  },
  picContainer: {
    minHeight: '20vh',
    paddingLeft: '30%',
  },
  nutritionTable: {
    minHeight: '20vh',
  },
  statusContainer: {
    minHeight: '13vh',
    padding: '2%',
  },
  feedContainer: {
    minHeight: '67.5vh',
    paddingTop: '5%',
    paddingLeft: '2%',
    paddingRight: '2%',
    maxHeight: '58vh',
    overflow: 'scroll',
    backgroundColor: '#B1C701',
  },
  messageContainer: {
    minHeight: '10vh',
    padding: '3%',
    boxShadow: '1px 1px 1px #ccc',
  },
  orderContainer: {
    minHeight: '26.8vh',
    maxHeight: '26.8vh',
    paddingLeft: '2%',
    paddingRight: '2%',
    overflow: 'hidden',
    backgroundColor: '#B1C701',
  },
  profilePhoto: {
    minHeight: '20vh',
    minWidth: '10vw',
  },
  mealContainer: {
    paddingLeft: '3%',
    minHeight: '18vh',
    maxHeight: '18vh',
    paddingTop: '15%',
    boxShadow: '4px 4px 4px #ccc',
  },
  mealPhoto: {
    minHeight: '10vh',
    minWidth: '5vw',
  },
});

export default useStyles;
