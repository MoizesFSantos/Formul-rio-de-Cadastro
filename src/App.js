import { Component } from "react/cjs/react.production.min";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from "@material-ui/core";
import'fontsource-roboto';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={onSubmit} validarCPF={validarCPF}/>
      </Container>
    );
  }
}

function onSubmit(data){
  console.log(data)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos"}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
