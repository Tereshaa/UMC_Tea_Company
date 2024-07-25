import React from "react";
import "./ShowTesti.css";
import { TestimonialCard } from "../Testimonials/Testimonials";

export function Testimonials() {
  return (
    <div className="demo-container">
      <div className="testimonials-header">
        <h1 className="main-title">What Our Customers Are Saying</h1>
        <h2 className="subtitle">Hear from our satisfied customers about their favorite UMC Tea blends</h2>
      </div>
      <TestimonialCard
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Amazing taste, smells great and rich in color. They have different varieties  of flavours and prices are best in the town. I strongly recommend UMC Tea Leaves.",
    name: "Venu Ammineni",
  },
  {
    quote:
      "All products are good and healthy..also tea test is awesome..every morning with that smell only our family will wakeup..Thank you UMC😘",
    name: "Bharathi Gadadesi",
  },
  {
    quote: "All types of tea and coffee are available and bulk as well as retail products available. Excellent quality of products👌👌",
    name: "Shyamballi Sai Dilip",
  },
  {
    quote:
      "We got Best taste with good quality of tea leaves here.",
    name: "Hemalatha S",
  },
  {
    quote:
      "I've tried numerous green teas, but UMC Tea's Green Tea stands out with its rich flavor and refreshing aroma. It's my go-to drink for relaxation and rejuvenation.",
    name: "Y Teresha",
  },
  {
    quote:
      "UMC Tea's Masala Tea blend is absolutely phenomenal. The perfect balance of spices makes every sip an invigorating experience. It has become a staple in my morning routine.",
    name: "S Ruchitha",
  }
];
