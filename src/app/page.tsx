import Image from 'next/image'
import foxLogo from '@/assets/fox.png'
import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
    <>
      <h1 className="text-xl font-semibold">Entrar na conta</h1>
      <Image src={foxLogo} height={120} width={120} alt="logo fox" />
      <LoginForm />
    </>
  )
}
