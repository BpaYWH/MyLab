import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import Introduction from '@/components/homePage/Introduction';

const inter = Inter({ subsets: ['latin'] });
const styles = "flex w-screen h-screen px-4 py-8 gap-6 sm:flex-col xs:flex-col overflow-x-hidden fixed font-nunito";

export const metadata = {
  title: 'My Component Laboratory',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="wrapperDiv" className={inter.className + " " + styles}>
          <Image
            src="/assets/image/background-global.PNG"
            alt="Global Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div id="bgDiv" className="font-caveat text-9xl font-bold text-gray-500 sm:text-7xl opacity-60">
            <h1 className="absolute top-[10%] left-[5%]">
              Code
            </h1>
            <h1 className="absolute bottom-[12%] left-[28%]">
              Create
            </h1>
            <h1 className="absolute top-[28%] right-[8%]">
              Inspire
            </h1>
          </div>

          <Introduction />
          
          <div id="WorkDiv" className="relative basis-full h-full flex flex-col justify-between px-8 pt-8 bg-white bg-opacity-90 rounded-md shadow-lg overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
