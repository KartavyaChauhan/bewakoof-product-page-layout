import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProductSection from '../components/ProductSection';
import RecommendedProducts from '../components/RecommendedProducts';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Breadcrumb />
        <ProductSection />
        <RecommendedProducts />
      </main>
      <Footer />
    </div>
  );
}