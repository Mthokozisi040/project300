import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center">
            Only view When logged in
        </div>
        <Footer/>
    </div>
  )
}

export default page
