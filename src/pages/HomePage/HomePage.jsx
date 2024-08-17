import background from '/src/images/site.webp';
import css from "./HomePage.module.css";

const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0px',
            }}
        >
            <h1 className={css.h1}>Your home on wheels!</h1>
            <h4 className={css.h4}>The best camper rental catalog!</h4>
            <a href="/catalog" className={css.entryLink}>← Entry catlog</a>
        </div>
    );
};

export default HomePage;
