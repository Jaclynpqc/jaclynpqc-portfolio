'use client';
import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function HeroSection(){
    return(
        <div className = "bg-seashell blur-sm">
            <div className = "relative isolate overflow-hidden">
                <div className = "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className = "text-center">
                        <h1 className = "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            McCarthy Family
                        </h1>
                        <p className = "mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Family is one of the most important things in our lives. Taking time to appreciate our loved ones for all that they do helps us to connect and reconnect as a family. Families boost our confidence and make us feel loved. Our family is the pillar of our strength – Never falling and keeping us strong so that we become better people. Through our families we learn the value of love, respect, traditions, cultures, faith and the celebration of life. 
                        </p>
                    </div>

                    <div className = "mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {['/img/hero/img1.png','/img/hero/img2.png','/img/hero/img3.png','/img/hero/img4.png','/img/hero/img5.png'].map((src,index) => (
                            <Image
                            key = {index}
                            src = {src}
                            alt = {'Family photo ${index +1}'}
                            width = {300}
                            height = {200}
                            className = "rounded-lg shadow-md object-cover h-48 w-full"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}