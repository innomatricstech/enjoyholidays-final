import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import HomeHeroText from "./HomeHeroText";

const HomeHero = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch ALL banners from Firestore
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const q = query(
          collection(db, "banners"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const bannerData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBanners(bannerData);
      } catch (error) {
        console.error("❌ Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">

        {/* 🔄 Loading */}
        {loading && (
          <div className="flex items-center justify-center h-full bg-black text-white">
            Loading banners...
          </div>
        )}

        {/* 🚫 No banners */}
        {!loading && banners.length === 0 && (
          <div className="flex items-center justify-center h-full bg-black text-white">
            No banners available
          </div>
        )}

        {/* 🎞 Carousel */}
        {!loading && banners.length > 0 && (
          <Carousel
            autoPlay
            infiniteLoop
            showArrows
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            {banners.map((banner) => (
              <div key={banner.id} className="relative">
                <img
                  src={banner.imageUrl}
                  alt={banner.imageName || "Banner"}
                  className="object-cover w-full h-[300px] md:h-[500px]"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
            ))}
          </Carousel>
        )}
      </div>

      {/* Hero Text */}
      <HomeHeroText />
    </>
  );
};

export default HomeHero;
