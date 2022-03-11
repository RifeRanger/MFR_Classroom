import React, {useEffect} from 'react';
import './Home.css';
import { signInWithGoogle, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';



function Home() {
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) history.push("/dashboard");
  }, [loading, user, history]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src="../public/IMG_4250.JPG"
          alt="Mount Fitness Research Classroom"
          className="home__image"
        />
        <button className="home__login" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Home