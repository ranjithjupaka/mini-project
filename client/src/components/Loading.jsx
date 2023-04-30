import React from 'react'

const Loading = () => {
  return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
              <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
            </div>
  )
}

export default Loading