import React from "react"

const Footer = () => {
	return (
		<div className='bg-[#D9D9D9] h-[45px] flex flex-col md:flex-row items-center justify-center md:justify-around'>
			<p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
			<div className='flex gap-4'>
				<p>Terms & Conditions</p>
				<p>Privacy Policy</p>
			</div>
		</div>
	)
}

export default Footer
