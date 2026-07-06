import clsx from "clsx"

export default function Button({
    children,
    primary
} : {
    children?: React.ReactNode,
    primary?: boolean
}) {
    return (
        <button type="button" className={clsx(
            "px-6 py-2 rounded-lg hover:cursor-pointer border-primary border",
            primary ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
        )}>
            {children}
        </button>
    )
}