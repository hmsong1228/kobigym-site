'use client'

import React, { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // 폰트 로딩 완료 후 애니메이션 시작
    const checkFonts = async () => {
      try {
        await document.fonts.ready
        setFontsLoaded(true)
      } catch (error) {
        // 폰트 로딩 실패 시에도 3초 후 표시
        setTimeout(() => setFontsLoaded(true), 3000)
      }
    }
    checkFonts()
  }, [])

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Video button clicked!')
    setIsModalOpen(true)
  }
  
  const handleCloseModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    console.log('Closing modal...')
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

        {/* Content Container - PC에서 더 왼쪽으로 이동 + 아래로 이동 */}
        <div className="relative z-10 w-full max-w-screen-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`w-full max-w-full md:max-w-3xl flex flex-col items-center md:items-start transition-opacity duration-800 md:-translate-x-20 lg:-translate-x-24 translate-y-8 md:translate-y-12 ${fontsLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            {/* Main Heading */}
            <h1 
              className="w-full max-w-[95%] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-beast-red tracking-tight leading-tight text-center md:text-left break-words whitespace-normal"
              style={{ 
                fontWeight: '900',
                marginBottom: '28px',
                fontFamily: 'Pretendard, system-ui, sans-serif'
              }}
            >
              KOBY GYM
            </h1>

            {/* Subtitle */}
            <h2 
              className="w-full max-w-[95%] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed text-center md:text-left break-words whitespace-normal"
              style={{ 
                fontWeight: '800',
                marginBottom: '28px',
                fontFamily: 'Pretendard, system-ui, sans-serif'
              }}
            >
              복싱 · 킥복싱 · 주짓수 · 크로스핏
            </h2>

            {/* Description */}
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold break-words whitespace-normal max-w-[95%] leading-snug px-2 text-center md:leading-relaxed md:text-left md:px-0 md:max-w-2xl text-gray-300"
              style={{ 
                fontWeight: '700',
                marginBottom: '28px',
                fontFamily: 'Pretendard, system-ui, sans-serif'
              }}
            >
              <span className="md:hidden">
                MAXFC 2체급 챔피언 김준화가 운영하는<br />
                병점 유일 격투기 체육관
              </span>
              <span className="hidden md:inline">
                MAXFC 2체급 챔피언 김준화가 운영하는 병점 유일 격투기 체육관
              </span>
            </p>

            {/* CTA Buttons */}
            <div 
              className="w-full max-w-[95%] flex flex-col md:flex-row items-center md:items-start"
              style={{ gap: '28px' }}
            >
              <a 
                href="#contact" 
                className="w-full md:w-56 h-12 md:h-14 bg-beast-red hover:bg-red-700 text-white font-bold py-3 px-4 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center whitespace-nowrap"
                style={{ 
                  fontWeight: '800',
                  fontFamily: 'Pretendard, system-ui, sans-serif'
                }}
              >
                지금 무료 상담하기
              </a>
              
              <button 
                onClick={handleVideoClick}
                onMouseDown={(e) => e.preventDefault()}
                className="w-full md:w-56 h-12 md:h-14 bg-white/20 hover:bg-white hover:text-black border-2 border-white text-white font-bold py-3 px-4 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer relative z-30"
                style={{ 
                  fontWeight: '800',
                  fontFamily: 'Pretendard, system-ui, sans-serif'
                }}
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
            {/* 닫기 버튼 - 영상 위 우상단 */}
            <button
              onClick={handleCloseModal}
              type="button"
              className="absolute top-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white w-10 h-10 rounded-full shadow-lg font-bold z-30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20"
              style={{ 
                fontWeight: '800',
                fontFamily: 'Pretendard, system-ui, sans-serif'
              }}
              title="영상 닫기"
            >
              ✕
            </button>

            {/* 추가 닫기 버튼 - 영상 외부 우상단 */}
            <button
              onClick={handleCloseModal}
              type="button"
              className="absolute -top-12 md:-top-16 right-0 bg-white text-black w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2 rounded-lg shadow-lg font-bold z-20 flex items-center justify-center transition-all duration-300 hover:bg-gray-100 cursor-pointer"
              style={{ 
                fontWeight: '800',
                fontFamily: 'Pretendard, system-ui, sans-serif'
              }}
            >
              <span className="md:hidden">✕</span>
              <span className="hidden md:inline">✕ 닫기</span>
            </button>
            
            {/* 유튜브 영상 */}
            <div className="w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/M3l4ZJY1lkY?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1"
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
        }

        /* 폰트 강제 적용 */
        * {
          font-family: 'Pretendard', system-ui, sans-serif !important;
        }
      `}</style>
    </>
  )
}