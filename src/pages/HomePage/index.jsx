import FeatureList from '../../container/FeatureList';
import Hero from '../../components/Hero';
import './style.scss';

function Homepage() {
  return (
    <main className="homepage" data-testid ="Home">
      <Hero UrlImg={'/img/bank-tree.jpeg'}/>
     < FeatureList/>
    </main>
  );
}

export default Homepage;