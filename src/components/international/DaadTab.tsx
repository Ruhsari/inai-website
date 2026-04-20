import Image from 'next/image';

interface DaadProps {
    data: any;
}

export function DaadTab({ data }: DaadProps) {
    return (
        <div className="flex flex-col animate-fadeIn">
            <h2 className="text-[24px] font-bold text-[#1A235E] mb-8">
                Проекты ДААД
            </h2>

            {/* РЯД 1: Два логотипа */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="overflow-hidden rounded-sm shadow-sm flex items-center">
                    <Image
                        src="/images/inter-daad.png"
                        alt="DAAD Project Logo"
                        width={400}
                        height={120}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
                <div className="overflow-hidden rounded-sm shadow-sm flex items-center">
                    <Image
                        src="/images/inter-1.png"
                        alt="Partner Logo"
                        width={400}
                        height={120}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            {/* ТЕКСТ 1 */}
            <div className="flex flex-col gap-6 text-[#333] text-[16px] leading-relaxed max-w-[850px] mb-8">
                <p>
                    Укрепление учебных программ по направлению информатика финансируется в рамках проекта <strong>DAAD</strong> «Транснациональные учебные программы: укрепление путем усовершенствования и профилизации» с 2020 по 2023 гг. из средств <strong>Федерального Министерства образования и науки Германии (BMBF)</strong>.
                </p>
            </div>

            {/* РЯД 2: Центрированное фото */}
            <div className="flex justify-start md:justify-center mb-8">
                <div className="overflow-hidden rounded-sm shadow-sm max-w-[500px]">
                    <Image
                        src="/images/inter-daad2.png"
                        alt="DAAD Project 2"
                        width={500}
                        height={250}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* ТЕКСТ 2 */}
            <div className="flex flex-col gap-6 text-[#333] text-[16px] leading-relaxed max-w-[850px]">
                <p>
                    Студентам КГИПИ предоставляется возможность получить стипендии на обучение в Бишкеке и в Западно-Саксонском Университете Прикладных Наук, г.Цвиккау (WHZ). Стипендии на обучение в Бишкеке выдаются на один год с возможностью продления на следующий учебный год. Стипендии на обучение в Цвиккау выдаются также на один год с правом на продление. Данная стипендиальная программа реализуется в рамках <strong>DAAD-проекта</strong> между КГИПИ и WHZ из средств <strong>Министерства иностранных дел Германии (АА)</strong>.
                </p>
            </div>
        </div>
    );
}