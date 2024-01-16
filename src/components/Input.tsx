import { LockKeyhole, EyeOff, Eye } from 'lucide-react'
import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
  helper?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div className="relative">
        {type === 'password' ? (
          <>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <LockKeyhole className="w-5 h-5 text-zinc-700" />
            </div>
            <input
              className={`w-full bg-transparent border ps-10 rounded-xl placeholder-zinc-700 text-zinc-300 border-zinc-600 p-4 focus:outline-none focus:ring focus:ring-blue-300 ${props.helper && 'border-red-500 focus:ring-red-300'}`}
              ref={ref}
              type={showPassword ? 'text' : 'password'}
              {...props}
            />
            <div
              className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-zinc-700 hover:text-zinc-500" />
              ) : (
                <Eye className="w-5 h-5 text-zinc-700 hover:text-zinc-500" />
              )}
            </div>
            {props.helper && (
              <span className="text-red-600 font-semibold absolute left-0 bottom-[-24px]">
                {props.helper}
              </span>
            )}
          </>
        ) : (
          <>
            {props.icon && (
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                {props.icon}
              </div>
            )}
            <input
              className={`w-full bg-transparent border ps-10 rounded-xl placeholder-zinc-700 text-zinc-300 border-zinc-600 p-4 focus:outline-none focus:ring focus:ring-blue-300 ${props.helper && 'border-red-500 focus:ring-red-300'}`}
              type={type}
              {...props}
              ref={ref}
            />
            {props.helper && (
              <span className="text-red-600 font-semibold absolute left-0 bottom-[-24px]">
                {props.helper}
              </span>
            )}
          </>
        )}
      </div>
    )
  },
)

export default Input
