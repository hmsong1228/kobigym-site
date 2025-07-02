'use client'

import React from 'react'

export default function ProgramSection() {
  const programs = [
    {
      title: '킥복싱',
      subtitle: 'Kickboxing',
      description: '실전 킥복싱 기술을 배우며 전신 근력과 심폐지구력을 향상시킵니다.',
      features: ['기초 자세부터 고급 콤비네이션', '실전 스파링 훈련', '체중 감량 효과'],
      difficulty: '초급 ~ 고급',
      duration: '60분',
      color: 'from-red-600 to-red-800'
    },
    {
      title: '주짓수',
      subtitle: 'Brazilian Jiu-Jitsu',
      description: '브라질리안 주짓수의 정교한 기술과 전략적 사고를 배웁니다.',
      features: ['그라운드 파이팅 기술', '서브미션 테크닉', '셀프 디펜스'],
      difficulty: '초급 ~ 고급',
      duration: '90분',
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: '그룹 펑셔널 피트니스',
      subtitle: 'Group Functional Fitness',
      description: '일상 생활에 필요한 기능적 움직임을 강화하는 그룹 트레이닝입니다.',
      features: ['코어 강화 운동', '전신 근력 향상', '팀워크 빌딩'],
      difficulty: '초급 ~ 중급',
      duration: '45분',
      color: 'from-green-600 to-green-800'
    }
  ]

  return (
    <section className="py-20 bg-beast-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            트레이닝 프로그램
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            MaxFC 챔피언의 노하우가 담긴 전문 프로그램으로 당신의 목표를 달성하세요
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-beast-gray rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                <p className="text-sm opacity-90">{program.subtitle}</p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">주요 특징</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-beast-red rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Info */}
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-gray-400">난이도: </span>
                    <span className="text-white font-medium">{program.difficulty}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">시간: </span>
                    <span className="text-white font-medium">{program.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <button className="w-full bg-beast-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                  체험 신청
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            어떤 프로그램이 나에게 맞을지 궁금하신가요?
          </p>
          <button className="bg-white text-beast-dark hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
            무료 상담 받기
          </button>
        </div>
      </div>
    </section>
  )
} 