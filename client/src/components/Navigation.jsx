import React from 'react'

const Navigation = ({ web3Handler, account }) => {
    return (
    <nav className="bg-black_900 flex md:flex-col flex-row justify-between md:gap-[10px] sm:gap-[10px] h-[70px] md:h-[auto] sm:h-[auto] items-center px-[127px] sm:px-[20px] md:px-[40px] py-[14px] w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-[27px] w-[139px]"/>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">My Organizations</a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">My Certificates</a>
            </div>
          </div>
          <div className="hidden md:block">
          {account ? (
                <button onClick={web3Handler} className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">
                  {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </button>              
                 ) : (
                     <button onClick={web3Handler} className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Connect Wallet</button>              
                )}
           
          </div>
        </div>
      </div>
    </nav>
    )

}

export default Navigation;