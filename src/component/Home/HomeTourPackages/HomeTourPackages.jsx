import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const HomeTourPackages = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 AOS init
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // 🔥 Fetch services from Firestore
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const q = query(
          collection(db, "services"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("🔥 Tour services:", data);
        setServices(data);
      } catch (error) {
        console.error("❌ Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto my-12" data-aos="fade-up">
      {/* 🔹 Heading */}
      <div className="flex items-center mb-4 px-4 md:px-2">
        <div className="w-1 h-10 bg-amber-400 mr-4"></div>
        <h1 className="text-3xl text-zinc-600 font-medium">
          Some of our{" "}
          <span className="text-amber-500">Tour Packages</span>
        </h1>
      </div>

      {/* 🔹 Loader */}
      {loading && (
        <p className="text-center text-gray-500">
          Loading tour packages...
        </p>
      )}

      {/* 🔹 Carousel */}
      {!loading && services.length > 0 && (
        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
          {services.map((tour) => (
            <div key={tour.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                
                {/* 🔹 Image */}
                <div className="relative p-4">
                  <img
                    src={tour.imageUrl}
                    alt={tour.title}
                    className="w-full h-36 object-cover rounded"
                  />
                </div>

                {/* 🔹 Content */}
                <div className="p-4">
                  <h3 className="text-xl text-gray-600 font-semibold">
                    {tour.title}
                  </h3>

                  {/* 🔹 Location */}
                  {tour.location && (
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <FaMapMarkerAlt className="mr-2 text-orange-500" />
                      <span>{tour.location}</span>
                    </div>
                  )}

                  {/* 🔹 Button */}
                  <div className="mt-4">
                    <Link to="/contact">
                      <button className="bg-amber-500 text-white py-2 px-5 hover:bg-zinc-900 transition duration-300">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}

      {/* 🔹 No data */}
      {!loading && services.length === 0 && (
        <p className="text-center text-gray-500">
          No tour packages available
        </p>
      )}
    </div>
  );
};

export default HomeTourPackages;