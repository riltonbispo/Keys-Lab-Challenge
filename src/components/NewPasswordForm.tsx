'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '../schema/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './Input'

import { useId } from 'react'

type DataProps = z.infer<typeof loginSchema>

const NewPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataProps>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  })

  const idNewPassword = useId()
  const idNewPasswordConfirm = useId()

  return (
    <form
      className="flex flex-col gap-7 w-full"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div></div>
      <label htmlFor={idNewPassword}>
        <span className="text-zinc-300">Digite sua senha</span>
        <Input
          id={idNewPassword}
          {...register('password')}
          placeholder="******"
          type="password"
          helper={errors.password?.message}
        />
      </label>
      <label htmlFor={idNewPasswordConfirm}>
        <span className="text-zinc-300">Confirme a senha</span>
        <Input
          id={idNewPasswordConfirm}
          {...register('password')}
          placeholder="******"
          type="password"
          helper={errors.password?.message}
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 py-4 rounded-full hover:bg-blue-800 text-zinc-950 font-bold"
      >
        Redefinir senha
      </button>
    </form>
  )
}

export default NewPasswordForm
