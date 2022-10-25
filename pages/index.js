import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Link href='/about'>About</Link>
      <h1>Homepage</h1>
    </div>
  )
}
