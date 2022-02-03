import React, { useState, useContext} from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros';
function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validaCampos, possoEnviar] = useErros(validacoes)
    

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {

                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
            }
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                id="nome"
                name="nome"
                label="Nome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={validaCampos}
                name="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Promoções"
                name="promocoes"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                        color='primary'
                    />}
            />

            <FormControlLabel
                label="Novidades"
                name="novidades"
                control={<Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades"
                    color='primary'
                />} 
            />

            <Button
                type='submit'
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
