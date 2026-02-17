import './MeuButton.css'

interface MeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
}

export default function MeuButton({ variant = 'primary', children, ...props }: MeuButtonProps) {
    const variantClass = `btn-${variant}`;

    return (
        <button
            className={`my-button ${variantClass}`}
            onClick={() => alert('Clicado!')}
            {...props}
        >
            {children || 'Meu botão'}
        </button>
    )
}