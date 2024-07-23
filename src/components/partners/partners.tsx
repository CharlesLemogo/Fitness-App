'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface Partner {
  id: number;
  imageUrl: string;
  host: string;
}

const partners: Partner[] = [
  {
    id: 1,
    imageUrl: '/logo/c_logo3.png',
    host: 'Jim Kennelly',
  },
  {
    id: 2,
    imageUrl: '/logo/logo_6.jpeg',
    host: 'Jim Kennelly',
  },
  {
    id: 3,
    imageUrl: '/partners_logo/c_logo3-removebg-preview.png',
    host: 'Jim Kennelly',
  },
  {
    id: 4,
    imageUrl: '/partners_logo/logo_5png.jpg',
    host: 'Jim Kennelly',
  },
  {
    id: 5,
    imageUrl: '/partners_logo/logo_5png.jpg',
    host: 'Jim Kennelly',
  },
  {
    id: 6,
    imageUrl: '/partners_logo/logo-ipsum-3.png',
    host: 'Jim Kennelly',
  },
];

export default function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoScroll()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <>
    <div className=' bg-[#2c2a26] pt-4'>
    <h1 className='text-4xl font-bold text-center  text-white'>Our Partners</h1>
    </div>
    <div className="embla h-[40vh]" ref={emblaRef}>
    <div className="embla__container ">
      {partners.length > 0 ? (
        partners.map((partner) => (
          <div key={partner.id} className="embla__slide p-2 ">
            <Link href={`/`}>
              <Image
                src={partner.imageUrl}
                width={300}
                height={300}
                alt={partner.host}
                className=" w-full h-full"
              />
            </Link>
          </div>
        ))
      ) : (
        <p>No partners available</p>
      )}
    </div>
  </div>
  </>
    );
}
