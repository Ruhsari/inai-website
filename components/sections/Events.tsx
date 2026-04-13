import type { NextPage } from "next";
import Image from "next/image";
import EventCard from "@/components/ui/EventCard";
export type FrameComponent11111Type = {
  className?: string;
};

const FrameComponent11111: NextPage<FrameComponent11111Type> = ({
  className = "",
}) => {
  return (
    <main
      className={`self-stretch flex items-start justify-center py-0 pl-[22px] pr-num-20 box-border max-w-full text-left text-[65px] text-darkslateblue-200 font-montserrat ${className}`}
    >
      <div className="w-[1632px] flex flex-col items-start gap-[43px] max-w-full mq825:gap-[21px]">
        <b className="relative leading-[130%] inline-block max-w-full mq825:text-[52px] mq825:leading-[68px] mq450:text-[39px] mq450:leading-[51px]">
          Мероприятия
        </b>
        <div className="w-[1035px] flex items-start pt-0 px-num-10 pb-num-17 box-border max-w-full">
          <div className="flex-1 flex items-start justify-center flex-wrap content-start gap-[18px] max-w-full">
            <button className="cursor-pointer [border:none] pt-[18.5px] px-num-51 pb-[17.5px] bg-midnightblue-100 w-num-243 rounded-num-7 flex items-start box-border hover:bg-darkslateblue-100">
              <div className="h-num-60 w-num-243 relative rounded-num-7 bg-midnightblue-100 hidden shrink-0" />
              <div className="flex-1 relative text-[20px] leading-[130%] font-semibold font-poppins text-white text-left z-[1] shrink-0 mq450:text-[16px] mq450:leading-num-21">
                Предстоящие
              </div>
            </button>
            <button className="cursor-pointer border-midnightblue-100 border-solid border-[1px] pt-num-17 pb-num-16 pl-num-42 pr-[41px] bg-white h-num-60 rounded-num-7 box-border flex items-start hover:bg-gainsboro-100 hover:border-darkslateblue-100 hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="h-num-60 w-[184px] relative rounded-num-7 bg-white border-midnightblue-100 border-solid border-[1px] box-border hidden shrink-0" />
              <div className="relative text-[20px] leading-[130%] font-semibold font-poppins text-midnightblue-100 text-left inline-block min-w-[101px] z-[1] shrink-0 mq450:text-[16px] mq450:leading-num-21">
                Хакатоны
              </div>
            </button>
            <button className="cursor-pointer border-midnightblue-100 border-solid border-[1px] pt-num-17 px-[43px] pb-num-16 bg-white h-num-60 w-[230px] rounded-num-7 box-border flex items-start hover:bg-gainsboro-100 hover:border-darkslateblue-100 hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="h-num-60 w-[230px] relative rounded-num-7 bg-white border-midnightblue-100 border-solid border-[1px] box-border hidden shrink-0" />
              <div className="flex-1 relative text-[20px] leading-[130%] font-semibold font-poppins text-midnightblue-100 text-left z-[1] shrink-0 mq450:text-[16px] mq450:leading-num-21">
                Конференции
              </div>
            </button>
            <button className="cursor-pointer border-midnightblue-100 border-solid border-[1px] pt-num-17 px-num-46 pb-num-16 bg-white flex-1 rounded-num-7 box-border flex items-start min-w-[198px] hover:bg-gainsboro-100 hover:border-darkslateblue-100 hover:border-solid hover:hover:border-[1px] hover:box-border mq450:pl-num-20 mq450:pr-num-20 mq450:box-border">
              <div className="h-num-60 w-[304px] relative rounded-num-7 bg-white border-midnightblue-100 border-solid border-[1px] box-border hidden shrink-0" />
              <div className="flex-1 relative text-[20px] leading-[130%] font-semibold font-poppins text-midnightblue-100 text-left z-[1] shrink-0">
                Студенческая жизнь
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex items-start pt-0 pb-[49px] pl-1 pr-1.5 box-border max-w-full mq825:pb-[21px] mq825:box-border mq1275:pb-num-32 mq1275:box-border mq450:pb-num-20 mq450:box-border">
          <div className="flex-1 flex flex-col items-start gap-[75px] max-w-full mq825:gap-[37px] mq450:gap-[19px]">
            <EventCard
              prop="/news-1@2x.png"
              prop1="Внутреинститутский и межинститутский Хакатон"
            />
            <div className="self-stretch shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white flex items-end pt-num-44 px-num-44 pb-num-42 box-border gap-[94px] max-w-full mq825:gap-[47px] mq1275:pl-[22px] mq1275:pr-[22px] mq1275:box-border mq450:gap-[23px] mq450:pt-num-29 mq450:pb-num-27 mq450:box-border mq1575:flex-wrap">
              <div className="h-num-450 w-num-1622 relative shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white hidden max-w-full shrink-0" />
              <Image
                className="w-num-647 relative shadow-[12px_12px_53.2px_rgba(0,_0,_0,_0.1)] max-h-full object-cover max-w-full z-[1] shrink-0 mq1575:flex-1"
                loading="lazy"
                width={647}
                height={364}
                sizes="100vw"
                alt=""
                src="/src="/images/news-2@2x.png"
              />
              <section className="w-num-672 flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border max-w-full shrink-0 text-left text-[16px] text-midnightblue-100 font-montserrat mq825:min-w-full mq1575:flex-1">
                <div className="self-stretch flex flex-col items-start gap-7 max-w-full">
                  <div className="self-stretch flex items-start pt-0 px-0 pb-num-32 box-border max-w-full text-num-36 font-poppins">
                    <b className="flex-1 relative leading-[130%] inline-block max-w-full z-[1] mq825:text-[29px] mq825:leading-[37px] mq450:text-[22px] mq450:leading-num-28">
                      День открытых дверей в INAI!
                    </b>
                  </div>
                  <div className="relative leading-[140%] text-gray z-[1]">
                    Готовы бросить вызов своим идеям и навыкам? Тогда наш
                    хакатон — именно для вас!
                    <br />
                    Это событие объединяет студентов разных направлений и
                    институтов, чтобы вместе создавать инновационные проекты,
                    решать реальные задачи и показать силу командной работы.
                    <br />
                    Хакатон
                  </div>
                  <div className="w-num-223 flex items-start justify-between gap-5 text-darkslategray">
                    <Image
                      className="h-num-55 w-[55px] relative z-[1]"
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
            <EventCard
              divPadding="44px 44px 42px"
              divGap="94px"
              prop="/news-3@2x.png"
              prop1="Благотворительная ярмарка в поддержку детского дома"
            />
          </div>
        </div>
        <div className="self-stretch flex items-start justify-end max-w-full">
          <button className="cursor-pointer [border:none] pt-num-17 px-12 pb-num-18 bg-midnightblue-100 w-num-369 rounded-num-5 flex items-start box-border gap-[27.1px] max-w-full mq450:pl-num-20 mq450:pr-num-20 mq450:box-border">
            <div className="h-num-62 w-num-369 relative rounded-num-5 bg-midnightblue-100 hidden max-w-full shrink-0" />
            <div className="relative text-[18px] leading-[150%] font-semibold font-montserrat text-white text-left z-[1] shrink-0">
              Больше мероприятий
            </div>
            <div className="flex flex-col items-start pt-[9.5px] px-0 pb-0 shrink-0">
              <Image
                className="w-full h-[11.3px] relative z-[1]"
                width={19.4}
                height={11.3}
                sizes="100vw"
                alt=""
                src="/src="/images/Group-21.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default FrameComponent11111;
