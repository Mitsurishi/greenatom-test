import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import store from '../store/store'
import { ArticleItem } from './ArticleItem';


export const ArticleContainer = observer(() => {
    const [search, setSearch] = useState('')

    const clickHandler = async () => {

        await store.search(search);

    }

    return (
        <div className="flex flex-col items-center pt-10 mx-auto">
            <div className="flex items-center justify-center w-[600px] mb-6">
                <input
                    type="text"
                    className=" rounded-s-xl border py-2 px-4 w-full h-[42px]"
                    placeholder="Search for articles..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className='h-[40px] text-white font-semibold bg-gray-500 rounded-e-xl py-1 px-4 hover:bg-gray-400 transition-all' onClick={() => clickHandler()}>Search</button>
            </div>
            <div className='w-[600px] flex flex-col justify-center rounded-xl'>
                {store.searchResult.length !== 0 && store.searchResult.map(article => <ArticleItem
                    key={article.pageid}
                    id={article.pageid}
                    title={article.title}
                />)}
            </div>
        </div>
    )
});

