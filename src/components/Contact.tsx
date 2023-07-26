import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'

const Contact = () => {
  return (
    <div>
      <div>
        <h2>Let us create awesome products</h2>
        <p>I am always open to discuss your project, improve your online presence, or help with your website design and convert challanges</p>
        <Link href="mailto:emranhossain0335@gmail.com">
          <button>Say Hello</button>
        </Link>
      </div>
      <div>
        <SocialLink/>
      </div>
    </div>
  )
}

export default Contact
