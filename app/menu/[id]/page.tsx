import ItemList from "@/components/dataList/itemList"
import { CreateItem } from "@/components/form/createItem"
import React from "react"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const slug = (await params).id

	return (
		<div>
			<CreateItem id={slug} />
            <ItemList id={slug} />
		</div>
	)
}

export default Page
