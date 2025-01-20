import { useState } from "react";
import { toast, Toaster } from "sonner";
import useVerifyNumber from "tel-check-ts";

const App = () => {
  const [input, setInput] = useState<string>("");

  const handleVerification = () => {
    const { verifyNumber } = useVerifyNumber();
    const result = verifyNumber(input);
    if (result) {
      if (result.name && result.imgSrc) {
        toast(
          <div className="flex items-center gap-x-3">
            <img src={result.imgSrc} className="h-6 w-6" alt={result.name} />
            {result.message}
          </div>
        );
      } else {
        toast(result.message);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numeric values
    const numericValue = value.replace(/[^0-9]/g, "");
    setInput(numericValue);
  };

  return (
    <main className="bg-[#F8F8F8] flex h-screen flex-col justify-center items-center px-5">
      <Toaster />
      <div className="border-2 border-[#E5E5E5] bg-white flex items-center gap-x-2 justify-between w-full md:w-2/4 lg:w-1/3 my-5 p-2 rounded-full">
        <input
          type="tel"
          value={input}
          onChange={handleInputChange}
          className="w-full pl-4 outline-transparent text-sm md:text-base font-medium text-[#999999] bg-transparent"
          placeholder="Check phone number..."
          maxLength={11}
        />
        <button
          type="submit"
          className="bg-black p-4 rounded-full transition-all ease-out duration-200 hover:shadow-lg"
          onClick={handleVerification}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9H14C14 6.24 11.76 4 9 4V6C10.66 6 12 7.34 12 9ZM16 9H18C18 4.03 13.97 0 9 0V2C12.87 2 16 5.13 16 9ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.78L5.82 5.57C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2H3.53C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.4 15.62 12.2 15.21L13.4 14.01C14.25 14.25 15.12 14.4 16 14.46V15.97Z"
              fill="#f6f6f6"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-5 right-5">
        <a
          href="https://henry-agu.vercel.app/"
          target="_blank"
          className="border border-[#E5E5E5] py-2 px-4 rounded-md flex items-center gap-x-3.5"
        >
          <span className="text-sm text-[#4f4f4f]">Built by Henry Agu</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z"
              fill="#323232"
            />
          </svg>
        </a>
      </div>
    </main>
  );
};

export default App;
