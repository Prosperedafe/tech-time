type StyleProps = {
    className: string
    content: string

}
export const Button = (props: StyleProps) => {
    return (
        <button className={props.className}>{props.content}</button>
    )
}