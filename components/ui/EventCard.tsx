"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type Component111Type = {
  className?: string;
  prop: string;
  prop1?: string;

  /** Style props */
  divPadding?: CSSProperties["padding"];
  divGap?: CSSProperties["gap"];
};

const Component111: NextPage<Component111Type> = ({
  className = "",
  divPadding,
  divGap,
  prop,
  prop1,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      padding: divPadding,
      gap: divGap,
    };
  }, [divPadding, divGap]);

  return (
    <div
      className={`self-stretch shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white flex items-start pt-num-44 px-10 pb-num-42 box-border gap-[98px] max-w-full mq825:gap-[49px] mq450:gap-6 mq450:pt-num-29 mq450:pb-num-27 mq450:box-border mq1575:flex-wrap ${className}`}
      style={divStyle}
    >
      <div className="h-num-450 w-num-1622 relative shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white hidden max-w-full shrink-0" />
      <Image
        className="w-num-647 relative shadow-[12px_12px_53.2px_rgba(0,_0,_0,_0.1)] max-h-full object-cover max-w-full z-[1] shrink-0 mq1575:flex-1"
        loading="lazy"
        width={647}
        height={364}
        sizes="100vw"
        alt=""
        src={prop}
      />
      <section className="w-num-672 flex flex-col items-start pt-num-13 px-0 pb-0 box-border max-w-full shrink-0 text-left text-[16px] text-midnightblue-100 font-montserrat mq825:min-w-full mq1575:flex-1">
        <div className="self-stretch flex flex-col items-start gap-[26px]">
          <b className="relative text-num-36 leading-[130%] font-poppins z-[1] mq825:text-[29px] mq825:leading-[37px] mq450:text-[22px] mq450:leading-num-28">
            {prop1}
          </b>
          <div className="relative leading-[140%] text-gray z-[1]">
            Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон —
            именно для вас!
            <br />
            Это событие объединяет студентов разных направлений и институтов,
            чтобы вместе создавать инновационные проекты, решать реальные задачи
            и показать силу командной работы.
            <br />
            Хакатон
          </div>
          <div className="w-num-223 flex items-start justify-between gap-5 text-darkslategray">
            <Image
              className="h-num-55 w-[55px] relative z-[1]"
              loading="lazy"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/src="/images/ar-mer.svg"
            />
            <div className="flex flex-col items-start pt-num-17 px-0 pb-0">
              <div className="relative leading-[130%] font-semibold z-[1]">
                Узнать больше
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Component111;
