import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const whiteText = classnames('text-white')
const grayText = classnames('text-gray-300')

const headerText = classnames(
  whiteText,
  'text-3xl',
  'md:text-6xl',
  'font-bold',
  'text-center',
  'mb-3'
)
export const HeaderText: FC = ({ children }) => {
  return <p className={headerText}>{children}</p>
}

const subheaderText = classnames(
  whiteText,
  'text-xl',
  'md:text-2xl',
  'font-bold',
  'text-center',
  'my-6'
)
export const SubheaderText: FC = ({ children }) => {
  return <p className={subheaderText}>{children}</p>
}

const bodyText = classnames(grayText, 'text-center')
export const BodyText: FC = ({ children }) => {
  return <p className={bodyText}>{children}</p>
}

const linkText = classnames('underline')
interface LinkTextProps {
  link: string
}
export const LinkText: FC<LinkTextProps> = ({ children, link }) => {
  return (
    <span className={linkText}>
      <a href={link} rel="noreferrer noopener">
        {children}
      </a>
    </span>
  )
}
