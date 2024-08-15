import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


type TProps ={
  children: React.ReactNode
}
export default function RootLayout({children,}: Readonly<TProps>) {
  return (
    <html lang="en">
      <body>
      <div className='headerdiv'>
      <HeaderComponent/>
      </div>
      {children}
      </body>
    </html>
  );
}
