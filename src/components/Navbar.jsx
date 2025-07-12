import Logo from "../assets/images/logo-hei.png";
import HEI from "../assets/images/Hei.jpg";

function Navbar(){
    return(
        <>
        <div className="w-full h-screen">
          {/* NAVBAR */}
          <nav className="bg-blue-950 w-full">
            <div className="flex h-18 items-center px-4">
              <img src={Logo} alt="logo" className="w-10 h-auto"/>
              <div className="ml-130 hidden md:flex space-x-4">
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ACCUEIL</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ACTUALITE</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">BOURSE D'ETUDES</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">INSCRIPTION</a>
                <a href="#" className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-medium text-white">INTRANET</a>
              </div>
            </div>

            {/* MENU MOBILE */}
            <div className="md:hidden px-4 py-2 space-y-2">
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">ACCUEIL</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">ACTUALITE</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">BOURSE D'ETUDES</a>
              <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white">INSCRIPTION</a>
              <a href="#" className="block bg-yellow-600 text-white px-3 py-2 rounded">INTRANET</a>
            </div>
          </nav>

          {/* HEADER */}
          <header className="relative">
            <img src={HEI} alt="hei" className="w-500 h-[600px] object-cover"/>
            <h1 className="absolute top-1/3 left-1/2 transform font-serif -translate-x-1/2 text-white text-4xl font-bold">
              Haute École Informatique
            </h1>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-lg text-center px-4">
              Une infrastructure de qualité et un programme pédagogique qui répond aux besoins du marché pour <br/>
              l'employabilité de nos étudiants
            </p>
          </header>

          <main className="bg-white py-10 px-4">
            <div className="text-center">
            </div>
          </main>
        </div>
        </>
    );
}

export default Navbar;
