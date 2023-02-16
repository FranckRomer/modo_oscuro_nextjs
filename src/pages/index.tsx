import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className=''>
        <section className='mt-16'>
          <h1 className='text-6xl font-bold '>Hi I'm <span className='dark:text-purple-600 text-blue-500'>Franck</span></h1>
          <h3 className='text-3xl my-3'>I am web Designer</h3>
          <p className='text-gray-700 mb-8 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat sequi sunt voluptatum corporis voluptatibus cumque facere, vel molestias magni.</p>
        </section>
        <Button className='bg-purple-600 text-white px-6'>Contact me!</Button>
      </main>
    </>
  )
}
