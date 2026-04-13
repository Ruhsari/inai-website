import type { NextPage } from "next";
import Image from "next/image";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  // @ts-ignore
  return (
    <section
      className={`self-stretch bg-midnightblue-100 flex items-start justify-between pt-[115px] pb-[116px] pl-[153px] pr-[148px] box-border gap-5 max-w-full text-left text-[20px] text-white font-montserrat mq825:gap-5 mq825:pl-num-38 mq825:pr-num-37 mq825:box-border mq1275:gap-5 mq1275:pl-[76px] mq1275:pr-[74px] mq1275:box-border mq450:gap-5 mq450:pt-[75px] mq450:pb-[75px] mq450:box-border mq1575:flex-wrap mq1575:justify-center ${className}`}
    >
      <div className="h-[390px] w-[1920px] relative bg-midnightblue-100 hidden max-w-full shrink-0" />
      <div className="w-[168px] flex flex-col items-start gap-[8.2px] shrink-0">
        <div className="flex items-start py-0 px-[3px]">
          <Image
            className="flex-1 relative max-w-full overflow-hidden max-h-full w-full h-auto object-cover z-[1]"
            loading="lazy"
            width={128}
            height={109.8}
            sizes="100vw"
            alt=""
            src="/src="/images/logo_wh@2x.png"
          />
        </div>
        <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[150%] font-normal font-[inherit] z-[1] mq450:text-[16px] mq450:leading-num-24">
          INAI.KG © 2025
        </h3>
      </div>
      <div className="w-[658px] flex flex-col items-start max-w-full shrink-0">
        <div className="w-[291px] flex flex-col items-start gap-[11px] z-[1]">
          <h3 className="m-0 relative text-[24px] leading-[150%] font-bold font-[inherit] inline-block min-w-[128px] mq450:text-num-19 mq450:leading-[29px]">
            Контакты
          </h3>
          <h3 className="m-0 w-[197px] relative text-[length:inherit] leading-[150%] font-normal font-[inherit] inline-block mq450:text-[16px] mq450:leading-num-24">
            +996 500 549 238
          </h3>
          <div className="relative leading-[150%] inline-block min-w-[127px] mq450:text-[16px] mq450:leading-num-24">
            info@inai.kg
          </div>
          <div className="self-stretch relative leading-[150%] mq450:text-[16px] mq450:leading-num-24">
            Анкара 1/5, Бишкек
          </div>
        </div>
      </div>
      <div className="flex items-end gap-[34.5px] shrink-0 text-[24px] mq450:gap-[17px]">
        <div className="flex-1 flex flex-col items-start gap-[26px]">
          <b className="relative leading-[150%] z-[1] mq450:text-num-19 mq450:leading-[29px]">
            Мы в соц. сетях
          </b>
          <div className="self-stretch flex items-start py-0 px-num-1">
            <div className="flex-1 flex items-start justify-between gap-5">
              <Image
                className="w-num-43 relative max-h-full object-cover z-[1]"
                width={43}
                height={43}
                sizes="100vw"
                alt=""
                src="/src="/images/whats@2x.png"
              />
              <Image
                className="w-num-43 relative max-h-full object-cover z-[1]"
                width={43}
                height={43}
                sizes="100vw"
                alt=""
                src="/src="/images/faceb@2x.png"
              />
              <Image
                className="w-num-43 relative max-h-full object-cover z-[1]"
                width={43}
                height={43}
                sizes="100vw"
                alt=""
                src="/src="/images/inst@2x.png"
              />
            </div>
          </div>
        </div>
        <Image
          className="w-num-43 relative max-h-full object-cover z-[1]"
          width={43}
          height={43}
          sizes="100vw"
          alt=""
          src="/src="/images/youtube@2x.png"
        />
      </div>
    </section>
  );
};

export default Component1;
