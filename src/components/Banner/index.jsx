import PropTypes from 'prop-types';
import './style.scss';
/**
 * Banner component displays a banner section with promotional content.
 *
 * @component
 * @param {string} props.UrlImg - The URL of the image to be displayed as the background of the hero section.
 * @returns {JSX.Element} The rendered Banner component.
 */
export default function Banner({ UrlImg }) {
    return (
        <section className="hero" style={{ backgroundImage: `url(${UrlImg})` }} data-testid="hero">
            <div className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </div>
        </section>
    );
}

Banner.propTypes = {
  UrlImg: PropTypes.string,
};

Banner.defaultProps = {
    UrlImg: 'https://via.placeholder.com/1440x400',}