'use client'

import React, { useState } from 'react'

interface FormData {
  name: string
  phone: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-beast-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            문의 & 상담
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            궁금한 점이 있으시면 언제든지 연락주세요. 친절하게 상담해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">연락처 정보</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-beast-red rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">전화번호</p>
                    <p className="text-gray-300">031-123-4567</p>
                  </div>
                </div>

                {/* KakaoTalk */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-sm">카톡</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">카카오톡 상담</p>
                    <p className="text-gray-300">@코비짐</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">인스타그램</p>
                    <p className="text-gray-300">@korean_beast_gym</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beast-red rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">운영시간</p>
                    <div className="text-gray-300 text-sm">
                      <p>평일: 06:00 - 23:00</p>
                      <p>주말: 08:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">💬</span>
                카카오톡 상담하기
              </button>
              <button className="w-full bg-beast-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                <span className="mr-2">📞</span>
                전화 상담하기
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-beast-gray rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">문의하기</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-beast-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-beast-red transition-colors duration-300"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-beast-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-beast-red transition-colors duration-300"
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  문의내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-beast-dark border border-gray-600 rounded-lg text-white focus:outline-none focus:border-beast-red transition-colors duration-300 resize-none"
                  placeholder="궁금한 점이나 문의사항을 입력하세요"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-beast-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300"
              >
                문의 보내기
              </button>
            </form>

            <p className="text-gray-400 text-sm mt-4 text-center">
              문의 주신 내용은 24시간 내에 답변드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 