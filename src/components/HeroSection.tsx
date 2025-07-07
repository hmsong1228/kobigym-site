'use client'

import React, { useState } from 'react'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1596495577886-d920f1fb7238)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-beast-red mb-4 tracking-tight leading-tight">
              KOBY GYM
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 mb-8 leading-relaxed">
              복싱 · 킥복싱 · 주짓수 · 크로스핏
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              MAXFC 2체급 챔피언 김준화가 운영하는 병점 유일 격투 체육관
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href="#contact" 
                className="bg-beast-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                지금 무료 상담하기
              </a>
              <button 
                onClick={openModal}
                className="border-2 border-white text-white hover:bg-white hover:text-beast-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 text-center"
              >
                하이라이트 영상 보기
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full max-w-4xl mx-4 aspect-video">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-beast-red text-2xl font-bold z-10"
            >
              ✕ 닫기
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="KOBY GYM Highlight Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  )
}