import Image from "../assets/images/Mirado.webp"
import Image1 from "../assets/images/image1.webp"
import Image2 from "../assets/images/Cloud-et-cybersecurite.png"
import Image3 from "../assets/images/photo1.webp"
import Image4 from "../assets/images/Julien.webp"
import Image5 from "../assets/images/Rayan.webp"
import Image6 from "../assets/images/Intelligence-artificielle.png"
import Image7 from "../assets/images/Ingenierie-logicielle.png"
import Image8 from "../assets/images/Mask-group-1.webp"
import Image9 from "../assets/images/Mask-group-2.webp"
import Image10 from "../assets/images/Mask-group-3.webp"
import Image11 from "../assets/images/Java.png"
import Image12 from "../assets/images/python.png"
import Image13 from "../assets/images/JS.png"
import Image14 from "../assets/images/C.png"
import Image15 from "../assets/images/TS.png"
import Image16 from "../assets/images/docker.png"
import Image17 from "../assets/images/next.png"
import Image18 from "../assets/images/aws.png"
import Image19 from "../assets/images/serverless.png"
import Image20 from "../assets/images/react.png"
import Image21 from "../assets/images/openapi.png"
import Image22 from "../assets/images/LOGO-NEXTA.webp"
import Image23 from "../assets/images/PN_Logo_baseline_color_ENG.png"
import Image24 from "../assets/images/Yooz-2023-Logo-2.webp"
import Image27 from "../assets/images/Logo-Numer-vf.png"
import Image28 from "../assets/images/bp-logo-full-2048x663.webp"
import Image29 from "../assets/images/YIF_LOGO_512x512_BL_on_WH-1.webp"
import Image30 from "../assets/images/logo-kante-company-1.png"
import Logo from "../assets/images/logo-hei.png";
//import "@fortawesome/fontawesome-free/css/all.min.css"


