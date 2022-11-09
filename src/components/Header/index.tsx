import { Conteiner, Logo } from "./style";

export function Header() {
    return (
        <Conteiner>
            <Logo source={require('@assets/logo.png')}/>
        </Conteiner>
    );
}
