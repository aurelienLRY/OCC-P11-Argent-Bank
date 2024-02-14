
import PropTypes from 'prop-types';
import './style.scss';

const FeatureItem = ({ iconSrc, title, description }) => {
    return (
        <div className="feature-item">
            <img src={iconSrc} alt="Feature Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    iconSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

FeatureItem.defaultProps = {    
    iconSrc: 'https://via.placeholder.com/150',
    title: 'Feature Title',
    description: 'Feature Description',
};

export default FeatureItem;

