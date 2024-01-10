import { callProducts } from "@/app/lib/db/db";
export async function fetchProducts() {
	try {
		const response = await callProducts("SELECT fldUser_ID,fldFirstName,fldLastName FROM tbluser LIMIT 10", []);
		const data = JSON.stringify(response);
		return data;
	}
	catch (error) {
		console.log(error);
		throw new Error("Failed to fetch revenue data.");
	}
}