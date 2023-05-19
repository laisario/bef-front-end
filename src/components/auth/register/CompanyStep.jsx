import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function isValidCNPJ(value) {
  const cnpj = value?.replace(/[^\d]+/g, "");

  if (!cnpj) return false;

  if (cnpj.length != 14) return false;

  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

function validateCnpj(cnpj, setErrMsg) {
  setErrMsg((errMsg) => ({
    ...errMsg,
    cnpj: !isValidCNPJ(cnpj) ? "Por favor, insira um CNPJ válido" : null,
  }));
}

function CompanyStep({
  handleChange,
  validateNotEmpty,
  validateEmail,
  setErrMsg,
  errMsg,
  formValues,
  setFormValues,
}) {
  return (
    <>
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
      />
      <TextField
        label="CNPJ"
        name="cnpj"
        fullWidth
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={formValues.cnpj}
        onChange={handleChange}
        onBlur={(e) =>
          validateNotEmpty(e, setErrMsg) &&
          validateCnpj(formValues.cnpj, setErrMsg)
        }
        error={!!errMsg?.cnpj}
        helperText={errMsg.cnpj}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Razão Social"
        name="razao_social"
        fullWidth
        value={formValues.razao_social}
        onChange={handleChange}
        onBlur={(e) => validateNotEmpty(e, setErrMsg)}
        error={!!errMsg?.razao_social}
        helperText={errMsg.razao_social}
        sx={{ mt: 2 }}
      />
      <TextField
        label={formValues.isento ? "Isento" : "Inscrição Estadual *"}
        fullWidth
        name="ie"
        value={formValues.ie}
        onChange={(e) => handleChange(e, setFormValues)}
        disabled={formValues.isento}
        sx={{ mt: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            value={formValues.isento}
            color="primary"
            checked={formValues.isento}
            onChange={() =>
              setFormValues((formValues) => {
                if (formValues.isento) {
                  const newFormValues = { ...formValues };
                  delete newFormValues.isento;
                  return newFormValues;
                }
                delete formValues.ie;
                return {
                  ...formValues,
                  isento: true,
                };
              })
            }
          />
        }
        label="Isento"
        sx={{ mt: 1 }}
      />
    </>
  );
}

export default CompanyStep;
