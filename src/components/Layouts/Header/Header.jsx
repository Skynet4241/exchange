import { Box, MenuItem, TextField } from '@mui/material';
import { PAGE_NAMES } from 'components/Router/path';
import { useState } from 'react';
import { Container } from 'utils/Container';
import { useDispatch } from 'react-redux';
import {
  HeaderStyle,
  HeaderNav,
  LeftTabs,
  TabLink,
  HeaderBlock,
  HeaderLogo,
} from './Header.styled';
import { setCurrency } from 'redux/currencySlice';

export const currencies = [
  {
    value: 'USD',
    label: '$ USD',
  },
  {
    value: 'EUR',
    label: '€ EUR',
  },
  {
    value: 'UAH',
    label: '₴ UAH',
  },
];
export const Header = () => {
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0].value);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setCurrency(e.target.value));
    setCurrentCurrency(e.target.value);
  };

  return (
    <>
      <HeaderStyle>
        <Container>
          <HeaderBlock>
            <HeaderLogo to={PAGE_NAMES.homepage}>Phonebook</HeaderLogo>
            <HeaderNav>
              <LeftTabs>
                <TabLink to={PAGE_NAMES.homepage}>Home</TabLink>
                <TabLink to={PAGE_NAMES.exchange}>Exchange</TabLink>
              </LeftTabs>
            </HeaderNav>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={currentCurrency}
                  onChange={handleChange}
                  helperText="Please select your currency"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
          </HeaderBlock>
        </Container>
      </HeaderStyle>
    </>
  );
};
