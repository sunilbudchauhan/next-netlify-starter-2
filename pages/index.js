import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Stock research team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="UNDER CONSTRUCTION" />
        <p className="description">
          New site loading soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
