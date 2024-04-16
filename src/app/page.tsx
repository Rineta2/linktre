'use client'

import Count from '@/components/count'

import { logoImg, heading, link, social } from "@/components/data/data"

import Image from "next/image"

import Link from "next/link"

import bg from '@/components/assets/bg.jpg'

import '@/components/scss/home.scss'
export default function page() {
  return (
    <section className="linktre">

      <div className="bg">
        <Image src={bg} alt="" />
      </div>

      <div className="linktre__container container grid">

        <div className="content">
          <article>

            {
              logoImg.map((item, index) => {
                return (
                  <div className="logo" key={index}>
                    <Image src={item.img} alt="logo" />
                  </div>
                )
              })
            }

            {
              heading.map((item, index) => {
                return (
                  <div className="heading" key={index}>
                    <h1>{item.title}</h1>
                    <h2>{item.text}</h2>
                  </div>
                )
              })
            }

            <Count />

            {
              link.map((item, index) => {
                return (
                  <div className="link" key={index}>
                    <Link href={item.links} target="_blank" rel="noopener noreferrer">
                      <span>{item.title}</span>
                    </Link>
                  </div>
                )
              })
            }

            <br />

            <div className="social">
              {
                social.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link href={item.links} target="_blank" rel="noopener noreferrer">{item.icons}</Link>
                    </div>
                  )
                })
              }
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}
