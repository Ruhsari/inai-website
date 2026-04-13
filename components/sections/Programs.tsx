import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent111Type = {
  className?: string;
};

const FrameComponent111: NextPage<FrameComponent111Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex items-start justify-center pt-0 pb-num-33 pl-num-20 pr-[21px] box-border max-w-full text-left text-[27px] text-white font-montserrat ${className}`}
    >
      <div className="flex items-start justify-center gap-[57px] max-w-full mq825:gap-7 mq1575:flex-wrap">
        <section className="w-[688px] flex flex-col items-start pt-[30px] px-0 pb-0 box-border max-w-full text-left text-[20px] text-midnightblue-100 font-montserrat mq825:min-w-full mq1575:flex-1">
          <div className="self-stretch flex flex-col items-start gap-20 max-w-full mq825:gap-10 mq450:gap-5">
            <div className="self-stretch flex flex-col items-start gap-[31px] max-w-full mq825:gap-[15px]">
              <div className="flex flex-col items-start gap-[26px] max-w-full">
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
                      Учебные программы
                    </div>
                  </div>
                </div>
                <h1 className="m-0 relative text-num-48 leading-[130%] font-semibold font-[inherit] text-darkslategray mq825:text-[38px] mq825:leading-num-50 mq450:text-[29px] mq450:leading-[37px]">
                  <span>
                    Находи свою сферу.
                    <br />
                  </span>
                  <span className="text-lightseagreen">
                    Поступай.
                    <br />
                  </span>
                  <span className="text-midnightblue-100">Интегрируйся.</span>
                </h1>
              </div>
              <div className="self-stretch flex items-start gap-[42px] max-w-full text-gray mq825:gap-[21px] mq825:flex-wrap">
                <div className="h-[118px] flex flex-col items-start pt-0.5 px-0 pb-0 box-border">
                  <div className="w-1.5 flex-1 relative bg-midnightblue-100" />
                </div>
                <div className="flex-1 relative leading-[150%] inline-block min-w-[416px] max-w-full mq825:min-w-full mq450:text-[16px] mq450:leading-num-24">
                  Кыргызско-Германский институт прикладной информатики (КГИПИ) –
                  единственный вуз в образовательном секторе Кыргызстана,
                  специализирующийся в области компьютерных наук.
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[19px] px-[34px] bg-midnightblue-100 w-num-369 rounded-num-5 flex items-start box-border relative isolate max-w-full hover:bg-darkslateblue-100">
              <div className="h-num-62 w-num-369 relative rounded-num-5 bg-midnightblue-100 hidden max-w-full z-[0] shrink-0" />
              <Image
                className="h-[21.7px] w-[21.7px] absolute !!m-[0 important] right-[34.3px] bottom-[20px] object-contain z-[1] shrink-0"
                width={21.7}
                height={21.7}
                sizes="100vw"
                alt=""
                src="/src="/images/icon-hat@2x.png"
              />
              <div className="relative text-[16px] leading-[150%] font-semibold font-montserrat text-white text-left z-[1] shrink-0">
                Узнать больше о программах
              </div>
            </button>
          </div>
        </section>
        <div className="flex items-start justify-center gap-[18px] max-w-full mq1275:flex-wrap mq1275:min-w-full mq1575:flex-1">
          <section className="flex flex-col items-start pt-num-1 px-0 pb-0 box-border max-w-full text-left text-[27px] text-white font-montserrat">
            <div className="w-[327px] flex items-start pt-44 px-[41px] pb-num-38 box-border relative isolate bg-[url('/photo-pt@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[598px] max-w-full">
              <Image
                className="w-[327px] relative max-h-full object-cover hidden max-w-full z-[0] shrink-0"
                width={327}
                height={598}
                sizes="100vw"
                alt=""
                src="/src="/images/photo-pt@2x.png"
              />
              <div className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] z-[1] shrink-0" />
              <div className="relative leading-[130%] font-semibold [transform:_rotate(-90deg)] shrink-0 z-[2] mq450:text-[22px] mq450:leading-num-28">
                Программные технологии
              </div>
            </div>
          </section>
          <div className="w-num-165 flex flex-col items-start pt-num-1 px-0 pb-0 box-border">
            <div className="self-stretch flex items-start pt-[150px] px-num-33 pb-num-37 box-border relative isolate bg-[url('/photo-ad@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[597px]">
              <Image
                className="w-num-165 relative max-h-full object-cover hidden z-[0] shrink-0"
                width={165}
                height={597}
                sizes="100vw"
                alt=""
                src="/src="/images/photo-ad@2x.png"
              />
              <div className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] z-[1] shrink-0" />
              <div className="relative leading-[130%] font-semibold [transform:_rotate(-90deg)] shrink-0 z-[2] mq450:text-[22px] mq450:leading-num-28">
                Прикладной анализ данных
              </div>
            </div>
          </div>
          <div className="h-[598px] w-num-165 flex items-start pt-[295px] px-num-33 pb-num-37 box-border relative isolate bg-[url('/photo-win@2x.png')] bg-cover bg-no-repeat bg-[top] mq450:pt-48 mq450:pb-6 mq450:box-border">
            <Image
              className="w-num-165 relative max-h-full object-cover hidden z-[0] shrink-0"
              width={165}
              height={598}
              sizes="100vw"
              alt=""
              src="/src="/images/photo-win@2x.png"
            />
            <div className="h-full w-full absolute !!m-[0 important] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] z-[1] shrink-0" />
            <div className="relative leading-[130%] font-semibold [transform:_rotate(-90deg)] shrink-0 z-[2] mq450:text-[22px] mq450:leading-num-28">
              Веб-информатика
            </div>
          </div>
          <div className="w-num-165 flex flex-col items-start pt-num-1 px-0 pb-0 box-border">
            <div className="self-stretch flex items-start pt-44 px-num-33 pb-num-37 box-border relative isolate bg-[url('/photo-fin@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[597px]">
              <Image
                className="w-num-165 relative max-h-full object-cover hidden z-[0] shrink-0"
                width={165}
                height={597}
                sizes="100vw"
                alt=""
                src="/src="/images/photo-fin@2x.png"
              />
              <div className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] z-[1] shrink-0" />
              <div className="relative leading-[130%] font-semibold [transform:_rotate(-90deg)] shrink-0 z-[2] mq450:text-[22px] mq450:leading-num-28">
                Финансовый инжиниринг
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent111;
