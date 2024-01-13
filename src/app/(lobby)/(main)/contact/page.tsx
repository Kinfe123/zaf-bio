'use client'

import { JSX, SVGProps } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


type ContactType = {
  name: string, 
  email: string , 
}
export default function ContactUsComp() {
  const [contactDetail , setContactDetail] = useState({})
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl text-black dark:text-white md:text-6xl my-10 font-heading">
          Any Questions ?
        </h1>
      </div>
      <div className="mx-auto mb-10 flex h-full max-w-7xl flex-col justify-between md:flex-row">
        <div className="w-full space-y-4 p-4 md:w-1/2">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              (+251 11) 6 29 21 67 - General Manager
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              (+251 11) 6 29 23 88 - Technical Manager
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              {" "}
              (+251 11) 6 29 19 48 - Marketing Manager
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              (+251 11) 6 29 23 79 - Admini & Finance Manager
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              {" "}
              (+251 11) 6 29 26 02 - Local & Foreign procurement
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              (+251 11) 6 29 19 52 / 652 64 06 – Sales
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              (+00251 11) 6 29 24 19 Fax: (+251 11) 6 9 24 06
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <MailIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              {" "}
              zafg@zafpharma.com
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <LocateIcon className="h-6 w-6" />
            <p className="text-gray-500 dark:text-gray-400">
              Gerji Road (Behind NOC station), Bole subcity, Addis Ababa,
              Ethiopia
            </p>
          </div>
        </div>
        <div className="w-full space-y-4 p-4 md:w-1/2">
          <h2 className="text-3xl font-bold">Send us a message</h2>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter the subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <Button>Send message</Button>
        </div>
      </div>
    </div>
  )
}

function LocateIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
