import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex items-start justify-center pt-0 px-num-20 pb-[71px] box-border max-w-full mq825:pb-num-46 mq825:box-border ${className}`}
    >
      <div className="w-[1450px] flex flex-col items-start gap-[43px] max-w-full mq825:gap-[21px]">
        <section className="w-[1431px] flex items-start gap-[164px] max-w-full text-left text-num-48 text-darkslategray font-poppins mq825:gap-[41px] mq1275:gap-[82px] mq1275:flex-wrap mq450:gap-5">
          <h1 className="m-0 relative text-[length:inherit] leading-[130%] inline-block min-w-[476px] max-w-full font-[inherit] mq825:text-[38px] mq825:leading-num-50 mq825:min-w-full mq1275:flex-1 mq450:text-[29px] mq450:leading-[37px]">
            <b>
              <span>Причины выбрать</span>
              <span className="text-midnightblue-100">
                {" "}
                <br />
              </span>
            </b>
            <span className="text-midnightblue-100">
              <span className="font-semibold">INAI.kg</span>
            </span>
          </h1>
          <div className="flex-1 flex flex-col items-start pt-9 px-0 pb-0 box-border min-w-[514px] max-w-full text-[18px] text-gray font-montserrat mq825:min-w-full">
            <div className="relative leading-[150%] font-medium">
              Миссией   Института является  расширение границ IT-образования в
              Кыргызской Республике за счет внедрения инновационных
              образовательных программ германских вузов.
            </div>
          </div>
        </section>
        <div className="self-stretch shadow-[11px_12px_80px_rgba(0,_0,_0,_0.07)] rounded-[20px] bg-whitesmoke-200 flex items-end pt-[79px] px-[63px] pb-[58px] box-border gap-11 max-w-full mq825:gap-[22px] mq825:pt-num-51 mq825:pb-num-38 mq825:box-border mq1275:pl-num-31 mq1275:pr-num-31 mq1275:box-border mq1575:flex-wrap">
          <div className="h-[473px] w-[1450px] relative shadow-[11px_12px_80px_rgba(0,_0,_0,_0.07)] rounded-[20px] bg-whitesmoke-200 hidden max-w-full shrink-0" />
          <section className="w-[322px] flex flex-col items-start pt-[114px] px-0 pb-[102px] box-border relative isolate max-w-full shrink-0 text-left text-num-30 text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-start gap-[15px] shrink-0">
              <div className="w-[304px] flex items-start py-0 px-num-18 box-border">
                <b className="flex-1 relative leading-[130%] z-[1] mq825:text-[24px] mq825:leading-[31px] mq450:text-[18px] mq450:leading-num-23">
                  Стипендия DAAD
                </b>
              </div>
              <div className="relative text-[16px] leading-[130%] font-montserrat text-center z-[1]">
                Стипендия DAAD открывает путь к обучению и стажировке в лучших
                вузах Германии.
              </div>
            </div>
            <Image
              className="w-[90px] absolute !!m-[0 important] top-[0px] left-[107px] max-h-full object-cover z-[1] shrink-0"
              loading="lazy"
              width={90}
              height={90}
              sizes="100vw"
              alt=""
              src="/src="/images/icon1@2x.png"
            />
            <Image
              className="w-[55px] h-num-55 absolute !!m-[0 important] bottom-[0px] left-[124px] z-[1] shrink-0"
              loading="lazy"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/src="/images/ar-1.svg"
            />
          </section>
          <div className="h-[336px] flex flex-col items-start py-0 pl-0 pr-3.5 box-border shrink-0">
            <div className="w-[0.5px] h-[242.5px] relative border-midnightblue-100 border-solid border-r-[0.5px] box-border z-[1]" />
          </div>
          <section className="w-[443px] flex flex-col items-start py-0 pl-0 pr-num-18 box-border gap-[22px] max-w-full shrink-0 text-center text-num-30 text-darkslategray font-poppins">
            <div className="self-stretch flex items-start justify-center py-0 px-num-20">
              <Image
                className="h-[95px] w-full relative object-cover z-[1]"
                loading="lazy"
                width={95}
                height={95}
                sizes="100vw"
                alt=""
                src="/src="/images/icon2@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-[47px] max-w-full mq450:gap-[23px]">
              <div className="self-stretch flex flex-col items-start gap-[15px] max-w-full">
                <b className="self-stretch relative leading-[130%] z-[1] mq825:text-[24px] mq825:leading-[31px] mq450:text-[18px] mq450:leading-num-23">
                  Современное образование
                </b>
                <div className="self-stretch flex items-start py-0 pl-[15px] pr-num-16 box-border max-w-full text-[16px] font-montserrat">
                  <div className="flex-1 relative leading-[130%] inline-block max-w-full z-[1]">
                    Практическое обучение, современные лаборатории и активная
                    студенческая жизнь помогают строить успешную карьеру.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-start justify-center py-0 px-num-20">
                <Image
                  className="h-num-55 w-full relative z-[1]"
                  loading="lazy"
                  width={55}
                  height={55}
                  sizes="100vw"
                  alt=""
                  src="/src="/images/ar-1.svg"
                />
              </div>
            </div>
          </section>
          <div className="h-[332px] flex flex-col items-start py-0 pl-0 pr-num-16 box-border shrink-0">
            <div className="w-[0.5px] h-[242.5px] relative border-midnightblue-100 border-solid border-r-[0.5px] box-border z-[1]" />
          </div>
          <section className="w-80 flex flex-col items-start pt-[110px] px-0 pb-[102px] box-border relative isolate shrink-0 text-left text-num-30 text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-start gap-[15px] shrink-0">
              <div className="self-stretch flex items-start py-0 pl-num-17 pr-num-20">
                <b className="flex-1 relative leading-[130%] z-[1] mq825:text-[24px] mq825:leading-[31px] mq450:text-[18px] mq450:leading-num-23">
                  Учёба в Германии
                </b>
              </div>
              <div className="relative text-[16px] leading-[130%] font-montserrat text-center z-[1]">
                После 3 курса студенты могут продолжить обучение в Германии и
                получить международный диплом.
              </div>
            </div>
            <Image
              className="w-[81px] h-[81px] absolute !!m-[0 important] top-[0px] left-[118px] object-cover z-[1] shrink-0"
              loading="lazy"
              width={81}
              height={81}
              sizes="100vw"
              alt=""
              src="/src="/images/icon3@2x.png"
            />
            <Image
              className="w-[55px] h-num-55 absolute !!m-[0 important] bottom-[0px] left-[131px] z-[1] shrink-0"
              loading="lazy"
              width={55}
              height={55}
              sizes="100vw"
              alt=""
              src="/src="/images/ar-1.svg"
            />
          </section>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
