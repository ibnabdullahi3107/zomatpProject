"use client";

import { Badge } from "@/components/ui/badge"; // Shadcn UI Badge
import { Skeleton } from "@/components/ui/skeleton"; // Shadcn UI Skeleton component
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"; // Framer Motion
import { Star } from "lucide-react"; // Lucide Star Icon
import Image from "next/image";
import { fetchRestaurants } from "../utils/fetchRestaurants";

// Variants for staggered animations and scroll-triggered motion
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1, // Stagger delay between each card
      type: "spring",
      stiffness: 60,
    },
  }),
};

// Skeleton component for loading state
const SkeletonCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="w-full h-40 rounded-lg" />
      {/* Content skeleton */}
      <div className="p-4">
        {/* Title skeleton */}
        <Skeleton className="w-3/4 h-5 mb-2 rounded-md" />
        {/* Restaurant chain skeleton */}
        <Skeleton className="w-1/2 h-4 mb-4 rounded-md" />
        {/* Discount badge and rating skeleton */}
        <div className="flex justify-between items-center mt-2">
          <Skeleton className="w-1/3 h-6 rounded-md" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="w-8 h-4 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

const RestaurantPage = () => {
  // Fetch data using React Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ["restaurants"],
    queryFn: fetchRestaurants,
  });

  if (isLoading)
    return (
      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );

  if (isError)
    return <p className="text-center text-red-500">Error fetching data</p>;

  if (!data || !data.menuItems)
    return <p className="text-center">No restaurants available</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data.menuItems.map((restaurant, index) => (
        <motion.div
          key={restaurant.id}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Restaurant Image */}
          <motion.div className="p-2" whileHover={{ scale: 1.05 }}>
            <Image
              src={restaurant.image}
              alt={restaurant.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover rounded-lg"
            />
          </motion.div>

          <div className="p-4">
            {/* Restaurant Title */}
            <h3 className="text-lg font-semibold">{restaurant.title}</h3>

            {/* Restaurant Chain */}
            <p className="text-sm text-gray-500">{restaurant.restaurantChain}</p>

            {/* Badge and Rating on the Same Line */}
            <div className="flex items-center justify-between mt-2">
              <Badge className="bg-blue-600 text-white">Flat 20% OFF</Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500" />
                <p className="ml-1 text-sm text-gray-700">4.5</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RestaurantPage;
