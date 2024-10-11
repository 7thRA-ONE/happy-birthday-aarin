import Header from '@/components/Header'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Footer from '@/components/Footer'
import RQProvider from '@/utils/RQProvider'

export const metadata = {}
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>NikhilDay!!! 🎂</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#00012B" /> {/* Updated to Footer Background color */}
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#00012B" /> {/* Updated to Footer Background color */}
                <meta property="og:title" content="Nikhil Day! 🎂" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://happy-birthday-urara.vercel.app/" />
                <meta property="og:image" content="/og.png" />
                <meta property="og:description" content="Happy Birthday Nikhil!" />
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    <RQProvider>
                        <main className="bg-gradient-to-t from-[#E0FFFF] via-[#A2F1FD] to-[#00FFFF] min-h-screen">
                            {children}
                        </main>
                    </RQProvider>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
