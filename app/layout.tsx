import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from "@/context/theme-context";
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], weight: '400',})

export const metadata = {
  title: 'Stavros Karadimitriou',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} dark:bg-zinc-900 dark:text-zinc-50 relative h-[5000px] pt-28 mx-auto max-w-screen-sm p-6 `}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Footer/>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body> 
    </html>
  )
}
