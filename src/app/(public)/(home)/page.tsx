import { ErrorBlock, HeroBlock, ProductList, Section } from '@/components'
import { HOME_TEXTS } from '@/config/home-page.config'

export default async function Home() {
	// const { data: products, error } = await fetchProducts()

	return (
		<div className="">
			<HeroBlock />

			<Section headingText={HOME_TEXTS.PRODUCT_LIST}>
				{/* {error || !products ? ( */}
				<ErrorBlock message="Не удалось загрузить меню" retryLink="/" />
				{/* ) : (
					<ProductList products={products} />
				)} */}
			</Section>
		</div>
	)
}
