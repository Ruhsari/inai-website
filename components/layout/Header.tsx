import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1855px] h-[638px] flex items-start py-0 pl-0 pr-num-20 box-border relative isolate max-w-full ${className}`}
    >
      <Image
        className="w-[1923px] absolute !!m-[0 important] right-[-65px] bottom-[-414px] max-h-full object-cover shrink-0"
        loading="lazy"
        width={1923}
        height={780}
        sizes="100vw"
        alt=""
        src="/src="/images/main-photo@2x.png"
      />
      <div className="self-stretch flex-1 flex items-start justify-end pt-0 px-0 pb-[394px] box-border max-w-full shrink-0 mq825:pb-64 mq825:box-border">
        <header className="self-stretch w-[1750px] flex flex-col items-start max-w-full text-left text-[16px] text-darkslategray font-poppins">
          <div className="self-stretch flex-1 shadow-[12px_12px_53px_rgba(0,_0,_0,_0.1)] rounded-t-num-15 rounded-b-num-0 bg-white border-gainsboro-200 border-solid border-[2px] box-border flex items-start justify-between py-num-32 pl-[58px] pr-[62px] gap-5 max-w-full mq1275:gap-5 mq1275:pl-num-29 mq1275:pr-num-31 mq1275:box-border">
            <div className="h-[122px] w-[1750px] relative shadow-[12px_12px_53px_rgba(0,_0,_0,_0.1)] rounded-t-num-15 rounded-b-num-0 bg-white border-gainsboro-200 border-solid border-[2px] box-border hidden max-w-full shrink-0" />
            <Image
              className="w-[250px] relative max-h-full object-contain z-[1] shrink-0"
              loading="lazy"
              width={250}
              height={52.9}
              sizes="100vw"
              alt=""
              src="/src="/images/logo@2x.png"
            />
            <div className="w-[395px] flex flex-col items-start pt-[5px] px-0 pb-0 box-border max-w-full shrink-0">
              <div className="self-stretch flex items-start gap-[30px]">
                <div className="flex-1 rounded-num-5 bg-whitesmoke-100 flex items-start pt-num-13 px-num-17 pb-3 gap-[22px] z-[1]">
                  <div className="h-[42px] w-[220px] relative rounded-num-5 bg-whitesmoke-100 hidden shrink-0" />
                  <Image
                    className="w-[15px] relative max-h-full z-[1] shrink-0"
                    width={15}
                    height={15}
                    sizes="100vw"
                    alt=""
                    src="/src="/images/Search-Icon.svg"
                  />
                  <input
                    className="w-[calc(100%_-_49px)] [border:none] [outline:none] font-montserrat text-num-14 bg-[transparent] relative text-gray text-left inline-block p-0 z-[1] shrink-0"
                    placeholder="Поиск по сайту"
                    type="text"
                  />
                </div>
                <div className="h-[42px] w-[50px] relative rounded-num-5 bg-whitesmoke-100 z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-num-5 bg-whitesmoke-100 w-full h-full hidden" />
                  <div className="absolute top-[9px] left-[13px] w-6 h-6 z-[1]">
                    <div className="absolute top-[5.9px] left-[5.9px] rounded-[50%] bg-darkgray w-[12.2px] h-[12.2px]" />
                    <div className="absolute top-[0px] left-[11.1px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2" />
                    <div className="absolute top-[19.8px] left-[11.1px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2" />
                    <div className="absolute top-[12.8px] left-[0px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[12.8px] left-[19.8px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                    <div className="absolute top-[4.5px] left-[2.5px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2 [transform:_rotate(-50deg)] [transform-origin:0_0] z-[1]" />
                    <div className="absolute top-[17.6px] left-[17.7px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2 [transform:_rotate(-50deg)] [transform-origin:0_0] z-[1]" />
                    <div className="absolute top-[7.2px] left-[18.79px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2 [transform:_rotate(-130deg)] [transform-origin:0_0] z-[1]" />
                    <div className="absolute top-[20.3px] left-[3.59px] rounded-num-2 bg-darkgray w-num-1_7 h-num-4_2 [transform:_rotate(-130deg)] [transform-origin:0_0] z-[1]" />
                  </div>
                </div>
                <div className="w-[65px] rounded-num-5 bg-whitesmoke-100 flex items-start pt-[8.9px] px-[11px] pb-[3.8px] box-border z-[1]">
                  <div className="h-[42px] w-[65px] relative rounded-num-5 bg-whitesmoke-100 hidden shrink-0" />
                  <div className="relative uppercase font-medium inline-block min-w-[27.9px] z-[1] shrink-0">
                    РУ
                  </div>
                  <div className="flex flex-col items-start pt-[10.1px] px-0 pb-0 shrink-0">
                    <Image
                      className="w-full h-[5px] relative z-[1]"
                      width={10}
                      height={5}
                      sizes="100vw"
                      alt=""
                      src="/src="/images/Vector-13.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex items-start justify-between py-[43px] px-[207px] relative isolate gap-5 z-[2] text-[24px] mq825:gap-5 mq825:pl-num-51 mq825:pr-num-51 mq825:box-border mq1275:gap-5 mq1275:pl-[103px] mq1275:pr-[103px] mq1275:box-border mq450:gap-5 mq450:pl-num-20 mq450:pr-num-20 mq450:box-border">
            <div className="h-full w-full absolute !!m-[0 important] top-[122px] right-[-1750px] bottom-[-122px] left-[1750px] shadow-[12px_12px_53px_rgba(0,_0,_0,_0.1)] rounded-t-num-15 rounded-b-num-0 bg-white border-gainsboro-200 border-solid border-t-[2px] border-r-[2px] border-l-[2px] box-border [transform:_rotate(-180deg)] [transform-origin:0_0] shrink-0" />
            <h3 className="m-0 w-[95px] relative text-[length:inherit] font-normal font-[inherit] inline-block z-[1] shrink-0">
              Главная
            </h3>
            <div className="flex items-start gap-[13px] shrink-0">
              <div className="relative inline-block min-w-[66px] z-[1]">
                О нас
              </div>
              <div className="flex flex-col items-start pt-num-16 px-0 pb-0">
                <Image
                  className="w-full relative max-h-full h-auto object-contain z-[1]"
                  width={15}
                  height={7}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/Vector.svg"
                />
              </div>
            </div>
            <div className="w-[197px] flex items-start gap-[11px] shrink-0">
              <div className="flex-1 relative z-[1]">{`Абитуриентам `}</div>
              <div className="flex flex-col items-start pt-num-17 px-0 pb-0">
                <Image
                  className="w-full relative max-h-full h-auto object-contain z-[1]"
                  width={15}
                  height={7}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/Vector.svg"
                />
              </div>
            </div>
            <div className="w-[149px] flex items-start gap-2.5 shrink-0">
              <div className="flex-1 relative z-[1]">Студентам</div>
              <div className="flex flex-col items-start pt-num-16 px-0 pb-0">
                <Image
                  className="w-full relative max-h-full h-auto object-contain z-[1]"
                  width={15}
                  height={7}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/Vector.svg"
                />
              </div>
            </div>
            <div className="w-[188px] flex items-start gap-3 shrink-0">
              <div className="flex-1 relative z-[1]">{`Выпускникам `}</div>
              <div className="flex flex-col items-start pt-num-16 px-0 pb-0">
                <Image
                  className="w-full relative max-h-full h-auto object-contain z-[1]"
                  width={15}
                  height={7}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/Vector.svg"
                />
              </div>
            </div>
            <h3 className="m-0 w-[113px] relative text-[length:inherit] font-normal font-[inherit] inline-block z-[1] shrink-0">{`Контакты `}</h3>
          </div>
        </header>
      </div>
    </section>
  );
};

export default FrameComponent;
