import { FC } from "react";

interface ArticleItemProps {

    id: number;

    title: string;

}

export const ArticleItem: FC<ArticleItemProps> = (props) => {

    return (
        <a className="rounded-xl mb-2 text-white font-semibold block w-full bg-gray-400 py-5 px-50 hover:bg-gray-500 transition-all" href={`https://en.wikipedia.org/w/index.php?curid=${props.id}`} target="_blank" rel="noreferrer">
            <div className='flex justify-center items-center'>
                <h1>{props.title}</h1>
            </div>
        </a>
    )

}
