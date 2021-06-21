import React, { useState } from 'react'
import { Switch } from '@headlessui/react'

import { CheckIcon } from '@heroicons/react/outline'

const CheckboxList = ({list}) => {
  return (
    <div class="flex flex-col space-y-1">
      { list.map((listItem) => (
        <Checkbox item={listItem} key={listItem} />
      )) }
    </div>
  )
}

const Checkbox = ({item}) => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Switch
        checked={checked}
        onChange={setChecked}
      >
        <div className="flex items-center">
          <div className="relative">
            <div className="h-8 w-8 rounded border-2 border-black rotate-3"></div>
            <CheckIcon className={`${
              checked ? 'block' : 'hidden'
            } top-0 left-0 h-8 w-8 absolute text-black-900`} />
          </div>
          <p className={`${
              checked ? 'line-through -rotate-3' : ''
            } ml-3 text-2xl`}>
            { item }
          </p>
        </div>
      </Switch>
    </>
  )
}

export default CheckboxList
