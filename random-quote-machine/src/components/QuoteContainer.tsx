import { FC, useEffect, useState } from 'react'
import { MyButton } from './MyButton'

interface IData {

    quoteAuthor: string;

    quoteLink: string;

    quoteText: string;

    senderLink: string;

    senderName: string;

}

export const QuoteContainer: FC = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const showQuote = async () => {

        try {
            const response = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=json&lang=ru&json='); // Поменял query параметр в запросе с jsonp на json, т.к. js или react не умеют работать с jsonp без сторонних библиотек. Приведённый в примере код написан на JQuery, а по заданию я с ним не должен работать.
            const data: IData = await response.json();
            setQuote(data.quoteText);
            setAuthor(data.quoteAuthor);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        showQuote();
    }, [])


    const handleClick = () => {
        showQuote();
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center text-white font-semibold text-center'>
            <h1 className='mb-4 text-3xl'>Random quotes!</h1>
            <p className='mb-2 text-lg'>{quote}</p>
            <p className='mb-4 text-lg'>{author}</p>
            <MyButton onClick={handleClick} text='New quote' />
        </div>
    )
}
