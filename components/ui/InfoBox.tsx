import type { NextPage } from "next";
import Image from "next/image";

export type InfoBox1Type = {
  className?: string;
};

const InfoBox1: NextPage<InfoBox1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[14px_16px_55.2px_rgba(0,_0,_0,_0.25)] rounded-[3px] bg-midnightblue-200 flex flex-col items-start pt-[65px] px-[62px] pb-[60px] box-border gap-[78px] max-w-full z-[1] text-left text-[50px] text-white font-tt-tsars-b-trial mq1275:gap-[39px] mq1275:pl-num-31 mq1275:pr-num-31 mq1275:box-border mq450:gap-[19px] mq450:pt-num-42 mq450:pb-[39px] mq450:box-border ${className}`}
    >
      <div className="w-[916px] h-num-450 relative shadow-[14px_16px_55.2px_rgba(0,_0,_0,_0.25)] rounded-[3px] bg-midnightblue-200 hidden max-w-full shrink-0" />
      <div className="w-[766px] flex flex-col items-start gap-8 max-w-full shrink-0 mq450:gap-4">
        <b className="w-[749px] relative inline-block max-w-full z-[1] mq825:text-[40px] mq450:text-num-30">
          INAI: Создаем код будущего
        </b>
        <div className="relative text-[20px] leading-[150%] font-montserrat z-[1] mq450:text-[16px] mq450:leading-num-24">
          Кыргызско-Германский институт прикладной информатики (КГИПИ) –
          единственный вуз в образовательном секторе Кыргызстана,
          специализирующийся в области компьютерных наук.
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-num-20 px-num-38 bg-white w-80 rounded-num-5 flex items-start box-border z-[1] shrink-0">
        <div className="h-[70px] w-80 relative rounded-num-5 bg-white hidden shrink-0" />
        <div className="w-[226px] flex items-start relative isolate shrink-0">
          <div className="flex-1 relative text-[20px] leading-[150%] font-semibold font-montserrat text-midnightblue-100 text-left z-[1] shrink-0 mq450:text-[16px] mq450:leading-num-24">
            Все направления
          </div>
          <Image
            className="h-full w-[30px] absolute !!m-[0 important] top-[0px] right-[-17.3px] bottom-[0px] max-h-full object-contain z-[1] shrink-0"
            width={30}
            height={30}
            sizes="100vw"
            alt=""
            src="/src="/images/raw@2x.png"
          />
        </div>
      </button>
    </div>
  );
};

export default InfoBox1;
