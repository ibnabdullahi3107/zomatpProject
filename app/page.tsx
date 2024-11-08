// Import necessary components
import ExploreOptions from "@/components/ExploreOptions";
import Footer from "@/components/Footer";
import RestaurantPage from "@/components/RestaurantPage";
import TrendingCard from "@/components/TrendingCard";

// Main Home Component
export default function Home() {
  return (
    <div className="m-10 space-y-8">
      {/* Trending Card Section */}
      <TrendingCard />

      {/* Restaurant Page Section */}
      <RestaurantPage />

      {/* Explore Options Section */}
      <ExploreOptions />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