function Footer(){
    return(
        <>
          <div class="flex flex-col lg:flex-row items-start gap-8 p-8 bg-white">
  
  <div class="flex flex-col lg:flex-row gap-4">
    <div class="rounded-lg overflow-hidden">
      <img src="image1.jpg" alt="Classe" class="w-72 h-64 object-cover shadow-md" />
    </div>
    <div class="rounded-lg border-4 border-white shadow-lg -mt-8 lg:mt-0 lg:-ml-8 bg-white p-2">
      <img src="" alt="Étudiants HEI" class="w-64 h-64 object-cover" />
    </div>
  </div>

  
  <div class="space-y-8 text-gray-800">
    
    <div class="flex items-start gap-4">
      <div class="text-yellow-500 text-3xl">
        🎓
      </div>
      <div>
        <h3 class="text-xl font-bold text-blue-900">+3 ans</h3>
        <p class="text-sm">
          Depuis 3 ans, nous formons ceux qui décryptent le futur, aux métiers de l’informatique.
          Nous sommes un groupe d’experts, de professionnels et de passionnés de l’informatique de Madagascar et du monde entier.
        </p>
      </div>
    </div>


    <div class="flex items-start gap-4">
      <div class="text-yellow-500 text-3xl">
        👥
      </div>
      <div>
        <h3 class="text-xl font-bold text-blue-900">+250 étudiants</h3>
        <p class="text-sm">
          Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache.
          Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
        </p>
      </div>
    </div>

    
    <div class="flex items-start gap-4">
      <div class="text-yellow-500 text-3xl">
      </div>
      <div>
        <h3 class="text-xl font-bold text-blue-900">Notre mission</h3>
        <p class="text-sm">
          Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle,
          la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
        </p>
      </div>
    </div>
  </div>
</div>

 {/**EQUIPE PEDAGOGIQUE*/}
<section class="bg-blue-600 text-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-serif mb-4">L'équipe pédagogique</h2>
    <p class="max-w-2xl mx-auto mb-12">
      Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique,
      de la cybersecurité, de l'intelligence artificielle, dont un ingénieur chez Google. Ils sont
      passionnées par l'informatique et sont engagés vers l'excellence. Nous sommes conscients
      que cette équipe est la pierre angulaire de l'employabilité de nos étudiants, elle a été 
      soigneusement sélectionnée.      
    </p>
    <div class="relative flex items-center justify-center space-x-4">
      <button class="absolute left-0 p-2 bg-white bg-opacity-20 rounded-full">‹</button>

      <div class="flex space-x-8 overflow-x-auto snap-x snap-mandatory px-2">
        <div class="bg-white text-blue-900 rounded-xl flex-shrink-0 w-64 p-6 snap-center">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 mb-4">
            <img src={Image} alt="Profil" class="w-full h-full object-cover"/>
          </div>
          <h3 class="text-xl font-bold mb-1">Mirado RAFENOMAHENINTSOA</h3>
          <p class="text-sm">Data and Business Intelligence Specialist 5+</p>
        </div>
      </div>
      
      <div class="flex space-x-8 overflow-x-auto snap-x snap-mandatory px-2">
        <div class="bg-white text-blue-900 rounded-xl flex-shrink-0 w-64 p-6 snap-center">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 mb-4">
            <img src={Image4} alt="Profil" class="w-full h-full object-cover"/>
          </div>
          <h3 class="text-xl font-bold mb-1">Julien <br/> RAJERISON</h3>
          <p class="text-sm">Data and Business Intelligence Specialist 5+</p>
        </div>
      </div>
      

      <div class="flex space-x-8 overflow-x-auto snap-x snap-mandatory px-2">
        <div class="bg-white text-blue-900 rounded-xl flex-shrink-0 w-64 p-6 snap-center">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 mb-4">
            <img src={Image5} alt="Profil" class="w-full h-full object-cover"/>
          </div>
          <h3 class="text-xl font-bold mb-1">Ryan ANDRIAMAHERY</h3>
          <p class="text-sm">Data and Business Intelligence Specialist 5+</p>
        </div>
      </div>
      
      <button class="absolute right-0 p-2 bg-white bg-opacity-20 rounded-full">›</button>
    </div>
  </div>
</section>

{/**DEBOUCHE*/}
<section class="py-16 container mx-auto px-4 flex flex-col lg:flex-row items-center">
  <div class="lg:w-1/2 ">
    <h2 class="text-4xl font-serif mb-4 text-left  text-gray-800">Quelques débouchés</h2>
    <p class="mb-6 text-left">Formez‑vous à une panoplie de métiers du numérique avec nous et venez 
      acquérir les fondements de la programmation(qui vous servira pour les différents métiers)!
      Ce sont des métiers porteurs, des métiers du présent, des métiers du futur. <br />
      <br />
      Développeur back end, développeur front end, développeurs mobile, chefs de projet, 
      exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur 
      organisationnel SSI, administrateur système et réseau, développeur de sécurité.
    </p>
  </div>
  <div class="lg:w-1/2 mt-8 lg:mt-0">
    <img src={Image1} alt="Image débouchés" class="mx-auto"/>
  </div>
</section>

{/**DOMAINES*/}
<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4 text-center text-gray-800">
    <h2 class="text-4xl font-serif mb-4">Domaines</h2>
    <p class="mb-12">Au cours de vos trois ans de formation, naviguez entre les domaines 
      les plus porteurs du numérique du présent et de l'avenir:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white rounded-xl p-6">
        <img src={Image2} alt="Cloud et cybersécurité" class="h-32 mx-auto mb-4"/>
        <h3 class="text-xl font-bold text-yellow-600 mb-2">Cloud et cybersécurité</h3>
        <p class="text-gray-700 text-sm">Maîtrisez les engrenages des outils en ligne 
          interconnectés sur les nuages(comme sur AWS). Ou encore, devenez maître de la 
          sécurisation des données en ligne ou des programmes et applications contre les 
          cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la
          cybersecurité.
        </p>
      </div>

      <div class="bg-white rounded-xl p-6">
        <img src={Image6} alt="Cloud et cybersécurité" class="h-32 mx-auto mb-4"/>
        <h3 class="text-xl font-bold text-yellow-600 mb-2">Intelligence artificielle</h3>
        <p class="text-gray-700 text-sm">Le monde de la reconnaissance faciale ou la détection d'obstacles
          par les voitures semi-automnes vous fascinent? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases 
          de l'intelligence artificielle lors de vous cours chez HEI.
        </p>
      </div>

      <div class="bg-white rounded-xl p-6">
        <img src={Image7} alt="Cloud et cybersécurité" class="h-32 mx-auto mb-4"/>
        <h3 class="text-xl font-bold text-yellow-600 mb-2">Ingénerie logicielle</h3>
        <p class="text-gray-700 text-sm">Apprenez le principe de la conception ou le 
          développement de programmes et d'aplications web et mobile et explorez le monde fascinant
          des "codes". A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, 
          créatives et innovantes à des particuliers ou des entrepises pour leurs besoins numériques.
        </p>
      </div>
    </div>
  </div>
</section>

{/**ADMISSION*/}
<section class="bg-indigo-500 text-white py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-serif mb-4">Admission</h2>
    <p class="max-w-xl mx-auto mb-8">Ouverte aux bacheliers de toutes les séries, l'admission chez HEI se fait 
      par test de niveau: une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D.
      </p> 
    <div class="grid grid-cols-1 md:grid-cols-3 mb-8 text-left text-gray-800 m-10">
      
      <div class="bg-orange-100 p-10 min-w-[100px]">
        <div class="text-4xl font-bold mb-2">01</div>
        <h3 class="font-semibold mb-2">Dépôt de dossiers</h3>
        <p class="text-gray-800 text-sm">pour les bacheliers de toutes séries sans limite d'âges</p>
      </div>

      <div class="bg-orange-200 p-10 min-w-[100px]">
        <div class="text-4xl font-bold mb-2">02</div>
        <h3 class="font-semibold mb-2">Test de niveau</h3>
        <p class="text-gray-800 text-sm">Composé d'une épreuve de français niveau B2 et d'une épreuve 
          de mathématiques niveau Terminal D
        </p>
      </div>

      <div class="bg-orange-300 p-10 min-w-[100px]">
        <div class="text-4xl font-bold mb-2">03</div>
        <h3 class="font-semibold mb-2">Inscription définitive</h3>
        <p class="text-gray-800 text-sm">(Si test réussi)</p>
      </div>
    </div>
    <div class="space-x-4">
      <a href="#" class="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition">Inscrivez‑vous ici</a>
      <a href="#" class="bg-white text-gray-800 px-6 py-2 rounded hover:bg-yellow-100 transition">Résultat concours</a>
    </div>
  </div>
</section>

{/**LE PROGRAMME PEDAGOGIQUE*/}
<section class="py-16 container mx-auto px-4">
  <div class="flex flex-col lg:flex-row items-center mb-12">
    <div class="lg:w-1/2 mb-8 lg:mb-0">
      <img src={Image3} alt="Programme pédagogique" class="rounded-lg shadow-lg mx-auto w-160"/>
    </div>
    <div class="lg:w-1/2 lg:pl-12 text-center lg:text-left mb-40">
      <h2 class="text-4xl font-serif mb-10">Le programme pédagogique</h2>
      <p class="mb-4">Suivant le système LMD, jusqu'au Master, notre formation repose 
        sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation 
        est sanctionnée par un diplôme de Licence et de Master en informatique reconnu par le MESupRes 
        de Madagascar.
      </p>
      <div class="mt-20">
      <a href="#" class="border border-gray-800 text-gray-800 px-6 py-2 rounded hover:bg-gray-800 hover:text-white transition">Notre Programme</a>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div class="bg-yellow-100 p-10 rounded-lg text-left font-bold min-w-[300px]">
      <div class="text-3xl font-bold text-yellow-600 mb-2">25%</div>
      <p class="text-2xl text-gray-800">Apprentissage théoriques en présentiel</p>
    </div>

    <div class="bg-yellow-100 p-10 rounded-lg text-left font-bold min-w-[300px]">
      <div class="text-3xl font-bold text-yellow-600 mb-2">25%</div>
      <p class="text-2xl text-gray-800">Apprentissage sur supports numériques</p>
    </div>

    <div class="bg-yellow-100 p-10 rounded-lg text-left font-bold min-w-[300px]">
      <div class="text-3xl font-bold text-yellow-600 mb-2">25%</div>
      <p class="text-2xl text-gray-800">Travaux individuels de l'étudiant</p>
    </div>

    <div class="bg-yellow-100 p-10 rounded-lg text-left font-bold min-w-[300px]">
      <div class="text-3xl font-bold text-yellow-600 mb-2">25%</div>
      <p class="text-2xl text-gray-800">Apprentissage en entrepise</p>
    </div>
  </div>

  
  {/**PHOTO DE L'EQUIPE*/}
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <img src={Image8} alt="Photo cours" class="rounded-lg shadow"/>
    <img src={Image9} alt="Photo cours" class="rounded-lg shadow"/>
    <img src={Image10} alt="Photo cours" class="rounded-lg shadow"/>
  </div>
</section>


{/** LES TECHNOS ET LANGAGES UTILISES*/}
<section class="bg-gray-100 py-16 text-gray-800">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl font-serif mb-4">Les technos et langages utilisés</h2>
    <p class="mb-8 text-gray-800">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages 
      de programmation Java et JavaScript. Ces deux langages occupent <br/> une place de choix dans le domaine 
      du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par <br /> les développeurs 
      à travers le monde.
    </p>
    
    <div class="flex flex-col gap-5">
    <div class="flex flex-wrap justify-center items-center gap-18">
      <img src={Image11} alt="Java" class="h-18"/>
      <img src={Image12} alt="Python" class="h-16"/>
      <img src={Image13} alt="JavaScript" class="h-16"/>
      <img src={Image14} alt="JavaScript" class="h-16"/>
      <img src={Image15} alt="JavaScript" class="h-16"/>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-8">
      <img src={Image16} alt="Java" class="h-8"/>
      <img src={Image17} alt="Python" class="h-8"/>
      <img src={Image18} alt="JavaScript" class="h-8"/>
      <img src={Image19} alt="JavaScript" class="h-8"/>
      <img src={Image20} alt="JavaScript" class="h-8"/>
      <img src={Image21} alt="JavaScript" class="h-10"/>
    </div>
  </div>
  </div>
</section>

{/**PARTENAIRES*/}
<section class="py-16 container mx-auto px-4 text-center text-gray-800">
  <div class="flex flex-col gap-2">
  <h2 class="text-4xl font-serif mb-4">Nos partenaires</h2>
  <p class="mb-8 text-gray-800">L’employabilité de nos étudiants se base sur la pertinence 
    de notre programme pédagogique et de la <br />composition de notre corps enseignant mais aussi 
    du soutien et la collaboration des entreprises partenaires.
  </p>
  </div>
  
  <div class="flex flex-col gap-7">
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
    <img src={Image22} alt="Partenaire 1" class="mx-auto h-10"/>
    <img src={Image23} alt="Partenaire 1" class="mx-auto h-10"/>
    <img src={Image24} alt="Partenaire 1" class="mx-auto h-10"/>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
    <img src={Image27} alt="Partenaire 1" class="mx-auto h-12"/>
    <img src={Image28} alt="Partenaire 1" class="mx-auto h-12"/>
    <img src={Image29} alt="Partenaire 1" class="mx-auto h-12"/>
    <img src={Image30} alt="Partenaire 1" class="mx-auto h-12"/>
  </div>
  </div>
</section>


<footer class="bg-blue-950 text-white px-6 py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div class="text-left px-6">
      <h1 class="text-yellow-400 font-bold text-2xl mb-4"><img src={Logo} alt="" className="w-14 h-auto"/></h1>
      <p class="text-sm leading-relaxed">
        Formation habilitée par<br />
        l’État suivant le système<br />
        LMD<br/>
        <br/>
        Habilitation MESupRes<br />
        n°31309/2023
      </p>
    </div>

    
    <div class="mt-11 text-left">
      <h2 class="font-bold text-lg mb-2">Adresse</h2>
      <p class="text-sm leading-relaxed">
        II J 161 R Ambodivoanjo<br />
        Ivandry Antananarivo<br />
        101, Madagascar
      </p>
    </div>

  
    <div class="mt-11 text-left">
      <h2 class="font-bold text-lg mb-4">Navigation</h2>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="text-yellow-400">Accueil</a></li>
        <li><a href="#">Actualités</a></li>
        <li><a href="#">Bourse d’études</a></li>
        <li><a href="#">Inscription</a></li>
      </ul>
    </div>


    <div>
      <h2 class="font-bold text-lg mb-4">Médias sociaux</h2>
      <div class="flex space-x-4">
        <a href="#" class="bg-yellow-400 rounded-full p-2 text-blue-900">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="bg-yellow-400 rounded-full p-2 text-blue-900">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="bg-yellow-400 rounded-full p-2 text-blue-900">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="text-center text-gray-400 text-sm mt-10">
    © HEI Madagascar
  </div>
</footer>



        </>
    );
}
export default Footer;