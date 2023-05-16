import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const logout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log('Error during logout:', error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix-Clone</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button onClick={logout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signUp'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
