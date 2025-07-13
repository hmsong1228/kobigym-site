'use client'

import React, { useState, useEffect } from 'react'

export default function ProgramSection() {
  const [isVisible, setIsVisible] = useState(false)

  const programs = [
    {
      id: 1,
      title: '킥복싱 그룹 PT',
      subtitle: 'Kickboxing Group PT',
      description: '기본 동작부터 실전 기술까지 체계적으로 배우는 킥복싱 그룹 레슨입니다.',
      schedule: [
        { name: '스트레칭 및 기술 훈련', detail: '워밍업 및 킥, 펀치 기술 반복 훈련', time: '10분' },
        { name: '콤비네이션 트레이닝', detail: '펀치와 킥 콤비네이션 실습', time: '10분' },
        { name: '미트 트레이닝', detail: '미트 타격 연습', time: '10분' },
        { name: '맨즈 스파링', detail: '실전 스파링 / 주머니 변경', time: '5-10분' }
      ],
      totalTime: '40-50분',
      difficulty: '초급 ~ 고급',
      icon: '🥊',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 2,
      title: '주짓수 그룹 PT',
      subtitle: 'Jiu-Jitsu Group PT',
      description: '브라질리안 주짓수의 기본기부터 고급 기술까지 단계별로 학습합니다.',
      schedule: [
        { name: '기초 드릴', detail: '에너지 플로우, 움직임 준비', time: '5분' },
        { name: '기술 진도', detail: '주짓수 기술 습득', time: '10분' },
        { name: '스파링', detail: '실전 응용 훈련', time: '20분' },
        { name: '컨디셔닝', detail: '체력, 근지구력 훈련', time: '10분' }
      ],
      totalTime: '40-45분',
      difficulty: '초급 ~ 고급',
      icon: '🥋',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 3,
      title: '크로스핏',
      subtitle: 'CrossFit Training',
      description: '고강도 인터벌 트레이닝으로 전신 근력과 지구력을 동시에 향상시키는 그룹 운동입니다.',
      schedule: [
        { name: '워밍업', detail: '관절 가동성 및 준비운동', time: '10분' },
        { name: '스킬 워크', detail: '기술 연습 및 폼 교정', time: '15분' },
        { name: 'WOD', detail: '고강도 메인 운동', time: '15분' },
        { name: '쿨다운', detail: '스트레칭 및 마무리', time: '5분' }
      ],
      totalTime: '45분',
      difficulty: '초급 ~ 중급',
      icon: '💪',
      color: 'from-green-600 to-green-800'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('program-section')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="program-section" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            트레이닝 <span className="text-red-600">프로그램</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            체계적인 커리큘럼으로 구성된 전문 그룹 레슨을 경험해보세요
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-6xl opacity-10">
                  {program.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-1">{program.title}</h3>
                  <p className="text-sm opacity-90 font-medium">{program.subtitle}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                  {program.description}
                </p>

                {/* Schedule */}
                <div className="mb-6">
                  <h4 className="text-white font-bold mb-4 text-red-400">수업 구성</h4>
                  <div className="space-y-3">
                    {program.schedule.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-800 p-3 rounded-lg">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-white font-bold text-sm">{item.name}</span>
                          <span className="text-red-400 font-bold text-xs">{item.time}</span>
                        </div>
                        <p className="text-gray-400 text-xs">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Info */}
                <div className="bg-gray-800 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-400">총 소요 시간:</span>
                    <span className="text-white font-bold">{program.totalTime}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">난이도:</span>
                    <span className="text-white font-bold">{program.difficulty}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  체험 신청하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-black text-white mb-4">
              어떤 프로그램이 나에게 맞을지 궁금하신가요?
            </h3>
            <p className="text-gray-400 mb-6 font-medium">
              전문 트레이너가 개인별 맞춤 상담을 통해 최적의 프로그램을 추천해드립니다
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>무료 상담 받기</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}