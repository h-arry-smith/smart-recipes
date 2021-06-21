import React from 'react'

const RecipeCard = ({title, author, portions, timings, tags}) => {
  return (
    <div className="flex items-center p-2 rounded-xl border select-none transition hover:-translate-y-2 hover:shadow cursor-pointer">
      
      <div className="h-24 w-24 flex-none bg-gray-200 rounded-xl">
      </div>
      
      <div className="flex-1 ml-4">
        <h2 className="text-lg leading-tight font-bold text-gray-900">
          {title}
        </h2>
        
        <p className="text-gray-700">
          <span className="italic text-gray-600 font-light">recipe by </span>
          {author}
        </p>

        <div className="space-x-2 text-gray-500">
          <span>{portions} portions</span>
          <span>{timings[0]}mins prep</span>
          <span>{timings[1]}mins cooking</span>
        </div>
        
        <div className="mt-1">
          <TagList tags={tags} />
        </div>
      </div>
      
    </div>
  )
}

const TagList = ({tags}) => (
  <ul className="flex">
    { tags.map((tag) =>
    <Tag tag={tag} />
    ) }
  </ul>
)

const Tag = ({tag}) => (
  <li>
    <div className="flex justify-center items-center py-1 px-2 mr-1 rounded-full bg-green-200">
      <span className="text-xs leading-none text-green-800 uppercase font-semibold">{tag}</span>
    </div>
  </li>
)

export default RecipeCard;
