"use client";

import { useRef, useState, Fragment } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";

import Logo01 from "@/public/images/logo-001.svg";
import Logo02 from "@/public/images/logo-002.svg";
import Logo03 from "@/public/images/logo-003.svg";
import Logo04 from "@/public/images/logo-004.svg";
import Logo05 from "@/public/images/logo-005.svg";
import Logo06 from "@/public/images/logo-006.svg";
import Logo07 from "@/public/images/logo-007.svg";
import Logo08 from "@/public/images/logo-008.svg";
import Logo09 from "@/public/images/logo-009.svg";

export default function MethodologyPillars() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  // Tab Icons SVG
  const tabIcons = {
    brain: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path
          d="M10 2C8 2 6.5 3 6 4.5c-1 .3-1.5 1.2-1.5 2.5 0 .7.3 1.3.7 1.7-.3.4-.7 1-.7 1.8 0 1 .7 2 1.5 2.5.3 1.5 1.5 2.5 3 2.5s2.7-1 3-2.5c1-.3 1.5-1.5 1.5-2.5 0-.8-.4-1.4-.7-1.8.4-.4.7-1 .7-1.7 0-1.3-.5-2.2-1.5-2.5C13.5 3 12 2 10 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 9.5c0-.8.7-1.5 1.5-1.5M10 7v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <rect x="3" y="8" width="2.5" height="8" fill="currentColor" />
        <path d="M4.25 5v3M4.25 16v1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8.5" y="6" width="2.5" height="10" fill="currentColor" />
        <path d="M9.75 3v3M9.75 16v1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="14" y="10" width="2.5" height="6" fill="currentColor" />
        <path d="M15.25 7v3M15.25 16v1" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path
          d="M10 2L4 4.5v4.5c0 4 2.5 7.5 6 8.5 3.5-1 6-4.5 6-8.5V4.5L10 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 10l1.5 1.5 3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        <path
          d="M10 3v2M10 15v2M3 10h2M15 10h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Nuestra Metodología: 4 Pilares Interconectados
            </h2>
            <p className="text-lg text-gray-700">
              No basta con saber Fibonacci. Necesitas dominar tu mente primero,
              luego la técnica.
            </p>
          </div>

          <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
            {/* Tabs buttons */}
            <div className="flex justify-center">
              <TabList className="relative mb-8 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-[480px]:max-w-[280px] min-[480px]:mb-12">
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 0
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    {tabIcons.brain}
                    <span>Psicología</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 1
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    {tabIcons.chart}
                    <span>Análisis</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 2
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    {tabIcons.shield}
                    <span>Riesgo</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${
                      selectedTab === 3
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    {tabIcons.target}
                    <span>Ejecución</span>
                  </button>
                </Tab>
              </TabList>
            </div>

            {/* Panels */}
            <TabPanels className="relative flex h-[324px] items-center justify-center">
              {/* Small blue dots */}
              <div className="absolute -z-10">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={164}
                  height={41}
                  viewBox="0 0 164 41"
                  fill="none"
                >
                  <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                  <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                  <circle cx={1} cy={15} r={1} />
                  <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                  <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                  <circle cx={8} cy={8} r={1} />
                  <circle cx={8} cy={15} r={1} />
                  <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                  <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                  <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                  <circle cx={8} cy={33} r={1} />
                  <circle cx={1} cy={40} r={1} />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 7)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 0)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 25)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 32)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 7)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 25)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 14)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 25)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 32)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 39)"
                  />
                </svg>
              </div>

              {/* Blue glow */}
              <div className="absolute -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={432}
                  height={160}
                  viewBox="0 0 432 160"
                  fill="none"
                >
                  <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                    <path
                      className="fill-blue-500"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2044_9"
                      x={0}
                      y={0}
                      width={432}
                      height={160}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={32}
                        result="effect1_foregroundBlur_2044_9"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              {/* Horizontal lines */}
              <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-blue-500"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-blue-500"></div>

              {/* Diagonal lines */}
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>

              {/* Vertical lines */}
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>

              {/* Center logo - 20% más grande */}
              <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image
                      className="relative"
                      src={Logo01}
                      width={65}
                      height={65}
                      alt="Centro metodología"
                    />
                  </div>
                </div>
              </div>

              {/* Orbiting logos / content */}
              <div className="relative flex flex-col" ref={tabsRef}>
                {/* TAB 1 - Psicología */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 0}
                    className="flex h-full w-full items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300"
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={38}
                              height={38}
                              alt="Logo 02"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={38}
                              height={38}
                              alt="Logo 03"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={29}
                              height={26}
                              alt="Logo 04"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={38}
                              height={38}
                              alt="Logo 05"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={38}
                              height={38}
                              alt="Logo 06"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={38}
                              height={38}
                              alt="Logo 07"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={38}
                              height={38}
                              alt="Logo 08"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={38}
                              height={38}
                              alt="Logo 09"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>

                {/* TAB 2 - Análisis */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 1}
                    className="flex h-full w-full items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300"
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={38}
                              height={38}
                              alt="Logo 03"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={38}
                              height={38}
                              alt="Logo 04"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={38}
                              height={38}
                              alt="Logo 05"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={38}
                              height={38}
                              alt="Logo 02"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={38}
                              height={38}
                              alt="Logo 07"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={38}
                              height={38}
                              alt="Logo 06"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={38}
                              height={38}
                              alt="Logo 09"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={38}
                              height={38}
                              alt="Logo 08"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>

                {/* TAB 3 - Riesgo */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 2}
                    className="flex h-full w-full items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300"
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={38}
                              height={38}
                              alt="Logo 02"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={38}
                              height={38}
                              alt="Logo 03"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={38}
                              height={38}
                              alt="Logo 04"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={38}
                              height={38}
                              alt="Logo 05"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={38}
                              height={38}
                              alt="Logo 06"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={38}
                              height={38}
                              alt="Logo 07"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={38}
                              height={38}
                              alt="Logo 08"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={38}
                              height={38}
                              alt="Logo 09"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>

                {/* TAB 4 - Ejecución */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 3}
                    className="flex h-full w-full items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300"
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={38}
                              height={38}
                              alt="Logo 03"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={38}
                              height={38}
                              alt="Logo 04"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={38}
                              height={38}
                              alt="Logo 05"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={28}
                              height={26}
                              alt="Logo 02"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={38}
                              height={38}
                              alt="Logo 07"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={38}
                              height={38}
                              alt="Logo 06"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={38}
                              height={38}
                              alt="Logo 09"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={38}
                              height={38}
                              alt="Logo 08"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>
              </div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}

