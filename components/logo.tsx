import Image from "next/image"
import React from "react"

export const Logo = () => {
	return (
		<div className="flex items-center bg-[121618]">
			<Image src='/img/Logo.svg' alt='Logo' width={86} height={100} />
			<div className="hidden md:flex flex-col gap-3 items-start">
				<Image
					src='/img/DEEP NET.svg'
					alt='Logo'
					width={100}
					height={100}
				/>
				<Image
					src='/img/SOFT.svg'
					alt='Logo'
					width={50}
					height={100}
				/>
			</div>
		</div>
	)
}
