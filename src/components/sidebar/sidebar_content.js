import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: 'white',
    textDecoration: 'none',
    'font-size': '16px',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'rgb(22,25,28)',
  },
  icon: {
  'vertical-align': 'middle',
  'padding-right': '10px',
  height: '20px',
  width: '20px',
}
};

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  const links = [];
  links.push(<a key={2} href="#" style={styles.sidebarLink}>Menu2</a>);
  links.push(<a key={3} href="#" style={styles.sidebarLink}>Menu3</a>);
  links.push(<a key={1}  href="/settings" style={styles.sidebarLink}><Icon.Settings style={styles.icon}/><span className='text'>Settings</span></a>);

  return (
    <MaterialTitlePanel title="Team Sunergy" style={style}>
      <div style={styles.content}>
        <a href="/" style={styles.sidebarLink}><Icon.Activity style={styles.icon}/>Main Dashboard</a>
        <div style={styles.divider} />
        {links}

      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
