import Link from 'next/link'

function Navigation() {
  return (
    <nav>
        <Link href="/">
          <span>Home</span>
        </Link>

        <Link href="/age-guesser">
          <span>Age Guesser</span>
        </Link>
        
        <Link href="/people">
          <span>People</span>
        </Link>
    </nav>
  )
}

export default Navigation