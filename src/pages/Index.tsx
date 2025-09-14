import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <HeroSection />
        <FeaturesGrid />
      </div>
    </Layout>
  );
};

export default Index;
