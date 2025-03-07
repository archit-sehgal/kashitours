import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./KashiReviewsSlider.css"; // Add this file for custom styles

const reviews = [
  { name: "Aarav Sharma", comment: "A divine experience! Kashi is truly magical." },
  { name: "Neha Verma", comment: "Loved the Ganga Aarti! Must visit once in a lifetime." },
  { name: "Rohan Iyer", comment: "Spiritual peace and positivity everywhere." },
  { name: "Sanya Kapoor", comment: "Kashi Vishwanath Temple visit was unforgettable." },
  { name: "Vikram Joshi", comment: "The energy of this place is unmatchable." },
  { name: "Meera Nair", comment: "A soulful journey, felt truly blessed." },
  { name: "Harsh Tiwari", comment: "Mesmerizing sunrise boat ride on the Ganga." },
  { name: "Pooja Das", comment: "Vibrant ghats and divine atmosphere." },
  { name: "Amit Mishra", comment: "Sarnath and temples were a peaceful retreat." },
  { name: "Kavya Reddy", comment: "The spiritual aura of Kashi is beyond words!" },
  { name: "Rajesh Menon", comment: "Perfect place for meditation and self-discovery." },
  { name: "Shreya Pandit", comment: "Kashi’s history and culture amazed me!" },
  { name: "Siddharth Bhat", comment: "Felt so connected to our traditions." },
  { name: "Ishita Rao", comment: "Ghats, temples, and local food were incredible!" },
  { name: "Aditya Kulkarni", comment: "Would love to visit again with my family." },
  { name: "Priya Chatterjee", comment: "Best pilgrimage destination in India!" },
  { name: "Arjun Desai", comment: "The chanting and aartis gave me goosebumps!" },
  { name: "Sneha Patil", comment: "Must visit for every Hindu seeking peace." },
  { name: "Manoj Bhardwaj", comment: "The evening Ganga Aarti was mesmerizing." },
  { name: "Riya Saxena", comment: "Felt truly blessed after the Kashi Yatra." },
];

const KashiReviewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">⭐Kashi Tour Reviews✨</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card flex">
            <p className="review-name">{review.name}</p>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KashiReviewsSlider;
