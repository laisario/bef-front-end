import { Grid, TextField, Select, MenuItem } from "@mui/material";

const siglas = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]

const AddressStep = ({
    formValues,
    setFormValues,
    handleChange,
    validateNotEmpty,
    validateCep,
    setErrMsg,
    errMsg,
}) => {
    return (
        <>
            <TextField
                label="Endereço"
                fullWidth
                name="logradouro"
                value={formValues?.logradouro}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) => validateNotEmpty(e, setErrMsg)}
                error={!!errMsg?.logradouro}
                helperText={errMsg?.logradouro}
            />
            <TextField
                label="Bairro"
                fullWidth
                name="bairro"
                value={formValues?.bairro}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) => validateNotEmpty(e, setErrMsg)}
                error={!!errMsg?.bairro}
                helperText={errMsg?.bairro}
                sx={{ mt: 2 }}

            />
            <TextField
                label="CEP"
                fullWidth
                name="cep"
                value={formValues?.cep}
                onChange={(e) => handleChange(e, setFormValues)}
                onBlur={(e) =>
                    validateNotEmpty(e, setErrMsg) &&
                    validateCep(formValues.cep, setErrMsg)
                }
                error={!!errMsg?.cep}
                helperText={errMsg?.cep}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                sx={{ mt: 2 }}
            />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Número"
                        fullWidth
                        name="numero"
                        value={formValues?.numero}
                        onChange={(e) => handleChange(e, setFormValues)}
                        onBlur={(e) => validateNotEmpty(e, setErrMsg)}
                        error={!!errMsg?.numero}
                        helperText={errMsg?.numero}
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        sx={{ mt: 2 }}
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Complemento *"
                        name="complemento"
                        value={formValues?.complemento}
                        onChange={(e) => handleChange(e, setFormValues)}
                        error={!!errMsg?.complemento}
                        helperText={errMsg?.complemento}
                        sx={{ mt: 2 }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <TextField
                        label="Cidade"
                        fullWidth
                        name="cidade"
                        value={formValues?.cidade}
                        onChange={(e) => handleChange(e, setFormValues)}
                        onBlur={(e) => validateNotEmpty(e, setErrMsg)}
                        error={!!errMsg?.cidade}
                        helperText={errMsg?.cidade}
                        sx={{ mt: 2 }}
                    />
                </Grid>

                <Grid item xs={6} sm={6}>
                    <Select
                        required
                        fullWidth
                        name="uf"
                        value={formValues?.uf}
                        onChange={(e) => handleChange(e, setFormValues)}
                        onBlur={(e) => validateNotEmpty(e, setErrMsg)}
                        error={!!errMsg?.uf}
                        helperText={errMsg?.uf}
                        displayEmpty
                        sx={{ mt: 2 }}
                    >
                        <MenuItem disabled>
                            UF
                        </MenuItem>
                        {siglas.map((sigla) => (
                            <MenuItem key={sigla} value={sigla}>
                                {sigla}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
            </Grid>
        </>
    );
};

export default AddressStep;
