import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Image src='/vercel.svg' width={100} height={100} />
      <h1>Homepage</h1>
    </div>
  )
}
