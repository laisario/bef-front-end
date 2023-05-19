import { TextField } from "@mui/material";
import React from "react";

const PersonalInfoStep = ({
    formValues,
    setFormValues,
    handleChange,
    validateNotEmpty,
    validateEmail,
    validateTelefone,
    validateCpf,
    setErrMsg,
    errMsg,
}) => {
    return (
        <>
            <TextField
                label="Nome"
                fullWidth
                name="nome"
                value={formValues.nome}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) => validateNotEmpty(e, setErrMsg)}
                error={!!errMsg?.nome}
                helperText={errMsg?.nome}
            />
            <TextField
                label="Email"
                fullWidth
                name="email"
                value={formValues.email}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) =>
                    validateNotEmpty(e, setErrMsg) &&
                    validateEmail(formValues.email, setErrMsg)
                }
                error={!!errMsg?.email}
                helperText={errMsg?.email}
                sx={{ mt: 2 }}
            />
            <TextField
                label="Telefone"
                fullWidth
                name="telefone"
                value={formValues.telefone}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) =>
                    validateNotEmpty(e, setErrMsg) &&
                    validateTelefone(formValues.telefone, setErrMsg)
                }
                error={!!errMsg?.telefone}
                helperText={errMsg?.telefone}
                sx={{ mt: 2 }}
            />
            <TextField
                label="CPF"
                fullWidth
                name="cpf"
                value={formValues.cpf}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) =>
                    validateNotEmpty(e, setErrMsg) &&
                    validateCpf(formValues.cpf, setErrMsg)
                }
                error={!!errMsg?.cpf}
                helperText={errMsg.cpf}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                sx={{ mt: 2, mb: 1 }}
            />
        </>
    );
};

export default PersonalInfoStep;
