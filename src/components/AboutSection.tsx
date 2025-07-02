'use client'

import React from 'react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-beast-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-beast-red to-red-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center text-white text-6xl font-bold">
                김준화
              </div>
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">MaxFC Champion</p>
                  <p className="text-xs opacity-75">Korean Beast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              MaxFC 챔피언
              <span className="block text-beast-red">김준화</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                <strong className="text-white">"Korean Beast"</strong>로 불리는 김준화는 MaxFC에서 
                챔피언 타이틀을 획득한 대한민국 최고의 격투기 선수입니다.
              </p>
              
              <p>
                10년 이상의 격투기 경험과 수많은 승리를 바탕으로, 이제 그의 노하우와 
                철학을 여러분과 나누고자 합니다.
              </p>
              
              <p>
                <strong className="text-beast-red">코비짐</strong>에서는 단순한 운동이 아닌, 
                진정한 파이터의 정신력과 체력을 기를 수 있습니다.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-beast-red">주요 경력</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-beast-red rounded-full mr-3"></span>
                  MaxFC 챔피언 (현재)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-beast-red rounded-full mr-3"></span>
                  격투기 경력 10년+
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-beast-red rounded-full mr-3"></span>
                  킥복싱 & 주짓수 전문 지도자
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-beast-red rounded-full mr-3"></span>
                  다수의 아마추어 선수 배출
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 