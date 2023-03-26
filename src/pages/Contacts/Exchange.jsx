import {
  Box,
  Grid,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { currencies } from 'components/Layouts/Header/Header';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchExchangesQuery } from 'redux/contactsApi';
import { getCurrency } from 'redux/currencySlice';
import { Block, SectionWrap } from './Contacts.styled';
import EmailIcon from '@mui/icons-material/CurrencyExchange';

export const Contacts = () => {
  const [currencyValue, setCurrencyValue] = useState(0);

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
      <Block>
        <SectionWrap>
          <Input
            size="md"
            placeholder={currency}
            onChange={e => setCurrencyValue(e.target.value)}
            value={currencyValue === 0 ? '' : currencyValue}
          />
        </SectionWrap>
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
                          secondary={item.value * currencyValue}
                        />
                      </ListItem>
                    ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Block>
    </>
  );
};
