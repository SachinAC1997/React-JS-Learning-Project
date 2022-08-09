import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth'
 
const RequireAuth = ({children}) => {
 const auth = useAuth()
//  const location = useLocation()

  if(!auth.user.name) {
    return <Navigate to='/SignInUp' />
  }

  return children
}

export default RequireAuth

//state={{path: location.pathname}}