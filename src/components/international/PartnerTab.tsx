import Image from 'next/image';

interface PartnerProps {
    data: {
        title: string;
        image: string;
        description: string;
        tasks: string[];
        contractLink: string;
        contractTitle: string;
    };
}

export function PartnerTab({ data }: PartnerProps) {
    return (
        <div className="flex flex-col">
            <h2 className="text-[24px] font-bold text-[#1A235E] mb-8">
                {data.title || "Ассоциированный партнер"}
            </h2>

            <div className="mb-10">
                <Image
                    src={data.image}
                    alt="Partner Logo"
                    width={450}
                    height={150}
                    style={{ height: 'auto' }}
                    priority
                />
            </div>

            <div className="flex flex-col gap-6 text-[#333] text-[16px] leading-relaxed max-w-[850px]">
                <p>{data.description}</p>

                <div className="mt-2">
                    <p className="font-bold mb-4 text-[#1A235E]">Ассоциированный партнер:</p>
                    <ul className="list-none p-0 space-y-3">
                        {data.tasks.map((task, index) => (
                            <li key={index} className="flex gap-2">
                                <span>-</span> {task}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-6">
                    <a
                        href={data.contractLink}
                        className="text-[#1A235E] font-semibold hover:underline decoration-2 underline-offset-4"
                    >
                        {data.contractTitle}
                    </a>
                </div>
            </div>
        </div>
    );
}