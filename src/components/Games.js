import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../icon.png';
import titlescreen from '../titlescreen.png';
import screenshot from '../screenshot.png';

const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 32
  },
  container: {
    display: 'grid',
    gap: 16
  },
  card: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gap: 16,
    alignItems: 'center',
    fontFamily: 'Roboto,sans-serif',
    paddingTop: 8,
    borderTop: '1px solid #e4e4e7'
  },
  info: {
    width: 320
  },
  title: {
    color: '#1e2228',
    fontSize: 15,
    margin: 0,
    marginBottom: 4,
    fontWeight: '600',
    fontFamily: 'Roboto,sans-serif',
  },
  sectionTitle: {
    color: '#1e2228',
    fontSize: 15,
    margin: 0,
    marginBottom: 4,
    fontWeight: '600',
    fontFamily: 'Roboto,sans-serif',
  },
  description: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '300',
  },
  detailsContainer: {
    backgroundColor: '#F5F5F6',
    borderRadius: 8,
    padding: 8,
    fontFamily: 'Roboto,sans-serif',
    fontSize: 12
  },
  detail: {
    display: 'block',
    margin: 4,
    fontSize: 12,
  },
  details: {

  },
  section: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 8,
    fontFamily: 'Roboto,sans-serif',
  },
  screenshots: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 8,
    fontFamily: 'Roboto,sans-serif',
    gap: 16
  }
}
const Games = () => {
  return (
    <div style={styles.layout}>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>GAMES</h2>
        <div style={styles.card}>
          <img src={icon} height={64} alt='icon' />
          <div style={styles.info}>
            <h2 style={styles.title}>Slime Rusher</h2>
            <span style={styles.description}>Solve the puzzles, enter the portal and help our sticky friend get back home!</span>
          </div>
        </div>
        <div style={styles.detailsContainer}>
          <span style={styles.detail}><b>Genre:</b> Puzzle </span>
          <span style={styles.detail}><b>Release Date:</b> Jun 12, 2023 </span>
          <span style={styles.detail}><b>Developer:</b> Jonathan Ayala</span>
        </div>
        <div style={styles.section}>
          <h2 style={styles.title}>Screenshots</h2>
          <div style={styles.screenshots}>
            <img src={titlescreen} style={styles.title} alt="titlescreen" height={320} />
            <img src={screenshot} style={styles.title} alt="screenshot" height={320} />
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>ABOUT</h2>
        <span style={styles.detail}>Ludeku is the brand we use to publish our games. We are based in México.<br /><br />
          Our contact/support email is: hi@ludeku.net <br /><br /><br />

          <b>Links: </b><br />
          <Link to="/privacy">Privacy Policy</Link>
        </span>
      </div>
    </div>
  )
}

export default Games;
