'use client';
import { ChevronDown, ChevronUp } from "lucide-react"; 
import { motion } from "framer-motion"; 
import { useState } from "react";

const ExploreOptions = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionToggle = (index) => {
        setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="bg-white py-8 px-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Explore options near me
            </h2>

            {/* Accordion - Popular Cuisines Near Me */}
            <motion.div
                className="border border-gray-300 rounded-lg shadow-sm p-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div
                    onClick={() => handleAccordionToggle(0)}
                    className="flex justify-between items-center cursor-pointer"
                >
                    <h3 className="text-lg font-semibold text-gray-800">
                        Popular Cuisines Near Me
                    </h3>
                    {openAccordion === 0 ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openAccordion === 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                    >
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <p>Bakery near me • Beverages near me • Biryani near me • Burger near me • Chinese near me • Desserts near me • Ice Cream near me • Juices near me • Kebab near me • Mughlai near me • North Indian near me • Pizza near me • Rolls near me • Sandwich near me • Seafood near me • Shake near me • Sichuan near me • South Indian near me • Street near me • Tea near me</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Accordion - Popular Restaurant Types Near Me */}
            <motion.div
                className="border border-gray-300 rounded-lg shadow-sm p-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div
                    onClick={() => handleAccordionToggle(1)}
                    className="flex justify-between items-center cursor-pointer"
                >
                    <h3 className="text-lg font-semibold text-gray-800">
                        Popular Restaurant Types Near Me
                    </h3>
                    {openAccordion === 1 ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openAccordion === 1 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                    >
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <p>Bakeries near me • Bars near me • Beverage Shops near me • Bhojanalya near me • Cafés near me • Casual Dining near me • Clubs near me • Cocktail Bars near me • Confectioneries near me • Dessert Parlors near me • Dhabas near me • Fine Dining near me • Food Courts near me • Food Trucks near me • Irani Cafes near me • Kiosks near me • Lounges near me • Microbreweries near me • Paan Shop near me • Pubs near me • Quick Bites near me • Sweet Shops near me</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Accordion - Top Restaurant Chains */}
            <motion.div
                className="border border-gray-300 rounded-lg shadow-sm p-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div
                    onClick={() => handleAccordionToggle(2)}
                    className="flex justify-between items-center cursor-pointer"
                >
                    <h3 className="text-lg font-semibold text-gray-800">
                        Top Restaurant Chains
                    </h3>
                    {openAccordion === 2 ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openAccordion === 2 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                    >
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <p>Biryani Blues • Burger King • Domino's • KFC • Krispy Kreme • McDonald's • Pizza Hut • WOW! Momo</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Accordion - Cities We Deliver To */}
            <motion.div
                className="border border-gray-300 rounded-lg shadow-sm p-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div
                    onClick={() => handleAccordionToggle(3)}
                    className="flex justify-between items-center cursor-pointer"
                >
                    <h3 className="text-lg font-semibold text-gray-800">
                        Cities We Deliver To
                    </h3>
                    {openAccordion === 3 ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openAccordion === 3 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                    >
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <p>Delhi NCR • Kolkata • Mumbai • Bengaluru • Pune • Jaipur • Hyderabad • Chennai • Ahmedabad • Chandigarh • Lucknow • Kochi • Nashik • Goa • Indore • Shimla • Ludhiana • Allahabad • Kanpur • Aurangabad • Ranchi • Visakhapatnam • Bhubaneswar • Coimbatore • Vadodara • Nagpur • Surat • Puducherry • Agra • Dehradun • Varanasi • Patna • Amritsar • Mangalore • Mysore • Udaipur</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default ExploreOptions;
