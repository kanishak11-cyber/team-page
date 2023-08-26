
import Team from './components/team/page'
import Mentor from './components/mentor/page'
import Advisor from './components/advisor/page'
export default function Home() {
  return (
    <div className='md:px-28 px-3 '>
      <Team />
      <Mentor />
      <Advisor />
    </div>
  )
}
