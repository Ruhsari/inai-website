"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Component11 from "../ui/HackathonCard";

export type FrameComponent1111Type = {
  className?: string;
};

const FrameComponent1111: NextPage<FrameComponent1111Type> = ({
  className = "",
}) => {
  const [component11Items] = useState([
    {
      maskGroup: "/photo-4@2x.png",
    },
    {
      maskGroup: "/photo-5@2x.png",
    },
    {
      maskGroup: "/photo-6@2x.png",
    },
  ]);
  return (
    <section
      className={`w-[1909px] flex items-start justify-center pt-0 px-num-20 pb-[161px] box-border max-w-full text-left text-[65px] text-darkslateblue-200 font-montserrat mq825:pb-[68px] mq825:box-border mq1275:pb-[105px] mq1275:box-border ${className}`}
    >
      <div className="w-[1619px] flex flex-col items-start gap-20 max-w-full mq825:gap-10 mq450:gap-5">
        <b className="relative leading-[130%] mq825:text-[52px] mq825:leading-[68px] mq450:text-[39px] mq450:leading-[51px]">
          Новости
        </b>
        <div className="self-stretch flex items-start justify-end max-w-full">
          <div className="w-[1556px] flex flex-col items-end gap-[95px] max-w-full mq825:gap-[47px] mq450:gap-6">
            <div className="self-stretch flex items-start justify-center flex-wrap content-start gap-[52px] max-w-full mq825:gap-[26px] mq825:grid-cols-[minmax(262px,_1fr)] mq1275:justify-center mq1275:grid-cols-[repeat(2,_minmax(262px,_455px))]">
              <section className="flex-1 shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white flex flex-col items-start justify-end pt-num-263 px-num-25 pb-num-27 box-border relative isolate gap-[8.5px] min-w-num-322 max-w-full z-[2] text-left text-[16px] text-midnightblue-100 font-poppins mq825:pt-num-171 mq825:pb-num-20 mq825:box-border">
                <div className="w-[1921px] !!m-[0 important] absolute right-[-1362px] bottom-[-250px] bg-midnightblue-100 flex items-start py-0 px-0 box-border shrink-0">
                  <div className="self-stretch w-[1927px] relative bg-midnightblue-100 hidden max-w-full" />
                  <Image
                    className="h-[650px] flex-1 relative max-w-full overflow-hidden shrink-0 z-[1]"
                    width={1927}
                    height={650}
                    sizes="100vw"
                    alt=""
                    src="/src="/images/line-news.svg"
                  />
                </div>
                <div className="w-num-350 h-num-480 relative shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white hidden max-w-full z-[1] shrink-0" />
                <Image
                  className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1] shrink-0"
                  width={350}
                  height={480}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/photo-3@2x.png"
                />
                <b className="w-num-243 relative leading-[130%] inline-block z-[2] shrink-0">
                  Внутреинститутский и межинститутский Хакатон
                </b>
                <div className="w-num-287 relative text-num-14 leading-[140%] font-montserrat text-dimgray inline-block z-[2] shrink-0">{`Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас!<br/>Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать `}</div>
                <div className="self-stretch flex items-start justify-end py-0 px-num-10 shrink-0">
                  <Image
                    className="h-num-11 w-full relative z-[2]"
                    loading="lazy"
                    width={18.3}
                    height={11}
                    sizes="100vw"
                    alt=""
                    src="/src="/images/ar-news.svg"
                  />
                </div>
              </section>
              {component11Items.map((item, index) => (
                <Component11 key={index} maskGroup={item.maskGroup} />
              ))}
            </div>
            <div className="w-[297px] flex items-start justify-end py-0 px-num-27 box-border">
              <button className="cursor-pointer border-white border-solid border-[1px] pt-num-18 px-[54px] pb-num-17 bg-[transparent] h-[65px] flex-1 rounded-2xl box-border flex items-start z-[2] hover:bg-gainsboro-300 hover:border-gainsboro-100 hover:border-solid hover:hover:border-[1px] hover:box-border">
                <div className="h-[65px] w-num-243 relative rounded-2xl border-white border-solid border-[1px] box-border hidden shrink-0" />
                <div className="w-[124px] relative text-[20px] leading-[130%] font-semibold font-poppins text-white text-left inline-block z-[1] shrink-0">
                  Все новости
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1111;
