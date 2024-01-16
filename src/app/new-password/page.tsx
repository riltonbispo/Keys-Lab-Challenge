import Image from 'next/image'
import foxLogo from '@/assets/fox.png'
import NewPasswordForm from '@/components/NewPasswordForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const NewPassword = () => {
  return (
    <>
      <h1 className="text-xl font-semibold">Redefinir senha</h1>
      <Image src={foxLogo} height={120} width={120} alt="logo fox" />
      <NewPasswordForm />
      <Link href="/" className="w-full">
        <button className="bg-blue-600 hover:bg-blue-800 text-zinc-950 p-2.5 rounded-full absolute top-10 right-10">
          <ArrowLeft />
        </button>
      </Link>
    </>
  )
}

export default NewPassword
