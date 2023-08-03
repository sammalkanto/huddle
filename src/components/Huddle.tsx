import huddleLogo from '../assets/logo.svg';
import illustration from '../assets/illustration-mockups.svg';
import facebookLogo from '../assets/logo-facebook.svg';
import twitterLogo from '../assets/logo-twitter.svg';
import instagramLogo from '../assets/logo-instagram.svg';

const Huddle = () => {
    return (
        <div className='site'>
            <div className='header'>
                <img src={huddleLogo}/>
            </div>
            <div className='main'>
                <img className='illustration' src={illustration}/>
                <div className='content'>
                    <h1 className='title'>Build The Community Your Fans Will Love</h1>
                    <p className='description'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    <button className='register'>Register</button>
                </div>
            </div>
            <div className='socials'>
                <div className='social'>
                    <img src={facebookLogo}/>
                </div>
                <div className='social'>
                    <img src={twitterLogo}/>
                </div>
                <div className='social'>
                    <img src={instagramLogo}/>
                </div>
            </div>
        </div>
    )
}

export default Huddle;