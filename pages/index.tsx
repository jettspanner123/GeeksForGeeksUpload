import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useState, useRef, AbstractView } from "react";
import Image from "next/image";
import Card from "../components/Card";
import { FaMoneyBillAlt, FaLeaf, FaHandHoldingWater } from "react-icons/fa";
import {} from "react";
import { BiDownArrowAlt } from "react-icons/bi";
const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const [isShowingOne, setIsShowingOne] = useState(false);
  const [isShowingTwo, setIsShowingTwo] = useState(false);
  const [isShowingThree, setIsShowingThree] = useState(false);
  const [isShowingForu, setIsShowingFour] = useState(false);
  const [isShowingFive, setIsShowingFive] = useState(false);
  const [isShowingSix, setIsShowingSix] = useState(false);
  const myRef = useRef();

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
        <h1 className="font-bold flex text-[4rem]  text-white hero_heading transition-all duration-[1s]">
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
              {active == 0 ? (
                <div className="w-full h-full bg-[#FEFCF3] text-black">
                  <div className="h-[100%]  flex justify-around mt-10 px-10">
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
                  <div className="flex justify-between p-6 items-center gap-0 mt-10">
                    <div className="bg-green-300 w-[40%] ml-6 h-[10rem] border-[5px] border-black rounded-xl overflow-hidden">
                      1
                    </div>
                    <h1 className="text-[4rem] font-bold text-black pr-5 ">
                      Leah goti.
                    </h1>
                  </div>
                  <div className="flex justify-between p-6 items-center gap-0">
                    <h1 className="text-[4rem] font-bold text-black pl-6 ">
                      Lawda Lahsun.
                    </h1>
                    <div className="bg-green-300 w-[40%] ml-6 h-[10rem] rounded-xl overflow-hidden border-[5px] border-black">
                      1
                    </div>
                  </div>
                  <div className="flex justify-between p-6 items-center gap-0">
                    <div className="bg-green-300 w-[40%] ml-6 h-[10rem] rounded-xl overflow-hidden border-[5px] border-black">
                      1
                    </div>
                    <h1 className="text-[4rem] font-bold text-black pr-5 ">
                      Johny Sins.
                    </h1>
                  </div>
                </div>
              ) : active == 2 ? (
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  This is 3
                </div>
              ) : active == 3 ? (
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  This is 4
                </div>
              ) : active == 4 ? (
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  This is 5
                </div>
              ) : active == 5 ? (
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  This is 6
                </div>
              ) : active == 6 ? (
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  This is 7
                </div>
              ) : (
                <div className="h-full w-full bg-[#FEFCF3] text-black">
                  This is 8
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
              : " absolute top-[17rem]  left-[31rem] bg-white  border-2 border-black flex items-center shadow-2xl h-[16rem] w-[16rem] rounded-xl z-[1000]  transition-all duration-300 "
          }
        >
          <ul className="text-black text-xl w-full  ">
            <li className="text-black text-left font-bold something py-5">
              <a target="_black" href="https://google.com">
                NABARD.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
                Online Schemes.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
                Low Interest.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
                R&d.
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
              <a target="_black" href="">
                NABARD.
              </a>
            </li>
            <li className="text-black text-left font-bold   something">
              <a target="_black" href="">
                Online Schemes.
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
              <a target="_black" href="">
                Drip Irigation.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
                Mulching.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
                Crop Rotation.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
                Rainwater Harvesting.
              </a>
            </li>
            <li className="text-black text-left font-bold something">
              <a target="_black" href="">
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
              ? " absolute top-[17rem] delay-500 left-[71rem]  bg-white z-[1000] h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[71rem] bg-white z-[1000] border-2 border-black h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is third
        </div>
        <div
          onMouseOver={handleFifth}
          onMouseLeave={handleFifth}
          className={
            isShowingFive == false
              ? " absolute top-[17rem] delay-500 left-[79.5rem] bg-white z-[1000] h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[79.5rem] bg-white z-[1000] h-[25rem] border-2 border-black w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is fourth
        </div>
        <div
          onMouseOver={handleSix}
          onMouseLeave={handleSix}
          className={
            isShowingSix == false
              ? " absolute top-[17rem] delay-500 right-[10rem]  bg-white z-[1000] h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] right-[10rem] bg-white border-2 border-black z-[1000] h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is fifth
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
