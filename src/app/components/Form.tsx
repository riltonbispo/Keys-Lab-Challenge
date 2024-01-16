'use client'

import { Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '../schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './Input'

type DataProps = z.infer<typeof loginSchema>

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  })

  console.log(errors)

  return (
    <form
      className="flex flex-col gap-7 w-full"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Input
        {...register('email')}
        placeholder="nome@exemplo.com"
        type="email"
        icon={<Mail className="w-5 h-5 text-zinc-700" />}
        helper={errors.email?.message}
      />
      <Input
        {...register('password')}
        placeholder="******"
        type="password"
        helper={errors.password?.message}
      />
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
  )
}

export default Form
