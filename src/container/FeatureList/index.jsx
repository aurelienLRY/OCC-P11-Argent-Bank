import featureData from './FeatureData.json';
import FeatureItem from '../../components/FeatureItem';
import './style.scss';

const FeatureList = () => {
    const { features } = featureData;
    return (
        <section className='features'>
            {features.map((item , index) => (
                <FeatureItem key={`feature-${index}`} title={item.title} description={item.description} iconSrc={item.icon} />
            ))}
        </section>
    );
};

export default FeatureList;