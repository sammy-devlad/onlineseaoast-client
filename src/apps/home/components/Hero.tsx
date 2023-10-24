import React from "react";
import { DesHero } from "@/types";

const Hero: React.FC<DesHero> = ({ title, currentPage, image }) => {
  return (
    <>
      <div className="heroSection setBg" data-bg={image}>
        <div className="hero-content">
          <div className="breadcrumb-area">
            <h2 className="title text-left">{title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {currentPage}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
