import './MeuButton.css'

interface MeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
}

export default function MeuButton({
    variant = 'primary',
    children,
    onClick,
    ...props
}: MeuButtonProps) {
    const variantClass = `btn-${variant}`;

    return (
        <button
            className={`my-button ${variantClass}`}
            onClick={onClick}
            {...props}
        >
            {children || 'Meu botão'}
        </button>
    )
}