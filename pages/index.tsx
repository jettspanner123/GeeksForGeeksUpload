import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useState, useRef, AbstractView } from "react";
import Image from "next/image";
import Card from "../components/Card";
import { FaMoneyBillAlt, FaLeaf, FaHandHoldingWater } from "react-icons/fa";
import {} from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { ImCross } from "react-icons/im";
const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const [isShowingOne, setIsShowingOne] = useState(false);
  const [isShowingTwo, setIsShowingTwo] = useState(false);
  const [isShowingThree, setIsShowingThree] = useState(false);
  const [isShowingForu, setIsShowingFour] = useState(false);
  const [isShowingFive, setIsShowingFive] = useState(false);
  const [isShowingSix, setIsShowingSix] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);

  function handleClick(number: number) {
    setActive(number);
  }

  function handleFirst() {
    setIsShowingOne(!isShowingOne);
    setIsShowingTwo(false);
    setIsShowingThree(false);
    setIsShowingFour(false);
    setIsShowingFive(false);
  }
  function handleSecond() {
    setIsShowingOne(false);
    setIsShowingTwo(!isShowingTwo);
    setIsShowingThree(false);
    setIsShowingFour(false);
    setIsShowingFive(false);
  }
  function handleThird() {
    setIsShowingOne(false);
    setIsShowingTwo(false);
    setIsShowingThree(!isShowingThree);
    setIsShowingFour(false);
    setIsShowingFive(false);
  }
  function handleFourth() {
    setIsShowingOne(false);
    setIsShowingTwo(false);
    setIsShowingThree(false);
    setIsShowingFour(!isShowingForu);
    setIsShowingFive(false);
  }
  function handleFifth() {
    setIsShowingOne(false);
    setIsShowingTwo(false);
    setIsShowingThree(false);
    setIsShowingFour(false);
    setIsShowingFive(!isShowingFive);
  }
  function handleSix() {
    setIsShowingOne(false);
    setIsShowingTwo(false);
    setIsShowingThree(false);
    setIsShowingFour(false);
    setIsShowingFive(false);
    setIsShowingSix(!isShowingSix);
  }
  return (
    <div className="flex justify-center background_body  ">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 500 }}
        transition={{ duration: 1 }}
        className="  hover:bg-gray-900 shadow-2xl  creative_div overflow-hidden hover:overflow-auto px-10  mt-[17rem] backdrop:blur-[100px] rounded-[1rem] w-[40rem] hover:w-[100vw] hover:h-[100vh] hover:mt-0 hover:rounded-none transition-all duration-[1s] h-[25rem] flex  flex-col justify-center items-center "
      >
        <h1 className="font-bold  text-center flex text-[4rem]  text-white hero_heading transition-all duration-[1s]">
          FARM{<p className="special_case">EASE</p>}
        </h1>
        <motion.div className="w-[90%] z-[1000]  mx-auto border-2  border-white rounded-xl my-10 overflow-hidden second_div transition-all duration-[1s]">
          <div className="flex overflow-hidden">
            <div className="text-white border-r-2 border-white  transition-delay: 300ms; w-[15%] h-[79vh]">
              <ul className="text-xl mt-[7rem] ">
                <li
                  id="home"
                  className={
                    active == 0
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(0)}
                >
                  HOME
                </li>
                <li
                  id="about"
                  className={
                    active == 1
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(1)}
                >
                  ABOUT
                </li>
                <li
                  id="contacts"
                  className={
                    active == 2
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(2)}
                >
                  CONTACT US
                </li>
                <li
                  id="contacts"
                  className={
                    active == 3
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(3)}
                >
                  DISCUSSION GROUP
                </li>
                <li
                  id="contacts"
                  className={
                    active == 4
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(4)}
                >
                  COMPLAINTS
                </li>
                <li
                  id="contacts"
                  className={
                    active == 5
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(5)}
                >
                  DIGITAL ADVERTISING
                </li>
                <li
                  id="contacts"
                  className={
                    active == 6
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(6)}
                >
                  SELF HELP GROUP
                </li>
                <li
                  id="contacts"
                  className={
                    active == 7
                      ? "bg-[#FEFCF3] text-black"
                      : "bg-transparent list_animation"
                  }
                  onClick={() => handleClick(7)}
                >
                  NGO'S LISTS
                </li>
              </ul>
            </div>
            <div></div>
            <div className=" w-[85%] transition-delay: 300ms;">
              <div className="w-full border-b-2 border-white flex justify-end ">
                <ul className="flex arrow_list">
                  <motion.li
                    className="list_item first_list"
                    onMouseOver={handleFirst}
                    onMouseLeave={handleFirst}
                  >
                    Easy Loan
                    <BiDownArrowAlt size={20} className="arrow" />
                  </motion.li>
                  <li
                    onMouseOver={handleSecond}
                    onMouseLeave={handleSecond}
                    className="list_item second_thing"
                  >
                    Farming Techniques
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onMouseOver={handleThird}
                    onMouseLeave={handleThird}
                    className="list_item third_thing first_list"
                  >
                    Water Saving
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onMouseOver={handleFourth}
                    onMouseLeave={handleFourth}
                    className="list_item fourth_thing first_list"
                  >
                    Government Schemes
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onMouseOver={handleFifth}
                    onMouseLeave={handleFifth}
                    className="list_item fifth_thing first_list"
                  >
                    Price of Crops
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onMouseOver={handleSix}
                    onMouseLeave={handleSix}
                    className="list_item sixth_thing first_list"
                  >
                    Transport
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                </ul>
              </div>
              <div className="w-[10rem] flex items-center h-[5rem] justify-center bg-white absolute top-[6rem] login_button rounded-xl gap-0 right-[10rem]">
                <div
                  onClick={() => setLoginMenu(!loginMenu)}
                  className="bg-white p-2 px-4 hover:cursor-pointer font-bold w-full delay-500 h-full text-xl flex justify-center items-center hover:bg-black hover:text-white"
                >
                  Login
                </div>
              </div>

              {active == 0 ? (
                <div className="w-full h-full bg-[#FEFCF3] text-black">
                  <div className="h-[100%]  flex justify-around mb-10 px-10 items-center">
                    <div>
                      <div className="bg-[#1a1a1a] text-white rounded-t-xl ">
                        <FaMoneyBillAlt size={80} className="mx-6 my-2 " />
                      </div>
                      <Card
                        heading="Easy Lones to Farmers."
                        paragraph="On our website, we provide helpful guidance for farmers looking to obtain quick loans. We walk you through the procedure and assist you in obtaining the funding required to expand your agricultural enterprise."
                      />
                    </div>
                    <div>
                      <div className="bg-[#1a1a1a] text-white rounded-t-xl ">
                        <FaLeaf size={80} className="mx-6 my-2 py-2" />
                      </div>
                      <Card
                        heading="Modern Farming Techniques."
                        paragraph="Our site provides expert guidance on accessing modern farming techniques, helping farmers stay up-to-date with the latest innovations and practices."
                      />
                    </div>
                    <div>
                      <div className="bg-[#1a1a1a] text-white rounded-t-xl ">
                        <FaHandHoldingWater size={80} className="mx-6 my-2" />
                      </div>
                      <Card
                        heading="Water Saving. 
                      
                      "
                        paragraph="Our website provides useful guidance on how farmers can access water-saving methods, preserving this priceless resource and boosting agricultural productivity."
                      />
                    </div>
                  </div>
                </div>
              ) : active == 1 ? (
                // dafdfadhfadsjhfashfdkhfdhfohdsofhsodifhsohdf
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  <div className="flex justify-between p-6 items-center gap-0  px-[15rem]">
                    <div className=" w-[40%] ml-6 h-[15rem] border-[5px]   border-black rounded-xl overflow-hidden">
                      <Image
                        src="https://github.com/jettspanner123/GeeksForGeeksUpload/blob/main/pages/Image%20One.jpg?raw=true"
                        alt=""
                        objectFit="cover"
                        className="hover:scale-150 transition-all duration-300 "
                        height={250}
                        width={600}
                      />
                    </div>
                    <h1 className="text-[4rem] font-bold text-black pr-5 ">
                      One - Stop agrotech solution for farming challenge
                    </h1>
                  </div>
                  <div className="flex justify-between p-6 items-center gap-0 px-[15rem]">
                    <h1 className="text-[4rem] font-bold text-black pl-6 ">
                      Effortless access to bank loans & Government schemes
                    </h1>
                    <div></div>
                    <div className=" w-[40%] ml-6 h-[15rem] rounded-xl overflow-hidden border-[5px] border-black ">
                      <Image
                        src="https://github.com/jettspanner123/GeeksForGeeksUpload/blob/main/pages/Image%20Two.jpg?raw=true"
                        alt=""
                        className="hover:scale-150 transition-all duration-300 "
                        objectFit="cover"
                        height={250}
                        width={600}
                      />
                    </div>
                  </div>
                </div>
              ) : active == 2 ? (
                <div className="h-full flex justify-center py-[20rem] text-[4rem] font-bold w-full bg-[#FEFCF3] text-black">
                  Will be here soon.
                </div>
              ) : active == 3 ? (
                <div className="h-full flex justify-center py-[20rem] text-[4rem] font-bold w-full bg-[#FEFCF3] text-black">
                  Will be here soon.
                </div>
              ) : active == 4 ? (
                <div className="h-full flex justify-center py-[20rem] text-[4rem] font-bold w-full bg-[#FEFCF3] text-black">
                  Will be here soon.
                </div>
              ) : active == 5 ? (
                <div className="h-full flex justify-center py-[20rem] text-[4rem] font-bold w-full bg-[#FEFCF3] text-black">
                  Will be here soon.
                </div>
              ) : active == 6 ? (
                <div className="h-full flex justify-center py-[20rem] text-[4rem] font-bold w-full bg-[#FEFCF3] text-black">
                  Will be here soon.
                </div>
              ) : (
                <div className="h-full flex justify-center py-[20rem] text-[4rem] font-bold w-full bg-[#FEFCF3] text-black">
                  Will be here soon.
                </div>
              )}
            </div>
          </div>
        </motion.div>
        <div
          onMouseOver={handleFirst}
          onMouseLeave={handleFirst}
          className={
            isShowingOne == false
              ? " absolute top-[17rem] delay-500 left-[31rem] bg-white flex items-center z-[1000]  h-[0rem] w-[16rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem]  left-[31rem] bg-white  border-2 border-black flex items-center shadow-2xl h-[12rem] w-[16rem] rounded-xl z-[1000]  transition-all duration-300 "
          }
        >
          <ul className="text-black text-xl w-full  ">
            <li className="text-black text-left font-bold something py-5">
              <a target="_black" href="https://www.nabard.org/">
                NABARD.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://www.india.gov.in/my-government/schemes"
              >
                Online Schemes.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://www.india.gov.in/my-government/schemes"
              >
                Low Interest Loans.
              </a>
            </li>
          </ul>
        </div>
        <div
          onMouseOver={handleSecond}
          onMouseLeave={handleSecond}
          className={
            isShowingTwo == false
              ? " absolute top-[17rem] left-[44rem] bg-white delay-500  h-[0rem] flex items-center w-[16rem] z-[1000] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[44rem] bg-white flex items-center h-[8rem] w-[16rem] z-[1000] border-2 border-black rounded-xl  transition-all duration-300"
          }
        >
          <ul className="text-black text-xl  w-full">
            <li className="text-black text-left font-bold   something">
              <a
                target="_black"
                href="https://en.wikipedia.org/wiki/Terraforming"
              >
                Terraforming.
              </a>
            </li>
            <li className="text-black text-left font-bold   something">
              <a
                target="_black"
                href="https://sswm.info/sswm-solutions-bop-markets/improving-water-and-sanitation-services-provided-public-institutions-0/crop-selection"
              >
                Crop Rotation.
              </a>
            </li>
          </ul>
        </div>
        <div
          onMouseOver={handleThird}
          onMouseLeave={handleThird}
          className={
            isShowingThree == false
              ? " absolute top-[17rem] left-[58rem] delay-500  bg-white h-[0rem] z-[1000] w-[16rem]  rounded-xl transition-all duration-300 flex justify-center items-center"
              : " absolute top-[17rem] left-[58rem] bg-white h-[21rem] z-[1000] border-2 border-black w-[16rem] flex justify-center items-center rounded-xl  transition-all duration-300"
          }
        >
          <ul className="text-black text-xl  w-full">
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://en.wikipedia.org/wiki/Drip_irrigation"
              >
                Drip Irigation.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://www.ugaoo.com/blogs/garden-maintenance/understanding-mulching#:~:text=What%20is%20Mulching%3F,flowers%2C%20nursery%20saplings%2C%20etc."
              >
                Mulching.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/crop-rotation#:~:text=in%20Row%20Crops-,Crop%20rotation%20is%20defined%20as%20a%20%E2%80%9Csystem%20of%20growing%20different,term%20soil%20and%20farm%20management."
              >
                Crop Rotation.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://www.watercache.com/education/rainwater-harvesting-101"
              >
                Rainwater Harvesting.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a
                target="_black"
                href="https://agritech.tnau.ac.in/agriculture/agri_cropselect.html"
              >
                Crop Selection.
              </a>
            </li>
          </ul>
        </div>
        <div
          onMouseOver={handleFourth}
          onMouseLeave={handleFourth}
          className={
            isShowingForu == false
              ? " absolute top-[17rem] delay-500 left-[71rem] flex justify-center items-center  bg-white z-[1000] h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] flex justify-center items-center left-[71rem] bg-white z-[1000] border-2 border-black h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          <span className="text-[2rem] font-bold">Will be coming soon.</span>
        </div>
        <div
          onMouseOver={handleFifth}
          onMouseLeave={handleFifth}
          className={
            isShowingFive == false
              ? " absolute top-[17rem] flex justify-center items-center delay-500 left-[79.5rem] bg-white z-[1000] h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] flex justify-center items-center left-[79.5rem] bg-white z-[1000] h-[25rem] border-2 border-black w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          <span className="text-[2rem] font-bold">Will be coming soon.</span>
        </div>
        <div
          onMouseOver={handleSix}
          onMouseLeave={handleSix}
          className={
            isShowingSix == false
              ? " absolute top-[17rem] flex justify-center items-center delay-500 right-[10rem]  bg-white z-[1000] h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] flex justify-center items-center right-[10rem] bg-white border-2 border-black z-[1000] h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          <span className="text-[2rem] font-bold">Will be coming soon.</span>
        </div>
      </motion.div>
      <div
        className={
          loginMenu == true
            ? "w-[100vw] h-[100vh] bg-black  flex justify-center items-center z-[1000] absolute center_div"
            : "hidden"
        }
      >
        <div className=" w-[80vw] h-[80vh] bg-white  absolute z-[1000] rounded-xl backdrop:blur-2xl">
          <div
            className="bg-black hover:bg-white hover:text-black border-2 border-white hover:border-black transition-all duration-300 text-white flex justify-center items-center rounded-[50%] hover:cursor-pointer  w-[4rem] h-[4rem] float-right m-4 "
            onClick={() => setLoginMenu(!loginMenu)}
          >
            <ImCross size={30} />
          </div>
          <div className="w-full h-full  flex justify-between p-10 px-[8rem]">
            <div className="bg-white border-2 border-black shadow-2xl h-[80%] w-[40%] rounded-xl mt-5">
              <h1 className="font-bold text-2xl text-black mx-14 my-4 mt-10">
                Name:{" "}
              </h1>
              <div className="w-full flex justify-center items-center">
                <input className="w-[80%] border-[0.5px]  border-black p-3 text-xl rounded-xl" />
              </div>
              <h1 className="font-bold text-2xl text-black mx-14 my-4 mt-6 ">
                Email:{" "}
              </h1>
              <div className="w-full flex justify-center items-center">
                <input className="w-[80%] border-[0.5px]  border-black p-3 text-xl rounded-xl" />
              </div>
              <h1 className="font-bold text-2xl text-black mx-14 my-4 mt-6 ">
                Password:
              </h1>
              <div className="w-full flex justify-center items-center">
                <input
                  type="password"
                  className="w-[80%] border-[0.5px]  border-black p-3 text-xl rounded-xl"
                />
              </div>
              <div className="w-full flex justify-center items-center py-10 mt-2">
                <button className="w-[80%] bg-black py-4 font-bold text-xl rounded-xl hover:bg-white hover:text-black transition-all duration-200 border-2 border-white hover:border-black  text-white">
                  Submit
                </button>
              </div>
            </div>
            <div className="bg-white h-[80%] w-[40%] rounded-xl mt-5 border-2 border-black shadow-2xl">
              <h1 className="font-bold text-2xl text-black mx-14 my-4 mt-10 ">
                Enter Username:
              </h1>
              <div className="w-full flex justify-center items-center">
                <input
                  type="password"
                  className="w-[80%] border-[0.5px]  border-black p-3 text-xl rounded-xl"
                />
              </div>
              <h1 className="font-bold text-2xl text-black mx-14 my-4 mt-6 ">
                Enter Password:
              </h1>
              <div className="w-full flex justify-center items-center">
                <input
                  type="password"
                  className="w-[80%] border-[0.5px]  border-black p-3 text-xl rounded-xl"
                />
              </div>
              <h1 className="font-bold text-2xl text-black mx-14 my-4 mt-6 ">
                Confirm Password:
              </h1>
              <div className="w-full flex justify-center items-center">
                <input
                  type="password"
                  className="w-[80%] border-[0.5px]  border-black p-3 text-xl rounded-xl"
                />
              </div>
              <div className="w-full flex justify-center items-center py-10 mt-2">
                <button className="w-[80%] bg-black py-4 font-bold text-xl rounded-xl hover:bg-white hover:text-black transition-all duration-200 border-2 border-white hover:border-black  text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
