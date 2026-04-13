import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex items-start justify-center pt-0 pb-num-46 pl-6 pr-num-20 box-border max-w-full mq825:pb-[30px] mq825:box-border ${className}`}
    >
      <div className="w-[1626px] flex items-end flex-wrap content-end gap-[170px] max-w-full mq825:gap-[42px] mq1275:gap-[85px] mq450:gap-[21px]">
        <div className="h-[604px] flex-1 relative min-w-[472px] max-w-full mq825:min-w-full">
          <Image
            className="absolute top-[0px] left-[0px] shadow-[10px_13px_37.8px_rgba(0,_0,_0,_0.1)] rounded-num-2 w-[391px] h-[493px] object-cover"
            width={391}
            height={493}
            sizes="100vw"
            alt=""
            src="/src="/images/photo-1@2x.png"
          />
          <Image
            className="absolute top-[111px] left-[335px] shadow-[10px_13px_37.8px_rgba(0,_0,_0,_0.1)] rounded-[1px] w-[391px] h-[493px] object-cover z-[1]"
            loading="lazy"
            width={391}
            height={493}
            sizes="100vw"
            alt=""
            src="/src="/images/photo-2@2x.png"
          />
        </div>
        <section className="flex-1 flex flex-col items-start pt-0 px-0 pb-[49px] box-border min-w-[474px] max-w-full text-left text-[20px] text-midnightblue-100 font-montserrat mq825:pb-num-32 mq825:box-border mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start gap-[70px] max-w-full mq825:gap-[35px] mq450:gap-[17px]">
            <div className="self-stretch flex flex-col items-start gap-[42px] max-w-full mq825:gap-[21px]">
              <div className="w-[540px] flex flex-col items-start gap-[26px] max-w-full">
                <div className="flex items-start gap-[18px]">
                  <Image
                    className="h-[26px] w-[26px] relative object-cover"
                    width={26}
                    height={26}
                    sizes="100vw"
                    alt=""
                    src="/src="/images/icon-hat@2x.png"
                  />
                  <div className="flex flex-col items-start pt-num-1 px-0 pb-0">
                    <div className="relative font-medium mq450:text-[16px]">
                      О нашем институте
                    </div>
                  </div>
                </div>
                <h1 className="m-0 self-stretch relative text-num-48 leading-[130%] font-bold font-poppins text-darkslategray mq825:text-[38px] mq825:leading-num-50 mq450:text-[29px] mq450:leading-[37px]">
                  <span>Знакомство с нашим</span>
                  <span className="text-midnightblue-100">
                    {" "}
                    <br />
                    Институтом
                  </span>
                </h1>
              </div>
              <div className="self-stretch flex items-start gap-[26px] max-w-full text-gray mq825:flex-wrap">
                <div className="h-[118px] flex flex-col items-start pt-0.5 px-0 pb-0 box-border">
                  <div className="w-1.5 flex-1 relative bg-midnightblue-100" />
                </div>
                <div className="flex-1 relative leading-[150%] inline-block min-w-[454px] max-w-full mq825:min-w-full mq450:text-[16px] mq450:leading-num-24">
                  Кыргызско-Германский институт прикладной информатики (КГИПИ) –
                  единственный вуз в образовательном секторе Кыргызстана,
                  специализирующийся в области компьютерных наук.
                </div>
              </div>
            </div>
            <div className="self-stretch flex items-start justify-between gap-5 text-[24px] mq825:flex-wrap mq825:gap-5">
              <div className="flex flex-col items-start pt-0.5 px-0 pb-0">
                <div className="self-stretch flex flex-col items-start gap-[9px]">
                  <div className="relative font-semibold mq450:text-num-19">
                    Строим доверие
                  </div>
                  <div className="relative text-[16px] font-medium text-gray">{`Мы стремимся к созданию доверия `}</div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[19px] px-num-27 bg-midnightblue-100 w-[219px] rounded-num-5 flex items-start box-border relative isolate hover:bg-darkslateblue-100">
                <div className="h-num-62 w-[219px] relative rounded-num-5 bg-midnightblue-100 hidden z-[0] shrink-0" />
                <Image
                  className="h-[21.7px] w-[21.7px] absolute !!m-[0 important] right-[26.3px] bottom-[20px] object-contain z-[1] shrink-0"
                  width={21.7}
                  height={21.7}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/icon-hat@2x.png"
                />
                <div className="relative text-[16px] leading-[150%] font-semibold font-montserrat text-white text-left z-[1] shrink-0">
                  Больше о нас
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent1;
