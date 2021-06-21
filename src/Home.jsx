import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from './components/RecipeCard.jsx'

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="-mt-48">
        <h1 className="text-8xl font-bold text-gray-800">
          Smart Recipe Prototype
        </h1>

        <div className="mt-12 max-w-lg mx-auto">
          <Link to="/recipe/chicken-rice-soup">
            <RecipeCard
              title="Chicken & Rice Soup"
              author="Harry Smith"
              portions={2}
              timings={[15, 30]}
              tags={["quick", "easy"]}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
