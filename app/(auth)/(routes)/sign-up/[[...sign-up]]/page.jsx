import { SignedOut } from '@clerk/nextjs'

const page = () => {
  return (
    <div>
      <SignedOut />
    </div>
  )
}

export default page