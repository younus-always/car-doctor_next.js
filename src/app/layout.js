import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Doctor",
  description: "Car Servicing Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <Navber />
          <main>
            <Toaster />
            {children}
          </main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
