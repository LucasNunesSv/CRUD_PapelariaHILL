import React , {useRef} from "react";
import { styled } from "styled-components";


const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column;

`

const Label = styled.label``

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`

const Btn = styled.button`
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: pink;
    color: white;
    height: 42px;
`

const Form = ({onEdit}) => {

    const ref = useRef();

    return (
        <FormContainer ref={ref}>
            <InputArea>

                <Label>Nome</Label>
                <Input name="nome" />    {/* !! name="<NomeDoAtributoNoBanco>" */}
                <Label>Endereço</Label>
                <Input name="endereco" />
                <Label>Telefone</Label>
                <Input name="telefone" />
                <Label>E-mail</Label>
                <Input type="email" name="email" />

                <Btn type="submit">Enviar</Btn>

            </InputArea>
        </FormContainer>
    );
};

export default Form;