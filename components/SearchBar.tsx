"use client"

import React, { useState } from 'react'
import { SearchManufacturer } from './'


const SearchBar = () => {
    const [manufacturer, setMenufacturer] = useState('');
    const handleSearch = () =>{}
  
    return (
    <form className='searchbar' onSubmit=
    {handleSearch}>
        <div className='serchbar__item'>
            <SearchManufacturer
             manufacturer ={manufacturer}
             setMenufacturer = {setMenufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar