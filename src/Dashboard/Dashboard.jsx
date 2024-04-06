import './Dashboard.css'
import { DashboardHeader } from './DashboardHeader/DashboardHeader'
import { Sidebar } from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';


export const Dashboard = () => {
  
  return (
    <>
      <div className="DashboardContainer">
        <div className="block-1">
          <DashboardHeader />
        </div>
        <div className="block-2">
          <Sidebar />
        </div>
        <div className="block-3">
          <Outlet />
        </div>
      </div>
    </>
  )
}
