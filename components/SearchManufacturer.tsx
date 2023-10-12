"use client"

import React, { Fragment, useState } from 'react'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constant'


const SearchManufacturer = ({manufacturer, setMenufacturer}: SearchManufacturerProps ) => {
    const [query, SetQuery] = useState('');


    const filteredManufacturers = query ==="" ?
    manufacturers : manufacturers.filter((item)=>(
        item.toLowerCase().replace(/\s+/g,"")
        .includes(query.toLowerCase().replace(/\s+/g,""))
    ))


  return (
    <div className='serch-menufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                        src='/car-logo.svg'
                        width={20}
                        height={20}
                        className='m1-4'
                        alt='Car Logo'
                    />
                </Combobox.Button>

                <Combobox.Input
                    className='search-menufacturer__input'
                    placeholder='Volkswagen'
                    displayValue={(item:string)=>item
                    }
                    onChange={(e)=> SetQuery(e.target.value)}
                />
                <Transition
                 as={Fragment}
                 leave='transition ease-in duration-100'
                 leaveFrom='opacity-100'
                 leaveTo='= opacity-0'
                 afterLeave={()=>SetQuery('')}
                 >
                    <Combobox.Options>
                        {
                            filteredManufacturers.map((item)=>(
                                <Combobox.Option
                                    key={item}
                                    className={({active})=>
                                    `relative search-manufacturer__option
                                    ${ active ? "bg-primary-blue text-white" : "text-gray-900"}
                                        `}
                                    value={item}
                                    
                            >

                                </Combobox.Option>
                            ))
                        }
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
    
  )
}

export default SearchManufacturer