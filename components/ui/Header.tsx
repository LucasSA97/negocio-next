
export default function Header({children }: {children: React.ReactNode}) {
  return (
    <h1 className='text-2xl font-semibold my-10'>{children}</h1>
  )
}
