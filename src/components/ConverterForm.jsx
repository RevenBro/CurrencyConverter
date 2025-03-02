import React from 'react'
import CurrencySelect from './CurrencySelect'

const ConverterForm = () => {
  const [amount, setAmount] = React.useState(100);
  const [result, setResult] = React.useState("");
  const [fromCurrency, setFromCurrency] = React.useState('USD');
  const [toCurrency, setToCurrency] = React.useState('UZS');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSwapingCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const rateExchange = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rateExchange} ${toCurrency}`);
    } catch (err) {
      console.error('Error fetching exchange rate:', err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  }

  React.useEffect(() => getExchangeRate, []);

  return (
    <form className='mt-8' onSubmit={handleFormSubmit}>
        {/* Amount Input */}
        <div className='text-white flex flex-col mb-8'>
          <label className='text-white font-medium block mb-2 text-[1rem]'>Enter Amount</label>
          <input value={amount} onChange={e => setAmount(e.target.value)} type="number" className='min-h-[48px] rounded-[6px] text-[1.1rem] px-4 text-white font-medium bg-[#ffffff1a] border border-solid border-[#ffffff80] outline-0' required />
        </div>

        {/* Currency Selection */}
        <div className='text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-8'>
          <div className='flex-1'>
            <label className='text-white font-medium block mb-2 text-[1rem]'>From</label>
            <CurrencySelect defaultCurrency={fromCurrency} handleSwapCurrency={e => setFromCurrency(e.target.value)}/>
          </div>

          {/* Swap Button */}
          <div onClick={handleSwapingCurrencies} className='h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border border-solid border-[#ffffff80] bg-[#ffffff1a] hover:bg-[#ffffff4d] transition duration-200'>
            <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z" fill="#fff" />
            </svg>
          </div>

          <div className='flex-1'>
            <label className='text-white font-medium block mb-2 text-[1rem]'>To</label>
            <CurrencySelect defaultCurrency={toCurrency} handleSwapCurrency={e => setToCurrency(e.target.value)}/>
          </div>
        </div>

        {/* Submit Button */}
        <button type='submit' className={`${isLoading ? "opacity-80 pointer-events-none" : ""} w-full min-h-12 rounded-md text-[1rem] font-semibold cursor-pointer bg-white hover:bg-[#ffffffcc] transition duration-200 mb-6`}>Get Exchange</button>

        {/* Result Section */}
        <p className='text-white text-[1.1rem] font-medium text-center py-4 rounded-md bg-[#ffffff26]'>
          {isLoading ? "Getting exchange rate..." :result}
        </p>
      </form>
  )
}

export default ConverterForm