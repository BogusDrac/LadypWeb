import Logo from "./Logo"

function Home() {
  
  return (
    <div>
      <div className={`transition-all duration-400`}>
       < Logo />
       <div className="flex justify-center-safe items-center m-3">
        <h1 className="md:text-6xl sm:text-5xl font-extrabold font-serif">Welcome To  <span className="text-blue-800">Blomma</span> <span className="bg-gradient-to-l from-blue-50 to-blue-900 text-white">Consultancy</span></h1>
       </div>
       <div className="flex flex-row-reverse">
        <div className="container w-xl">
          <h1 className="font-bold">ADMIN</h1>
          <p className="font-extralight text-shadow-fuchsia-700">
            QuickBooks Accounts Receivable Specialist with 3+ years’ experience training 150+ clients on billing, invoicing, and payment processes. Expert in reducing debtor days and billing queries through client education. Skilled in QuickBooks Online, debt collection, and SARS eFiling .
          </p>
        </div>
        <div className="container w-xl">
          <h1 className="font-bold">ADMIN</h1>
          <p className="font-extralight text-shadow-fuchsia-700">
            QuickBooks Accounts Receivable Specialist with 3+ years’ experience training 150+ clients on billing, invoicing, and payment processes. Expert in reducing debtor days and billing queries through client education. Skilled in QuickBooks Online, debt collection, and SARS eFiling .
          </p>
        </div>
        <div className=""></div>
       </div>
      </div>
    </div>
  );
}

export default Home;
