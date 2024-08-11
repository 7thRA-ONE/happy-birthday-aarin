import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from './ui/button'

export const Whatsapp: FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <section className={`w-full py-10 ${className} border-y border-[#854CE6]`}>
            <div className="pb-8 flex flex-col items-center space-y-4">
                <h2 className="text-3xl font-bold text-center text-[#C8CFD8]">Come back</h2>
                <p className="text-center text-sm pt-1 text-[#F2F5F7]">Hope you enjoyed!!!</p>
            </div>
            <div className="px-4 md:px-6 bg-transparent flex flex-col items-center justify-center">
                <Link href="https://chat.whatsapp.com/CDi26omRonACmxDS5BCbrP">
                    <Button className="bg-[#854CE6] hover:bg-[#6a3eb5] text-[#F2F5F7]">Let's Go!</Button>
                </Link>
            </div>
            <div className="px-4 md:px-6 bg-transparent flex flex-col items-center justify-center">
                <Link href="/wish">
                    <Button className="bg-[#854CE6] hover:bg-[#6a3eb5] text-[#F2F5F7]">You can wish Zubi here</Button>
                </Link>
            </div>
        </section>
    )
}
