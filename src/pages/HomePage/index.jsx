import FeatureList from '../../container/FeatureList';
import Banner from '../../components/Banner';
import './style.scss';

function Homepage() {
  return (
    <main className="homepage main" data-testid ="Home">
      <Banner UrlImg={'/img/bank-tree.jpeg'}/>
     < FeatureList/>
    </main>
  );
}

export default Homepage;