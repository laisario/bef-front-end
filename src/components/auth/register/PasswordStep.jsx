/* eslint-disable react/prop-types */
import { Grid, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const PasswordStep = ({
  formValues,
  setFormValues,
  handleChange,
  validateNotEmpty,
  validatePassword,
  validatePassword2,
  setErrMsg,
  errMsg,
  showPassword,
  handleClickShowPassword
}) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <TextField
          label="Senha"
          fullWidth
          type={showPassword.password ? 'text' : 'password'}
          name="password"
          value={formValues?.password}
          onChange={(e) => handleChange(e, setFormValues)}
          onBlur={(e) =>
            validateNotEmpty(e, setErrMsg) &&
            validatePassword(formValues.password, setErrMsg)
          }
          error={!!errMsg?.password}
          helperText={errMsg.password}
          InputProps={{
            endAdornment: ( <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => handleClickShowPassword('password')}
              edge="end"
            >
              {showPassword.password ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>)
        }}
        />
      </Grid>
      {formValues.password && (
        <Grid item xs={12} sm={12}>
          <TextField
            label="Confirmar senha"
            fullWidth
            type={showPassword.password2 ? 'text' : 'password'}
            name="password2"
            value={formValues?.password2}
            onChange={(e) => handleChange(e, setFormValues)}
            onBlur={(e) =>
              validateNotEmpty(e, setErrMsg) &&
              validatePassword2(
                formValues.password2,
                setErrMsg,
                formValues.password
              )
            }
            error={!!errMsg.password2 || !!errMsg.submit}
            helperText={errMsg.password2 || errMsg.submit}
            sx={{ mt: 2 }}
            InputProps={{
              endAdornment: ( <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword('password2')}
                edge="end"
              >
                {showPassword.password2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>)
          }}
          />
        </Grid>
      )}
    </>
  );
};

export default PasswordStep;
