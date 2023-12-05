import styles from './bottomNavigation.module.scss'

const tabs = [
  {
    id: 1,
    name: 'Overview'
  },
  {
    id: 2,
    name: 'Episodes'
  },
  {
    id: 3,
    name: 'Details'
  },
]


const bottomNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={styles.nav}>
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? styles.active : ''}>
          {tab.name}
        </button>
      ))}
    </nav>
  )
}

export default bottomNavigation