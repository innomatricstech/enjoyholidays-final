import React, { useEffect, useState } from "react";
import GalleryBg from "../../assets/GalleryBg.webp";

// 🔥 Firestore
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch gallery images from Firestore
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const q = query(
          collection(db, "gallery"),
          orderBy("createdAt", "desc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      {/* 🔹 Gallery Banner */}
      <img
        src={GalleryBg}
        alt="Gallery Banner"
        className="h-[50vh] w-full object-cover object-center"
      />

      {/* 🔹 Gallery Section */}
      <div className="container mx-auto py-10 px-4 my-12">
        <h2 className="text-3xl font-semibold text-center mb-10">
          A Sneak Peek at the Captured Moments at Enjoy Holidays
        </h2>

        {/* 🔄 Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading gallery...</p>
        )}

        {/* ❌ No Images */}
        {!loading && images.length === 0 && (
          <p className="text-center text-gray-500">
            No images uploaded yet
          </p>
        )}

        {/* 🖼️ Gallery Images - Changed to grid layout for better alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item) => (
            <div key={item.id} className="w-full">
              <img
                src={item.imageUrl}
                alt={item.title || "Gallery Image"}
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;