'use client'

import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-beast-dark via-beast-gray to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight">
            KOREAN
            <span className="block text-beast-red">BEAST</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-gray-300">
              GYM
            </span>
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            코비짐
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            MaxFC 챔피언 <span className="text-beast-red font-bold">김준화</span>가 직접 운영
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            진정한 파이터의 정신으로 당신의 한계를 뛰어넘으세요
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-beast-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            무료 체험 신청
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-beast-dark font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
            프로그램 보기
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}