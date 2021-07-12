import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/auth/sign-in')
  }, [router]);


  return (
    <div className={styles.container}>
      indexPage
    </div>
  )
}
