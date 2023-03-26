import { Container } from '@mui/joy';
import { useSelector } from 'react-redux';
import { getCurrency } from 'redux/currencySlice';
import { useFetchExchangesQuery } from 'redux/contactsApi';
import { currencies } from 'components/Layouts/Header/Header';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/CurrencyExchange';

export const Homepage = () => {
  const currency = useSelector(getCurrency);
  const filteredCurrencies = currencies
    .filter(item => item.value !== currency)
    .map(currency => currency.value)
    .join('%2C');

  const { data, isSuccess } = useFetchExchangesQuery({
    base: currency,
    symbols: `symbols=${filteredCurrencies}`,
  });

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Text only
              </Typography>
              <List>
                {isSuccess &&
                  Object.keys(data.rates)
                    .map(currency => {
                      return {
                        currency: currency,
                        value: data.rates[currency],
                      };
                    })
                    .map(item => (
                      <ListItem key={item.currency}>
                        <ListItemIcon>
                          <EmailIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.currency}
                          secondary={item.value}
                        />
                      </ListItem>
                    ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
