import Image from "next/image";
import Link from "next/link";
import Black from "@/images/Black Salt.jpeg";
import Pink from "@/images/pink.jpeg";
import White from "@/images/white.jpeg";
import aboImg from "@/images/salt2.png";
import minImg from "@/images/stock.jpg";
import custa1 from "@/images/Lamp_1.jpeg";
import custa2 from "@/images/Globe_1.jpeg";
import custa3 from "@/images/Candel_1.jpeg";



const Collection = () => {

  return (
    <section className=" md:pl-[190px]  lg:mt-[70px] "> {/* Adjust the padding-top to match the height of your navbar */}
      {/* About Us Section */}
      <header id="about" className="mb-[60px] flex flex-col items-center text-center px-4 sm:px-8  pt-[80px] md:pt-[40px]">
        <h2 className="text-xl font-bold text-blue-500 sm:text-3xl">
          ABOUT US
        </h2>
        <div className="flex flex-col sm:flex-row items-center mt-[2rem] sm:mt-[3rem] lg:mt-[6rem]">
        <p className=" text-justify text-lg sm:p-0 w-full lg:w-[100%] text-gray-500 mb-6 sm:mb-0 md:ml-[40px] lg:ml-[60px]">
  <span className="font-semibold text-blue-400">FAYCHEM</span>
  &nbsp;specializes in general trade services, concentrating on natural rock salt. We source the finest salt from Pakistan and export it in various forms, including powdered, grains, decorative, and customized possibilities, to meet the diverse needs of our clients. Committed to quality and customer satisfaction, our devoted staff provides hassle-free and reliable assistance, developing assurance and improving our valued clients&apos; experiences. We intend to establish long-term trust and enhance the global market by focusing on pure, carefully chosen salt and excellent customer service. Join us in experiencing the purity and quality of our salt products.
</p>
          <div className="relative rounded-md overflow-hidden sm:ml-[45px] mt-6 sm:mt-0 md:hidden lg:block">
            <Image
              src={aboImg}
              alt="salt image"
              className=" lg:w-[700px] lg:h-[490px] customSize2:h-[440px] customSize3:h-[380px]  customSize4:h-[325px] customSize5:h-[270px] customSize6:h-[225px] h-[280px] custom_v-md:w-[570px] sm:h-[620px] customSize1:h-[490px]  object-cover transition-transform duration-500 group-hover:scale-110"
              width={400}
              height={260}
            />
          </div>
        </div>
          <div className=" hidden md:block lg:hidden mt-5 ml-[60px] "> 
          <Image
              src={aboImg}
              alt="salt image"
              className=" h-[335px] w-[690px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
      </header>

      {/* Mission Section */}
      <header id="mission" className="mt-6 flex flex-col pt-[70px] md:pt-[30px] items-center lg:pt-[80px] lg:text-lg text-center px-4 sm:px-8">
        <h2 className="text-xl font-bold text-blue-500  sm:text-3xl">
          MISSION
        </h2>
        <div className="flex flex-col sm:pt-[50px] md:pt-0 sm:flex-row items-center mt-[2rem] lg:mt-[6.6rem] sm:mt-[3rem]">
        <p className=" text-justify sm:p-0 w-full text-gray-500 mb-6 sm:mb-0 md:ml-[40px] lg:ml-[60px]">
  Our mission is to provide the purest form of salt, directly sourced from&nbsp;
  <span className="font-semibold text-blue-400">KHEWRA SALT MINE</span> (Punjab, Pakistan) and minimally processed, to meet quality and purity standards. We dedicate ourselves to providing reliable and sustainable salt solutions to the culinary, industrial, and agricultural sectors. We aspire to meet our clients&apos; expectations, contribute to their success, and help to create a healthier, more sustainable world by cultivating innovation and ethical conduct.
</p>

          <div className="relative rounded-md overflow-hidden sm:ml-[45px] mt-6 sm:mt-0 md:hidden lg:block">
            <Image
              src={minImg}
              alt="salt image"
              className=" customSize4:h-[225px] customSize5.5:h-[185px] lg:w-[700px] lg:h-[360px] customSize2:h-[320px] customSize3:h-[275px] h-[220px] custom_v-md:w-[545px] sm:h-[355px] customSize0:h-[325px] customSize1:h-[290px]  object-cover transition-transform duration-500 group-hover:scale-110"
              width={400}
              height={310}
              />
          </div>
        </div>
        <div className=" hidden md:block lg:hidden mt-5 md:pt-[25px] ml-[45px] "> 
          <Image
              src={minImg}
              alt="salt image"
              className=" h-[280px] w-[700px] rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
      </header>

         {/*About Salt */}
         <header id="about_salt" className="mt-[4.5rem] pt-[80px] md:pt-[30px] lg:pt-[80px] flex flex-col items-center  px-4 md:pr-[2rem] lg:pl-[5.8rem] md:pl-[4.8rem]">
        <h2 className="text-xl font-bold text-blue-500 sm:text-3xl">
        About Salt
        </h2>
        <div className=" items-center mt-[2rem] sm:mt-[3rem] hover:pl-2">
        {[
      {   question: "What is Rock Salt ?", answer: "Rock salt is extracted from salt rocks. The main component of rock salt also known as halite is sodium chloride formed naturally near the area of oceans. Rock salt, to be more specific, is a type of salt that formed in the ocean and then solidified into a rock." },
      {  question: "What is Sea Salt ?", answer: "Sea salt comes from the sea, after the evaporation of water. It is available normally in the bottom of the sea and on the seashore." },
      { question: "Sea salt Vs. Rock salt ", answer: " Both rock salt and sea salt contain chemicals and minerals of nutritional importance. Rock salt sources are the salt rocks that are formed naturally near the area of oceans. While the natural source of sea salts are oceans." },
      { question: "Taste Difference Between Sea and Rock Salt ", answer: "Rock salt and Sea salt both are Different in their taste. Rock salt is more palatable and tasteful than sea salt. Its taste is pretty good and will definitely improve your taste buds. On the other hand, sea salt would be less tasty than Rock salt due to the high amount of sodium, and the taste will be strong. Sea salt is mostly used in processed foods and ready to eat food, in which frozen items and chocolates are included." },
      { question: "Which is Better for Nutrition ? ", answer: "Considering nutritional details is essential when choosing between rock salt and sea salt. While the mineral composition of these two salts is extremely similar. The minerals in both salts include minerals of sodium, calcium, potassium, iron and magnesium. Rock salt consists of many other minerals with sodium, that makes it healthier for everyone. Compared to rock salt, sea salt is thought to be somewhat more nutrient-rich." },
      { question: "Himalayan pink salt ", answer: "Himalayan pink salt is one of the best known types of rock salt .Pakistan is a blessed country with lots of natural resources, in which salt mines are also included. Khewra rock salt mines are top of the list, which are near to Himalayan range of mountains. These mines produce a huge amount of pink Himalayan salt throughout the whole year. Pakistan not only fulfils the needs of its own country but the pink Himalayan salt is also exported to other countries. There are a huge amount(large numbers) of consumers for this salt not only within Pakistan, but all over the world as well. " },
      { question: "Benefits of Rock Salt vs. Sea Salt ", answer: "Both rock salt and sea salt can be beneficial, depending on the specific needs and preferences of the individual. Rock salt is a great option for those who are looking for an aƯordable, versatile salt for everyday use, while sea salt is a good choice for those who are looking for a more flavorful as compared to healthy alternative. " },

    ].map((item, index) => (
      <div key={index}  className=" overflow-hidden text-justify transition-transform duration-300 rounded hover:bg-gray-100 hover:scale-105">
        <div>
           <big className="text-lg font-bold text-blue-400 ">{ item.question} <br/>
            <small className="text-base font-normal hover:text-blue-500 text-gray-500">{item.answer}<br/><br/></small>
           </big>
        </div>
        </div>
    ))}
        </div>
      </header>

{/* Specialty Salt Section */}
<div id="categories" className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold text-blue-500 sm:text-3xl">Products</h2>
      <p className="mx-auto mt-4 max-w-md text-gray-500 text-center">
        Discover exquisite Specialty Salts—Himalayan Pink, Black, and White...
      </p>
      <div className=" mt-16 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 lg:gap-[2rem] md:pl-[50px]">
        {[
          { id: "salt-b", src: Black, alt: "Black Salt", label: "Black Salt", content: "Mineral-rich rock salt with a distinctive smoky flavor, commonly used in South Asian cuisine.", href: "/category"},
          { id: "salt-w", src: White, alt: "White Salt", label: "White Salt", content: "Pure, crystalline salt that enhances flavor and is essential in culinary applications.", href: "/products" },
          { id: "salt-p", src: Pink, alt: "Pink Salt", label: "Pink Salt", content: "Salt from ancient sea deposits with natural minerals and a unique pink hue, ideal for gourmet dishes.", href: "/contact" },
        ].map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            id={item.id} 
            className=" md:mb-0 mb-9 relative overflow-hidden rounded-lg shadow-lg  transition-transform duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-blue-500/50" 
            passHref
          >
            <div className="block w-full bg-gray-100 h-full pb-5">
              <div className="relative h-[230px] rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-blue-500">{item.label}</h3>
                <p className="text-base font-medium text-gray-700 mt-2">{item.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

 {/* { Customized products} */}
 <div id="salt-c" className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl text-center  font-bold text-blue-500 sm:text-3xl mb-3">
        Customized Products
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-[2rem] md:pl-[50px]">
        {[
          { src: custa1, alt: "Salt Lamp", label: "Salt Lamp", content: "Salt lamp is a decorative light made from a block of Himalayan salt that gives off a warm, soothing glow." },
          { src: custa2, alt: "Salt Globe", label: "Salt Globe", content: "Globe Salt is a type of salt harvested from the Khewra Salt Mines in the Punjab region of Pakistan." },
          { src: custa3, alt: "Salt Candle Holders", label: "Salt Candle Holders", content: "Salt candle holders are decorative holders made from natural salt crystals that hold candles." },
        ].map((item, index) => (
          <Link key={index} href="/about" passHref>
            <div 
              className=" cursor-pointer mb-[20px] md:mb-0 relative overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-indigo-500 hover:shadow-blue-500/50"
            >
              <div className="block w-full h-full pb-5">
                <div className="relative h-[230px] rounded-lg overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-blue-500">{item.label}</h3>
                  <p className="text-base font-medium text-gray-700 mt-2">{item.content}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/about">
        <button className="mt-6 sm:mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-full hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out">
          See More
        </button>
      </Link>
    </div>




      {/* Related Videos Section */}
      <h2 className="text-xl font-bold mb-4 mt-[2.5rem] md:mt-[60px] text-center text-blue-500 sm:text-2xl">
        Related Videos
      </h2>
      <div className="mt-[2rem] md:mb-[90px] md:mt-[5rem] grid grid-cols-1 md:grid-cols-2 md:pl-[4.5rem] md:pr-[0.7rem]">
        <div className=" mt-[20px] md:mt-[0px] h-[350px] overflow-hidden md:rounded-[20px] md:mx-3 md:px-0 rounded-[1.5rem] px-[10px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9nWLNzZGOYA?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" mt-[30px] md:mt-[0px] h-[350px] overflow-hidden md:rounded-[20px] md:mx-3 md:px-0 rounded-[1.5rem] px-[10px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/h23rF0xrhTE?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Collection;
