import logo from '@/components/assets/logo.png'

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";

export const logoImg = [
  {
    img: logo
  }
]

export const heading = [
  {
    id: 1,
    title: 'rineta.io',
  },

  {
    id: 2,
    text: 'New Year',
  }
]

export const link = [
  {
    id: 1,
    title: 'My Portfolio',
    links: 'https://rizkiramadhan-five.vercel.app/',
  },

  {
    id: 2,
    title: 'My Bisnis',
    links: 'https://rineta.vercel.app/',
  },
]

export const social = [
  {
    id: 1,
    icons: <FaFacebookF />,
    links: 'https://www.facebook.com/rizkiramadhan/'
  },

  {
    id: 2,
    icons: <FaInstagram />,
    links: 'https://www.instagram.com/rineta.io?igsh=NG4zdzhkcjkxbnNo'
  },

  {
    id: 3,
    icons: <FaTiktok />,
    links: 'https://www.tiktok.com/@rineta.io?_t=8l0LeyikXkG&_r=1'
  },

  {
    id: 4,
    icons: <TbBrandShopee />,
    links: 'https://shopee.co.id/shop/891580543'
  },
]