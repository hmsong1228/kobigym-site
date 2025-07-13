'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nameWidth, setNameWidth] = useState(0)
  const nameRef = useRef<HTMLSpanElement>(null)

  // 지도자 정보 배열 (2명으로 축소)
  const instructors = [
    {
      id: 1,
      name: "김준화",
      nickname: "Korean Beast",
      title: "MAXFC 2체급 챔피언",
      image: "/images/kim-junhwa.png",
      experience: "15년+",
      specialty: "킥복싱 & 주짓수",
      description: "MaxFC에서 2체급 챔피언 타이틀을 획득한 대한민국 최정상급 격투기 선수",
      achievements: [
        "MaxFC 2체급 챔피언",
        "격투기 경력 15년+",
        "킥복싱 & 주짓수 전문",
        "다수 선수 배출"
      ]
    },
    {
      id: 2,
      name: "이성호",
      nickname: "Iron Fist",
      title: "킥복싱 전문 코치",
      image: "/images/instructor-2.png", // 추가할 이미지
      experience: "12년+",
      specialty: "킥복싱 & 복싱",
      description: "국내 킥복싱 대회 다수 입상 경력의 전문 킥복싱 코치",
      achievements: [
        "킥복싱 전국대회 우승",
        "복싱 지도자 자격증",
        "격투기 경력 12년+",
        "주니어 선수 육성"
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about-section')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  // 이름 너비 측정
  useEffect(() => {
    if (nameRef.current) {
      setNameWidth(nameRef.current.offsetWidth)
    }
  }, [currentSlide, isVisible])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % instructors.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + instructors.length) % instructors.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentInstructor = instructors[currentSlide]

  return (
    <section id="about-section" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            전문 <span className="text-red-600">지도진</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with Slider */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-red-600 to-red-800 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Instructor Photo */}
                <div className="relative w-full h-full">
                  {/* 김준화 선수 사진이 제대로 표시되도록 수정 */}
                  {currentInstructor.id === 1 ? (
                    <Image
                      src="/images/kim-junhwa.png"
                      alt="김준화 - Korean Beast"
                      fill
                      className="object-cover transition-opacity duration-500"
                      priority
                      onError={(e) => {
                        console.log('Image failed to load:', e)
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-4xl font-black mb-2">{currentInstructor.name}</h3>
                        <p className="text-xl font-bold">{currentInstructor.nickname}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <p className="text-sm font-bold text-red-400 mb-1">{currentInstructor.title}</p>
                    <p className="text-2xl font-black">{currentInstructor.name}</p>
                    <p className="text-sm opacity-90">{currentInstructor.nickname}</p>
                  </div>
                </div>

                {/* Slider Navigation */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {instructors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-red-600' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600 rounded-full opacity-10"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`text-white transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="mb-8">
              <div>
                <span className="text-red-600 text-3xl md:text-4xl lg:text-5xl font-black block mb-3">{currentInstructor.nickname}</span>
                <span 
                  ref={nameRef} 
                  className="text-white text-4xl md:text-5xl lg:text-6xl font-black block inline-block"
                >
                  {currentInstructor.name}
                </span>
              </div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300 font-medium">
                {currentInstructor.description}
              </p>
              
              <div className="flex space-x-8">
                <div>
                  <p className="text-red-400 font-bold">경력</p>
                  <p className="text-white font-bold">{currentInstructor.experience}</p>
                </div>
                <div>
                  <p className="text-red-400 font-bold">전문분야</p>
                  <p className="text-white font-bold">{currentInstructor.specialty}</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-10">
              <h4 className="text-2xl font-bold mb-6 text-red-400">주요 경력</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentInstructor.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-4"></div>
                    <div>
                      <p className="font-bold text-white">{achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>지금 상담받기</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}