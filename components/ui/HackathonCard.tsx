import type { NextPage } from "next";
import Image from "next/image";

export type Component11Type = {
  className?: string;
  maskGroup: string;
};

const Component11: NextPage<Component11Type> = ({
  className = "",
  maskGroup,
}) => {
  return (
    <section
      className={`flex-1 shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white flex flex-col items-start justify-end pt-num-263 px-num-25 pb-num-27 box-border relative isolate gap-[8.5px] min-w-num-322 max-w-full z-[2] text-left text-[16px] text-midnightblue-100 font-poppins mq825:pt-num-171 mq825:pb-num-20 mq825:box-border ${className}`}
    >
      <div className="w-num-350 h-num-480 relative shadow-[0px_4px_76.4px_rgba(0,_0,_0,_0.25)] rounded-num-22 bg-white hidden max-w-full z-[0] shrink-0" />
      <Image
        className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1] shrink-0"
        width={350}
        height={480}
        sizes="100vw"
        alt=""
        src={maskGroup}
      />
      <b className="w-num-243 relative leading-[130%] inline-block z-[2] shrink-0">
        Внутреинститутский и межинститутский Хакатон
      </b>
      <div className="w-num-287 relative text-num-14 leading-[140%] font-montserrat text-dimgray inline-block z-[2] shrink-0">{`Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас!<br/>Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать `}</div>
      <div className="self-stretch flex items-start justify-end py-0 px-num-10 shrink-0">
        <Image
          className="h-num-11 w-full relative z-[2]"
          width={18.3}
          height={11}
          sizes="100vw"
          alt=""
          src="/src="/images/ar-news.svg"
        />
      </div>
    </section>
  );
};

export default Component11;
