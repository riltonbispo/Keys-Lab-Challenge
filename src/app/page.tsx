'use client'

import Image from 'next/image'
import foxLogo from '@/app/assets/fox.png'
import keylabsLogo from '@/app//assets/logo.png'
import persona from '@/app/assets/persona.png'
import { Mail, LockKeyhole, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <main className="flex flex-col md:flex-row">
      <div className="flex items-center gap-2 absolute top-10 left-10">
        <Image src={keylabsLogo} alt="logo fox" />
        <span className="text-xl font-bold">Keylab</span>
      </div>
      <div className="bg-blue-600">
        <Image
          src={persona}
          alt="persona"
          className="max-h-80 object-cover md:min-h-screen flex-shrink"
        />
      </div>
      <div className="flex-1 p-6">
        <div className="max-w-96 my-16 mx-auto flex flex-col items-center">
          <h1 className="text-xl font-semibold">Entrar na conta</h1>
          <Image src={foxLogo} height={120} width={120} alt="logo fox" />
          <form className="flex flex-col gap-7 w-full">
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Mail className="w-5 h-5 text-zinc-700" />
              </div>
              <input
                className="w-full bg-transparent border ps-10 rounded-xl placeholder-zinc-700 text-zinc-300 border-zinc-600 p-4 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="nome@exemplo.com"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <LockKeyhole className="w-5 h-5 text-zinc-700" />
              </div>
              <input
                className="w-full bg-transparent border ps-10 rounded-xl placeholder-zinc-700 text-zinc-300 border-zinc-600 p-4 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="******"
              />
              <div
                className="absolute inset-y-0 end-0 flex items-center pe-3"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-zinc-700 cursor-pointer hover:text-zinc-500" />
                ) : (
                  <Eye className="w-5 h-5 text-zinc-700 cursor-pointer hover:text-zinc-500" />
                )}
              </div>
            </div>
            <a
              href="#"
              target="_blank"
              className="self-end text-right text-zinc-600 hover:text-zinc-500 underline underline-offset-2"
            >
              Esqueci minha senha
            </a>
            <button
              type="submit"
              className="bg-blue-600 py-4 rounded-full hover:bg-blue-800 text-zinc-950 font-bold"
            >
              Entrar na conta
            </button>
            <span className="text-zinc-600 text-center self-center">
              Ainda nao tem conta?{' '}
              <a
                href="#"
                target="_blank"
                className="hover:text-zinc-500 underline underline-offset-2"
              >
                Registre-se
              </a>
            </span>
          </form>
        </div>
      </div>
    </main>
  )
}
