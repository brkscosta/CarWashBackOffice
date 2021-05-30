import React from 'react'
import Head from 'next/head'

import Gitlogo from '../assets/gitLogo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next App</title>
      </Head>

      <Gitlogo />
      <h1>Hello World</h1>
      <p>Bolerplate template Next App</p>
    </Container>
  )
}

export default Home
