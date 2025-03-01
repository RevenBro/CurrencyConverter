import './index.css'

function App() {

  return (
    <div className='py-5 px-14 rounded-lg max-w-[410px] mx-auto bg-[#02082d80] border border-solid border-[#ffffff4d] backdrop-blur-2xl shadow-md'>
      <h2 className='text-white text-[1.4rem] font-semibold text-center'>Currency converter</h2>
      <form className='mt-[35px]'>
        <div className='text-white flex mb-8 flex-col'>
          <label className='text-white font-medium block mb-2 text-[1rem]'>Enter Amount</label>
          <input type="number" className='min-h-[48px] rounded-[6px] text-[1.1rem] px-4 text-white font-medium bg-[#ffffff1a] border border-solid border-[#ffffff80] outline-0' required/>
        </div>

        <div className='text-white flex mb-8 flex-row items-center justify-between'>
          <div className='form-section'>
            <label className='text-white font-medium block mb-2 text-[1rem]'>From</label>
            <div className="flex items-center border-[#02082d80] rounded-md border border-solid bg-[#ffffff1a] px-2.5 min-h-[45px]">
              <img className='w-[25px]' src="https://flagsapi.com/US/flat/64.png" alt="Flag"/>
              <select className='outline-0 border-none bg-none text-white font-medium pr-[10px] pl-[5px] text-[1rem]'>
                <option className='text-black font-medium' value="USD" selected>USD</option>
                <option className='text-black font-medium' value="UZS">UZS</option>
                <option className='text-black font-medium' value="NPR">NPR</option>
              </select>
            </div>
          </div>

          <div className='h-10 w-10  border-[#02082d80] rounded-[50%] flex items-center justify-center cursor-pointer mt-[25px] border-[1px] border-solid bg-[#ffffff1a] ease-in transition-[0.2s] hover:bg-[#ffffff4d]'>
            <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
            fill="#fff"
            />
            </svg>
          </div>

          <div className='form-section'>
            <label className='form-label'>To</label>
            <div className="flex items-center border-[#02082d80] rounded-md border border-solid bg-[#ffffff1a] px-2.5 min-h-[45px]">
              <img className='w-[25px]' src="https://flagsapi.com/UZ/flat/64.png" alt="Flag"/>
              <select className='outline-0 border-none bg-none text-white font-medium pr-[10px] pl-[5px] text-[1rem]'>
                <option className='text-black font-medium' value="USD">USD</option>
                <option className='text-black font-medium' value="UZS" selected>UZS</option>
                <option className='text-black font-medium' value="NPR">NPR</option>
              </select>
            </div>
          </div>

        </div>
        <button type='submit' className="w-full min-h-12 rounded-md border-none outline-0 text-[1rem] font-semibold cursor-pointer bg-white transition-[0.2s] ease-in hover:bg-[#ffffffcc] mb-[20px]">Get Exchange</button>
        <p className='text-white text-[1.1rem] font-medium text-center py-[15px] rounded-md bg-[#ffffff26]'>1,000 USD = 1339000 UZS</p>
      </form>
    </div>
  )
}

export default App
