"use client"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

type Inputs = {
	menuId: string
	name: string
	description: string
	price: number
}
export const CreateItem = ({ id }: { id: string }) => {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		console.log(data)
        data.menuId = id
		const res = await fetch("http://localhost:3001/item-create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
		console.log(res.ok)
	}

	return (
		<div className='flex flex-col gap-4 p-5 border-2 shadow-lg m-5 rounded-2xl border-black'>
			<p className='text-2xl font-bold uppercase'>ADD ITEM TO MENU</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<Label>Item Name</Label>
					<Input
						placeholder='Menu Name'
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<span className='text-red-500 text-xs'>
							This field is required
						</span>
					)}
				</div>
				<div className='flex flex-col gap-2'>
					<Label>Item Description</Label>
					<Input
						placeholder='Menu Description'
						{...register("description", { required: true })}
					/>
					{errors.description && (
						<span className='text-red-500 text-xs'>
							This field is required
						</span>
					)}
				</div>
				<div className='flex flex-col gap-2'>
					<Label>Item Price</Label>
					<Input
						step={0.01}
						type='number'
						placeholder='Menu Description'
						{...register("price", { required: true })}
					/>
					{errors.description && (
						<span className='text-red-500 text-xs'>$$$</span>
					)}
				</div>

				<Button type='submit'>Submit</Button>
			</form>
		</div>
	)
}
