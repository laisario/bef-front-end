import { Grid, TextField } from "@mui/material";

const PasswordStep = ({
  formValues,
  setFormValues,
  handleChange,
  validateNotEmpty,
  validatePassword,
  validatePassword2,
  setErrMsg,
  errMsg,
}) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <TextField
          label="Senha"
          fullWidth
          type="password"
          name="password"
          value={formValues.password}
          onChange={(e) => handleChange(e, setFormValues)}
          onBlur={(e) =>
            validateNotEmpty(e, setErrMsg) &&
            validatePassword(formValues.password, setErrMsg)
          }
          error={!!errMsg?.password}
          helperText={errMsg.password}
        />
      </Grid>
      {formValues.password && (
        <Grid item xs={12} sm={12}>
          <TextField
            label="Confirmar senha"
            fullWidth
            type="password"
            name="password2"
            value={formValues.password2}
            onChange={(e) => handleChange(e, setFormValues)}
            onBlur={(e) =>
              validateNotEmpty(e, setErrMsg) &&
              validatePassword2(
                formValues.password2,
                setErrMsg,
                formValues.password
              )
            }
            error={!!errMsg?.password2}
            helperText={errMsg.password2}
            sx={{ mt: 2 }}
          />
        </Grid>
      )}
    </>
  );
};

export default PasswordStep;
