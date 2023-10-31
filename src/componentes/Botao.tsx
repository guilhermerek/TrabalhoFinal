import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao({children, autoSize = false, color, ...rest}: ButtonProps){
    return (
        <Button
            w={autoSize ? 'auto': '100%'}
            bgColor={color || 'purple.800'}
            mt={10}
            borderRadius="lg"
            _text={{color: 'white'}}
            {...rest}
            >
                {children}

            </Button>
    )
}