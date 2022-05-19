import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
// alert is rendered once and dispatch changes only the visibility state
const Alert = () => {
  const { alert } = useContext(AlertContext)
  return (
    <div
      className={`grid grid-cols-1   gap-18 mx-20`}
      style={{ visibility: alert ? 'visible' : 'hidden' }}
    >
      <div className="alert alert-error ">
        <div>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3"
          ></svg>
          <strong>{alert?.msg}</strong>
        </div>
      </div>
    </div>
  )
}

export default Alert
