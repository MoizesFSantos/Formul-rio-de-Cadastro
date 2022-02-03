import React, { useEffect, useState } from 'react';

import DadosPessoais from './dadosPessoais';
import DadosUsuario from './dadosUsuario';
import DadosEntrega from './dadosEntrega';
import { Typography, Stepper, StepLabel, Step } from '@material-ui/core';

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    useEffect(() => {
        if (etapaAtual === formulario.length - 1) {

            aoEnviar(dadosColetados)
        }
    })

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5"> Cadastro realizado com sucesso!</Typography>
    ]

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo()
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step> <StepLabel>Login</StepLabel></Step>
                <Step> <StepLabel>Pessoal</StepLabel></Step>
                <Step> <StepLabel>Entrega</StepLabel></Step>
                <Step> <StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formulario[etapaAtual]}

        </>
    );
}




export default FormularioCadastro;
