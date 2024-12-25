"use client"
import React, { useEffect } from "react"
import { Separator } from "../ui/separator"
import { useRouter } from "next/navigation"

type Item = {
	id: string
	name: string
	description: string
	price: number
}

const ItemList = ({ id }: { id: string }) => {
    const route = useRouter()
	const fetchData = async () => {
		const res = await fetch("http://localhost:3001/items", {
			method: "POST",
			body: JSON.stringify({ menuId: id }),
		})
		const data = await res.json()
		return data
	}

	const [data, setData] = React.useState([])
	
	useEffect(() => {
		fetchData().then((data) => setData(data))
	}, [])

	return (
		<div className='flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-black'>
			<p className='text-2xl font-bold uppercase'>menuList</p>
			{data.map((item: Item) => {
				return (
					<div
						key={item.id}
                        onClick={() => route.push(`/menu/${item.id}`)}
						className='hover:bg-slate-100 rounded-2xl cursor-pointer p-2'>
						<div className='flex flex-col md:flex-row gap-5'>
							<p>Item Name: {item.name}</p>
							<p>Item Description: {item.description}</p>
							<p>Item Price: {item.price}</p>
						</div>
						<Separator />
					</div>
				)
			})}
		</div>
	)
}

export default ItemList
