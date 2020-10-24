import React, { useState } from 'react';
import AlertDialogSlide from '../Dialogue/AlertDialogSlide';
import './Home.css';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import HomeMovie from './HomeMovie';
import { rotateIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  rotateIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateIn, 'rotateIn'),
  },
};

const Home = (props) => {
  const [log, setLog] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const homeTitleStyle = {
    /*background: '#e0c3c4',*/
    background: '#f2d8d9',
    color: '#4a2f30',
    marginTop: '20px',
    padding: '15px',
    borderRadius: '10px',
    borderColor: '#4a2f30',
    borderStyle: 'solid',
    borderWidth: 'thick',
  };

  const homeContainerStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <div>
      <div style={homeContainerStyle}>
        <h2 style={homeTitleStyle}>
          <StyleRoot>
            <div className="test" style={styles.rotateIn}>
              World Class Entertainment
            </div>
          </StyleRoot>
        </h2>
      </div>
      <HomeMovie log={true} />
    </div>
  );
};

export default Home;
