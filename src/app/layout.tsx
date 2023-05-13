import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/header'
import Footer from '../../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb: Ratings, Reviews, and Where to Watch the Best Movies &amp; TV Shows',
  description: 'IMDb is the world&#x27;s most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. Get personalized recommendations, and learn where to watch across hundreds of streaming providers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
