
import '../styles/loginPage.scss'
import { FcGoogle } from 'react-icons/fc'

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="content">
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>
        <p>Streamline your workflow and track progress effortlessly with our all-in-one task management app.</p>
        <button><FcGoogle /> Continue with Google</button>
      </div>
    </div>
  )
}

export default LoginPage