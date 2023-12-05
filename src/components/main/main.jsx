import React, { useState} from 'react';
import { DATA } from '../../data'
import BottomNavigation from '../ui/bottomNavigation/bottomNavigation';
import Sidebar from '../ui/Sidebar/Sidebar'
import Episodes from '../Episodes/Episodes'
import Information from './information'
import styles from './main.module.scss';

const Main = () => {

  const [isSidebarShow, setIsSidebarShow] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className={styles.wrapper}>
      <Sidebar 
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
      <div 
        className={styles.main}
        style={{backgroundImage: `url(${DATA[0].mainImage})`,
                width: isSidebarShow ? '85%' : '90%', height: '745px'}}>
        {activeTab === 1 ? (
          <Information movie={DATA[0]} />
        ) : (
          activeTab === 2 && <Episodes />
        )}
      </div>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  )
}

export default Main