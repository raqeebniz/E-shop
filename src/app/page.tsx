import Image from 'next/image';
import { client } from './lib/sanityClient'
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../sanity/lib/image';

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    description,
    title,
    image,
    category -> {
      name
    }
  }`);
  return res
}


interface IProduct {
  title: string,
  _id: string
  description: string,
  image: IImage,
  price: number,
  category: {
    name:string,
  }
}


export default async function Home() {

  const data: IProduct[] = await getProductData()
console.log(data)
return (
  <div className='grid grid-cols-[repeat(4,auto)] justify-center gap-x-10'> 
    {data.map((item) => (
      <div className=' '>
        <Image 
        width={200} 
        height={200}
        className='max-h-[200px] object-cover object-top'
        src={urlForImage(item.image).url()} alt='product' />
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <h3>{item.description}</h3>
        <button className='border py-2 px-6 rounded bg-blue-600 text-white'>Add to Cart</button>
      </div>
    ))}
  </div>
)
}
