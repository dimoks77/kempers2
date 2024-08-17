import background from '/src/images/bg.webp';
import css from "./HomePage.module.css";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '60px',
            }}
        >
<h1 className={`${css.h1} ${css.fadeIn}`}>Your home on wheels!</h1>
            <Link to="/catalog" className={`${css.entryLink} ${css.fadeIn}`}>← Entry</Link>
        </div>
    );
};

export default HomePage;
