'use client'

import React, { useState } from 'react'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleVideoClick = () => {
    console.log('Video button clicked!') // 디버깅용
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    console.log('Closing modal...') // 디버깅용
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpeg)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-screen-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-full md:max-w-3xl flex flex-col items-center md:items-start">
            {/* Main Heading */}
            <h1 className="w-full max-w-[95%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-beast-red mb-2 md:mb-4 tracking-tight leading-tight text-center md:text-left break-words whitespace-normal animate-fade-in-up" style={{ fontWeight: '900' }}>
              KOBY GYM
            </h1>

            {/* Subtitle */}
            <h2 className="w-full max-w-[95%] text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-7 leading-relaxed text-center md:text-left break-words whitespace-normal animate-fade-in-up animation-delay-100 md:animation-delay-200" style={{ fontWeight: '700' }}>
              복싱 · 킥복싱 · 주짓수 · 크로스핏
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium break-words whitespace-normal max-w-[95%] leading-snug px-2 text-center md:leading-relaxed md:text-left md:px-0 md:max-w-2xl text-gray-300 mb-5 md:mb-7 animate-fade-in-up animation-delay-200 md:animation-delay-400" style={{ fontWeight: '500' }}>
              <span className="md:hidden">
                MAXFC 2체급 챔피언 김준화가 운영하는<br />
                병점 유일 격투기 체육관
              </span>
              <span className="hidden md:inline">
                MAXFC 2체급 챔피언 김준화가 운영하는 병점 유일 격투기 체육관
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="w-full max-w-[95%] flex flex-col md:flex-row gap-3 md:gap-6 items-center md:items-start animate-fade-in-up animation-delay-300 md:animation-delay-600">
              <a 
                href="#contact" 
                className="w-full md:w-56 h-12 md:h-14 bg-beast-red hover:bg-red-700 text-white font-bold py-3 px-4 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center whitespace-nowrap"
                style={{ fontWeight: '700' }}
              >
                지금 무료 상담하기
              </a>
              
              {/* 영상 버튼 - 단순화된 버전 */}
              <button 
                onClick={handleVideoClick}
                className="w-full md:w-56 h-12 md:h-14 bg-white/20 hover:bg-white hover:text-black border-2 border-white text-white font-bold py-3 px-4 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer relative z-20"
                style={{ fontWeight: '700' }}
                type="button"
              >
                <span className="text-lg hidden md:inline">▶</span>
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              type="button"
              className="absolute -top-12 md:-top-16 right-0 bg-white text-black w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 rounded-lg shadow-lg font-bold z-20 flex items-center justify-center transition-all duration-300 hover:bg-gray-100 cursor-pointer"
              style={{ fontWeight: '700' }}
            >
              <span className="md:hidden">✕</span>
              <span className="hidden md:inline">✕ 닫기</span>
            </button>
            
            {/* 실제 작동하는 격투기 하이라이트 영상 */}
            <div className="w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yPYZpwSpKmA?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1"
                title="KOBY GYM Highlight Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        /* 폰트 굵기 강제 적용 */
        h1 {
          font-weight: 900 !important;
        }
        
        h2 {
          font-weight: 700 !important;
        }
        
        .font-bold {
          font-weight: 700 !important;
        }
        
        .font-medium {
          font-weight: 500 !important;
        }

        /* iframe 로딩 개선 */
        iframe {
          border: none;
          outline: none;
        }

        /* 버튼 클릭 확실히 하기 */
        button {
          pointer-events: auto !important;
        }
      `}</style>
    </>
  )
}