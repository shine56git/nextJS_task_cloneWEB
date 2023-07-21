
import Header from '@/components/header/NavHeader'
import { Inter } from 'next/font/google'
import Homex from "../components/Home/Home"
import HeadPage from '@/components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Homex />
  
}
