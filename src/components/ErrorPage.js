import React from 'react'

const ErrorPage = () => {
  return (
    <div className='w-screen h-[90vh] flex items-center justify-center flex-col'>
      <h1 className='text-xl extrabold'>UH - UnExpected Error</h1>
      <p className='faint inter'>Check your route and try again</p>
    </div>
  )
}

export default ErrorPage
