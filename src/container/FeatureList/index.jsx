
import featureData from './FeatureData.json'; //importing the feature data from the json file
import FeatureItem from '../../components/FeatureItem'; //importing the FeatureItem component
import './style.scss';

/**
 * Renders a list of features.
 * @returns {JSX.Element} The rendered list of features.
 */
const FeatureList = () => {
    const { features } = featureData;
    return (
        <section className='features'>
            {features.map((item , index) => (
                <FeatureItem key={`feature-${index}`} title={item.title} description={item.description} iconSrc={item.icon}  />
            ))}
        </section>
    );
};

export default FeatureList;