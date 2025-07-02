'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-black text-white mb-2">
                KOREAN BEAST GYM
              </h3>
              <p className="text-beast-red font-bold text-lg">코비짐</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              MaxFC 챔피언 김준화가 직접 운영하는 전문 격투기 체육관입니다. 
              진정한 파이터의 정신으로 당신의 한계를 뛰어넘으세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">바로가기</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-beast-red transition-colors duration-300">
                  김준화 소개
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-beast-red transition-colors duration-300">
                  프로그램
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-beast-red transition-colors duration-300">
                  위치 안내
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-beast-red transition-colors duration-300">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">프로그램</h4>
            <ul className="space-y-2 text-gray-400">
              <li>킥복싱 (Kickboxing)</li>
              <li>주짓수 (Brazilian Jiu-Jitsu)</li>
              <li>그룹 펑셔널 피트니스</li>
              <li>개인 트레이닝</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">연락처</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📍 경기도 화성시 병점동 123-45</p>
              <p>📞 031-123-4567</p>
              <p>💬 카카오톡: @코비짐</p>
              <p>📧 info@koreanbeastgym.com</p>
            </div>
            
            {/* Social Media */}
            <div className="mt-4">
              <h5 className="text-white font-semibold mb-3">SNS</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Business Info */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>상호명: 코리안 비스트 짐 | 대표: 김준화</p>
              <p>사업자등록번호: 123-45-67890 | 통신판매업신고번호: 제2024-화성병점-0001호</p>
            </div>
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Korean Beast Gym. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 