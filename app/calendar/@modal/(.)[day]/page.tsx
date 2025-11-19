
import { Suspense } from 'react'
type $Props = {
  params: Promise<{ day: string }>
}
export default async function Day({ params }: $Props) {
  const day = (await params)?.day

  return (
    <div className='absolute bg-green-500'>
      <h1>Modal</h1>
      <Suspense>
        <Load day={day} />
      </Suspense>
    </div>
  )
}

async function Load({ day }: { day: string }) {

  return (
    <div >
      {day}
    </div>
  )
}
