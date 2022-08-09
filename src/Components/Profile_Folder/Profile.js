import { useAuth } from "../auth"
import { useNavigate } from "react-router-dom"
import ProfileDetails from "./ProfileDetails"

const Profile = () => {
  const auth = useAuth()
  const naviagte = useNavigate()
  const handleLogout = () => {
    auth.logout()
    naviagte('/')
  }

  return (
    <div className="Apps">
      {(auth.user.name !== '') && (
      <div className="profile-grid">
        <div className="profile-p">
          <p>Welcome, <span>{auth.user.name}</span></p>
        </div>
          <center>
            <div className="profile-form form-sign">
              <ProfileDetails onClick={handleLogout}/>
            </div>
          </center>
      </div>
      )}
    </div>
  )
}

export default Profile
