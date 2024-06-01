import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from './ui/button'

export const Whatsapp: FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <section className={`w-full py-10 ${className} border-y border-green-200`}>
            <div className="pb-8 flex flex-col items-center space-y-4">
                <h2 className="text-3xl font-bold text-center">Come back</h2>

                <p className="text-center text-sm pt-1">hope you enjoyed!!!</p>
            </div>
            <div className="px-4 md:px-6 bg-transparent flex flex-col items-center justify-center">
                <Link href="https://chat.whatsapp.com/CDi26omRonACmxDS5BCbrP">
                    <Button className="bg-green-300 hover:bg-green-400">Let's Go!</Button>
                </Link>
            </div>
        </section>
    )
}
