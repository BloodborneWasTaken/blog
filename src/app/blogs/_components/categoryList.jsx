import Link from "next/link"

async function categoryList() {
    const res = await fetch("http://localhost:5000/api/category/list")
    const  {
        data : { categories },
    } = await res.json
    console.log(categories)
return (
    <div className=' space-y-4'>
        <Link href="/blogs">همه</Link>
        {
            categories.map((category)=>{
                return (
                    <li key={category._id}>
                        <Link href={`/blogs/category/${category.slug}`}>
                            {category.title}
                        </Link>
                    </li>
                )
            })
        }
    </div>
  )
}

export default categoryList