/* eslint-disable tailwindcss/classnames-order */

import Link from "next/link"

interface Props {
  title: string
  image: string
  link: string
  keyWords: string[]
  text: string
}

const BlogCard: React.FC<Props> = ({ image, keyWords, link, text, title }) => {
  return (
    <Link href={link} className="w-full bg-white sm:w-[47%] lg:w-[31%]">
      <article className="flex flex-col">
        <div>
          <img src={image} alt={title} />
        </div>
        <div className="p-4">
          <h1 className="text-[20px] font-medium">{title}</h1>
          <p className="my-4 text-[11px] text-gray-400">
            {keyWords.map((keyword) => {
              return <span key={keyword}>{keyword} </span>
            })}
          </p>
          <p>{text}</p>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
