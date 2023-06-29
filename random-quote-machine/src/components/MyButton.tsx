import { FC, MouseEventHandler } from "react"

interface MyButtonProps {

    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>

}

export const MyButton: FC<MyButtonProps> = (props) => {

    return (
        <button onClick={props.onClick} className='rounded bg-green-600 px-8 py-2 text-white font-semibold hover:bg-green-500 transition-all'>{props.text}</button>
    )
}
