'use client'

import React from 'react'

export default function LocationSection() {
  const gymImages = [
    { title: '메인 트레이닝 룸', description: '넓은 공간에서 자유롭게 운동하세요' },
    { title: '킥복싱 전용 구역', description: '전문 장비와 함께 킥복싱 훈련' },
    { title: '주짓수 매트', description: '안전한 매트에서 그라운드 훈련' },
    { title: '펑셔널 피트니스 존', description: '다양한 기능성 운동 기구' }
  ]

  return (
    <section className="py-20 bg-beast-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            짐 투어 & 위치
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            최신 시설과 전문 장비를 갖춘 코비짐을 둘러보세요
          </p>
        </div>

        {/* Gym Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {gymImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-beast-red to-red-800 aspect-square"
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                짐 사진 {index + 1}
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                  <p className="text-xs opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="bg-beast-dark rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-700 to-gray-900">
              <div className="flex items-center justify-center text-white text-xl font-bold">
                Google Maps
                <div className="block text-sm font-normal mt-2">
                  경기도 화성시 병점동
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6 text-beast-red">
              찾아오시는 길
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">주소</h4>
                <p className="text-gray-300">경기도 화성시 병점동 123-45</p>
                <p className="text-gray-400 text-sm mt-1">병점역 도보 5분 거리</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">대중교통</h4>
                <ul className="text-gray-300 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-beast-red rounded-full mr-3"></span>
                    지하철 1호선 병점역 2번 출구
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-beast-red rounded-full mr-3"></span>
                    버스 정류장: 병점역 앞
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">주차</h4>
                <p className="text-gray-300">무료 주차 가능 (30대)</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">운영시간</h4>
                <div className="text-gray-300 space-y-1">
                  <p>평일: 06:00 - 23:00</p>
                  <p>주말: 08:00 - 21:00</p>
                  <p className="text-beast-red text-sm">매월 둘째, 넷째 일요일 휴무</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-beast-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mr-4">
                길찾기
              </button>
              <button className="border-2 border-beast-red text-beast-red hover:bg-beast-red hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                전화하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 