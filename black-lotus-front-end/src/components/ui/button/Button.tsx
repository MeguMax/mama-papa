import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'dark' | 'light'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-2xl font-semibold shadow-md px-6 py-2',
				{
					'bg-black text-white': variant === 'dark',
					'bg-white text-black': variant === 'light'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
