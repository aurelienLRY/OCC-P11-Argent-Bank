import PropTypes from 'prop-types';
import './style.scss';

export default function Hero({ UrlImg }) {
    return (
        <div className="hero" style={{ backgroundImage: `url(${UrlImg})` }}>
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}

Hero.propTypes = {
  UrlImg: PropTypes.string,
};

Hero.defaultProps = {
    UrlImg: 'https://via.placeholder.com/1440x400',}