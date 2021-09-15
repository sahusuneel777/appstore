import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onchangeTab = () => {
    changeTabItem(tabId)
  }

  const ActiveTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onchangeTab}
        className={`tab-button ${ActiveTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
