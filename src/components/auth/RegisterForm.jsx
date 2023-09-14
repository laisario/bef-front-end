import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CircularProgress } from '@mui/material';

import axios from "../../axios";
import AddressStep from "./register/AddressStep";
import CompanyStep from "./register/CompanyStep";
import PasswordStep from "./register/PasswordStep";
import PersonalInfoStep from "./register/PersonalInfoStep";

const isValidCPF = (value) => {
    const cpf = value?.replace(/[^\d]+/g, "");
    if (
        cpf?.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    )
        return false;
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
};

const validateEmail = (email, setErrMsg) => {
    const regex = /^\S+@\S+\.\S+$/;
    setErrMsg((errMsg) => ({
        ...errMsg,
        email: !regex.test(email) ? "Por favor, insira um email válido" : null,
    }));
};

const validateTelefone = (telefone, setErrMsg) => {
    setErrMsg((errMsg) => ({
        ...errMsg,
        telefone:
            telefone.length !== 11 && telefone.length !== 10
                ? "Por favor, insira um telefone válido"
                : null,
    }));
};

const validateCpf = (cpf, setErrMsg) => {
    setErrMsg((errMsg) => ({
        ...errMsg,
        cpf: !isValidCPF(cpf) ? "Por favor, insira um CPF válido" : null,
    }));
};

const validateCep = (cep, setErrMsg) => {
    setErrMsg((errMsg) => ({
        ...errMsg,
        cep: cep?.length !== 8 ? "Por favor, insira um CEP válido" : null,
    }));
};

const validatePassword = (password, setErrMsg) => {
    setErrMsg((errMsg) => ({
        ...errMsg,
        password:
            password?.length < 8 ? "Senha deve conter no mínimo 8 caracteres, números e caracteres especiais" : null,
    }));
};

const validatePassword2 = (password2, setErrMsg, password) => {
    setErrMsg((errMsg) => ({
        ...errMsg,
        password2: password2 !== password ? "Senhas devem ser iguais" : null,
    }));
};

const validateNotEmpty = (event, setErrMsg) => {
    setErrMsg((errMsg) => ({
        ...errMsg,
        [event.target.name]: !event.target.value?.length
            ? `O campo ${["password", "password2"].includes(event.target.name)
                ? "senha"
                : event.target.name
            } é obrigatório`
            : null,
    }));
    return true;
};

const handleChange = (e, setFormValues) => {
    setFormValues((formValues) => ({
        ...formValues,
        [e.target.name]: e.target.value,
    }));
};

const validateSubmit = (formValues, errMsg) => {
    return (
        !Object.keys(errMsg).some((key) => !!errMsg[key])
    );
};

const register = async (payload) => {
    try {
      await axios.post("/register/", payload);
      return { error: false }
    } catch (err) {
        if (!err?.response) {
            return { error: "Sem resposta do server" };
          } else if (err.response?.status === 400) {
            return { error: "Preencha todos os campos obrigatórios" };
          } else if (err.response?.status === 500) {
            return { error: "Ocorreu um erro inesperado no servidor." };
          } else {
            return { error: "Falha no registro" };
          }
    }
  };

export default function RegisterForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({});
    const [errMsg, setErrMsg] = useState({});
    const [showPassword, setShowPassword] = useState({ password: false, password2: false});
    const [isLoading, setLoading] = useState(false);

    const handleClickShowPassword = (passName) => setShowPassword((passwords) => ({ ...passwords, [passName]: !passwords[passName]}));

    useEffect(() => {
        setErrMsg({});
    }, [formValues]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (step === 3) {
            const payload = {...formValues, empresa: !formValues?.pessoaFisica}
            setLoading(true)
            const { error } = await register(payload)
            setLoading(false)
            if (error) {
                setErrMsg((errMsg) => ({
                    ...errMsg,
                    submit: error
                }));
            }
            else {
                setFormValues({});
                navigate("/login");
            }
        } else {
            setStep((step) => step + 1);
        }
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: 'center',
                backgroundColor: "#fff",
                boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
                borderRadius: "4px",
                marginBottom: '40px'
            }}
            style={{
                padding: 25,
                maxWidth: 300
            }}
        >
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
            >
                {step === 1 && (
                    <>
                        {formValues?.pessoaFisica ? (
                            <PersonalInfoStep
                                formValues={formValues}
                                setFormValues={setFormValues}
                                handleChange={handleChange}
                                errMsg={errMsg}
                                setErrMsg={setErrMsg}
                                validateEmail={validateEmail}
                                validateNotEmpty={validateNotEmpty}
                                validateTelefone={validateTelefone}
                                validateCpf={validateCpf}
                            />
                        ) : (
                            <CompanyStep
                                handleChange={(e) => handleChange(e, setFormValues)}
                                validateNotEmpty={validateNotEmpty}
                                validateEmail={validateEmail}
                                formValues={formValues}
                                setFormValues={setFormValues}
                                errMsg={errMsg}
                                setErrMsg={setErrMsg}
                            />
                        )}
                        <br />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value={formValues?.pessoaFisica}
                                    color="primary"
                                    checked={formValues?.pessoaFisica}
                                    onChange={() =>
                                        setFormValues((formValues) => {
                                            if (formValues?.pessoaFisica) {
                                                const newFormValues = { ...formValues };
                                                delete newFormValues.pessoaFisica;
                                                return newFormValues;
                                            }
                                            return {
                                                ...formValues,
                                                pessoaFisica: true,
                                            };
                                        })
                                    }
                                />
                            }
                            label="Sou uma pessoa física"
                        />
                    </>
                )}

                {step === 2 && (
                    <AddressStep
                        formValues={formValues}
                        setFormValues={setFormValues}
                        handleChange={handleChange}
                        errMsg={errMsg}
                        setErrMsg={setErrMsg}
                        validateNotEmpty={validateNotEmpty}
                        validateCep={validateCep}
                    />
                )}

                {step === 3 && (
                    <PasswordStep
                        formValues={formValues}
                        setFormValues={setFormValues}
                        handleChange={handleChange}
                        errMsg={errMsg}
                        setErrMsg={setErrMsg}
                        validateNotEmpty={validateNotEmpty}
                        validatePassword={validatePassword}
                        validatePassword2={validatePassword2}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                    />
                )}
                <Grid container spacing={2}>
                    {step > 1 && (
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => setStep((step) => step - 1)}
                                style={{ backgroundColor: '#e26443' }}
                            >
                                Voltar
                            </Button>
                        </Grid>
                    )}

                    <Grid item xs={step > 1 ? 6 : 12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ backgroundColor: '#e26443' }}
                            disabled={step === 3 && !validateSubmit(formValues, errMsg)}
                        >
                            {step === 3 ? "Cadastrar" : "Continuar"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            {step === 3 && isLoading && <CircularProgress />}
                <Grid container>
                    <Grid item sx={{ mt: 8, fontSize: 14 }}>
                        {"Já tem uma conta?"}
                        {'   '}
                        <Link to="/login" variant="subtitle2" style={{textDecoration: 'none', color: '#e26443', fontFamily: 'roboto', fontSize: 14}}>
                            Faça login!
                        </Link>
                    </Grid>
                </Grid>
        </Container>
    );
}
