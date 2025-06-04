import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabir Ud Din | Software Engineer</title>
        <meta name="description" content="Personal portfolio of Sabir Ud Din" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}