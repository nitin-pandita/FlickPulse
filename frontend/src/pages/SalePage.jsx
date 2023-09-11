import React, { useEffect, useState } from "react";
import "./SaleStyle.css";

const SalePage = () => {
  return (
    <div className="bg-black w-[100%] flex justify-center h-[100vh]">
      <main className="main flow ">
        <h1 className="main__heading font-Mont flex flex-col relative">
          Pricing{" "}
          <span className="w-[20%] h-1 bg-white absolute bottom-0 left-[40%] top-16"></span>
        </h1>
        <div className="main__cards cards font-Mont">
          <div className="cards__inner">
            <div className="bg-primary card">
              <h2 className="card__heading">Basic</h2>
              <p className="card__price">$9.99</p>
              <ul role="list" className="card__bullets flow">
                <li>Access to standard movie plans</li>
                <li>Email support</li>
              </ul>
              <a href="#basic" className="card__cta cta">
                Get Started
              </a>
            </div>
            <div className="bg-[#800080] card">
              <h2 className="card__heading">Pro</h2>
              <p className="card__price">$19.99</p>
              <ul role="list" className="card__bullets flow">
                <li>Access to advanced movies and webseries plans</li>
                <li>Priority Email support</li>
                <li>Exclusive access to live Q&A sessions</li>
              </ul>
              <a href="#pro" className="card__cta cta">
                Upgrade to Pro
              </a>
            </div>
            <div className="bg-[#ffd900d2] card">
              <h2 className="card__heading">Ultimate</h2>
              <p className="card__price">$29.99</p>
              <ul role="list" className="card__bullets flow">
                <li>Access to all premium webseries plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual live shows every month</li>
                <li>Exclusive content and early access to new features</li>
              </ul>
              <a href="#ultimate" className="card__cta cta">
                Go Ultimate
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalePage;
