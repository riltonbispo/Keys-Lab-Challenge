import Image from 'next/image'
import foxLogo from '@/app/assets/fox.png'
import keylabsLogo from '@/app//assets/logo.png'
import persona from '@/app/assets/persona.png'
import Form from '@/app/components/Form'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <header className="flex items-center gap-2 absolute top-10 left-10">
        <Image src={keylabsLogo} alt="logo fox" />
        <span className="text-xl font-bold">Keylab</span>
      </header>
      <div className="bg-blue-600">
        <Image
          src={persona}
          alt="persona"
          className="max-h-80 object-cover md:min-h-screen flex-shrink"
        />
      </div>
      <div className="flex-1 px-6">
        <div className="max-w-96 my-16 mx-auto flex flex-col items-center">
          <h1 className="text-xl font-semibold">Entrar na conta</h1>
          <Image src={foxLogo} height={120} width={120} alt="logo fox" />
          <Form />
        </div>
      </div>
    </main>
  )
}
