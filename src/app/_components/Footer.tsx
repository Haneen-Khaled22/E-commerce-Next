import React from 'react'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <footer className="text-gray-700 p-6 w-full shadow-top bg-gray-100 bottom-fixed">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-xl font-bold">
              Delicious Recipes © {new Date().getFullYear()}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-lg">
              <a href="#" className="text-gray-700 hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700 hover:text-white transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-700 hover:text-white transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      );
}

export default Footer
