import React from 'react'
import SignInButton from '../_components/SignInButton'
import SignInWithFacebookButton from '../_components/signInWithFacebook'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
       
            <div className="flex flex-col items-center justify-center h-screen ">
      <SignInButton />
      <p className="text-gray-600 py-2">or</p>
      <SignInWithFacebookButton/>
     
</div>
             
    )
}

export default Page
