import React from 'react'
import { Container, Logo, LogoutButton } from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className='bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg py-4'>
      <Container>
        <nav className='flex items-center justify-between'>
          <Link to='/' className='flex items-center space-x-2'>
            <Logo width='60px' />
          </Link>

          <ul className='flex items-center space-x-4'>
            {navItems.map((item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 rounded-full text-white bg-indigo-500 
                    hover:bg-indigo-400 transition duration-300 font-medium shadow-md'
                  >
                    {item.name}
                  </button>
                </li>
              )
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
