// this is Footer.jsx code
import React from 'react'

const Footer = () => {
    return (
        <div className="relative bg-gray-950 border-t  border-gray-800/60 mt-auto overflow-hidden">

            {/* Ambient glow blobs */}
            <div className="absolute bottom-0 left-1/4 w-64 h-24 bg-green-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-24 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Top shimmer line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-6">

                {/* Logo */}
                <div className="relative group cursor-default select-none flex items-center gap-1">
                    <div className="absolute -inset-2 bg-green-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative font-extrabold text-lg tracking-tight text-violet-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)] group-hover:drop-shadow-[0_0_16px_rgba(74,222,128,0.7)] transition-all duration-300 group-hover:scale-105">
                        &lt; <span className="text-white">कार्य</span>म् /&gt;
                    </div>
                </div>

                {/* Tagline */}
                <p className="text-gray-500 text-sm text-center tracking-wide">
                    Securely store & manage your passwords — all in one place.
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 text-xs text-gray-600">
                    <span>© {new Date().getFullYear()} <span className="text-violet-500/70">कार्यम्</span>. All rights reserved.</span>

                    

                    <div className="flex items-center gap-1">
                        <span>Made By</span>
                       <span className="text-violet-500 animate-pulse mx-0">♥</span>
                        <span>PRIYANSHU-using React & Tailwind</span>
                    </div>
                   <div
                     href="https://twitter.com"
                     target="_blank"
                     rel="noreferrer"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-blue-400 transition-colors duration-200 group/twitter"
               >
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/twitter:scale-110 group-hover/twitter:rotate-12"fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.163-10.141-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.808 2.104-6.115 2.104-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.962-.695 1.8-1.562 2.46-2.549z" />
                    </svg>
                    <a href="https://x.com/PriyanshuK33564" target="_blank">Twitter</a>
                   </div>
                    <div
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-gray-500 hover:text-pink-700 transition-colors duration-200 group/gh"
                    >
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/gh:scale-110 group-hover/gh:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        <a href="https://www.instagram.com/alone_in_life_823?igsh=cjZhbXIybGxqN2tj" target="_blank">Instagram</a>
                    </div>
                    <div
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors duration-200 group/gh"
                    >
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/gh:scale-110 group-hover/gh:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <a href="https://www.linkedin.com/in/priyanshu-kumar-b7148632b/" target="_blank">Linkedin</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer