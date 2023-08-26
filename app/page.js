
import Team from './components/team/page'
import Mentor from './components/mentor/page'
import Advisor from './components/advisor/page'
import Header from './components/Header'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div >
      <Header />
      <div className='md:px-28 px-3  '>
      <Team />
      <Mentor />
      <Advisor />
      </div>
      <Footer />
    </div>
  )
}
