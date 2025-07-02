import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Korean Beast Gym - 코비짐 | MaxFC 챔피언 김준화',
  description: 'MaxFC 챔피언 김준화가 운영하는 코리안 비스트 짐. 킥복싱, 주짓수, 그룹 펑셔널 피트니스 프로그램을 제공합니다.',
  keywords: '코비짐, 김준화, MaxFC, 킥복싱, 주짓수, 병점, 헬스장, 격투기',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 