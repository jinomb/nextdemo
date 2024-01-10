import { fetchProducts } from "@/app/lib/db/datas";
export default async function Home() {
  const data = await fetchProducts();
  const prod: any = JSON.parse(data);
  return (
	<>
		<div>
		{
			prod ? 
				(
					<ul>
						{
							prod.map((item) => (
								<li key={item.fldUser_ID}>{item.fldUser_ID} {item.fldFirstName}</li>
							))
						}
					</ul>
				)
			:	(<h2>Data is loading</h2>)
		}
		</div>
	</>
  )
}