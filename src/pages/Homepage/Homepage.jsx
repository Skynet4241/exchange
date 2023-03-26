import { Container } from '@mui/joy';
import { useSelector } from 'react-redux';
import { getCurrency } from 'redux/currencySlice';
import { useFetchExchangesQuery } from 'redux/contactsApi';
import { currencies } from 'components/Layouts/Header/Header';

export const Homepage = () => {
  const currency = useSelector(getCurrency);
  const filteredCurrencies = currencies
    .filter(item => item.value !== currency)
    .map(currency => currency.value)
    .join('%2C');

  const exchange = useFetchExchangesQuery({
    symbols: filteredCurrencies,
    base: currency,
  });

  console.log(exchange);
  return (
    <>
      <Container></Container>
    </>
  );
};
