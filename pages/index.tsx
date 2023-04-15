import type { NextPage } from "next";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiDownArrowAlt } from "react-icons/bi";
const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const [isShowingOne, setIsShowingOne] = useState(false);
  const [isShowingTwo, setIsShowingTwo] = useState(false);
  const [isShowingThree, setIsShowingThree] = useState(false);
  const [isShowingForu, setIsShowingFour] = useState(false);
  const [isShowingFive, setIsShowingFive] = useState(false);
  const [isShowingSix, setIsShowingSix] = useState(false);
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
        <h1 className="font-bold text-[4rem]  text-white hero_heading transition-all duration-[1s]">
          Agrotech
        </h1>
        <motion.div className="w-[90%] z-[1000]  mx-auto border-2  border-white rounded-xl my-10 overflow-hidden second_div transition-all duration-[1s]">
          <div className="flex overflow-hidden">
            <div className="text-white border-r-2 border-white  transition-delay: 300ms; w-[15%] h-[79vh]">
              <ul className="text-xl mt-[7rem]">
                <li
                  id="home"
                  className={active == 0 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(0)}
                >
                  HOME
                </li>
                <li
                  id="about"
                  className={active == 1 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(1)}
                >
                  ABOUT
                </li>
                <li
                  id="contacts"
                  className={active == 2 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(2)}
                >
                  CONTACT US
                </li>
                <li
                  id="contacts"
                  className={active == 3 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(3)}
                >
                  DISCUSSION GROUP
                </li>
                <li
                  id="contacts"
                  className={active == 4 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(4)}
                >
                  COMPLAINTS
                </li>
                <li
                  id="contacts"
                  className={active == 5 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(5)}
                >
                  DIGITAL ADVERTISING
                </li>
                <li
                  id="contacts"
                  className={active == 6 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(6)}
                >
                  SELF HELP GROUP
                </li>
                <li
                  id="contacts"
                  className={active == 7 ? "bg-white text-black" : "bg-black"}
                  onClick={() => handleClick(7)}
                >
                  NGO'S LISTS
                </li>
              </ul>
            </div>
            <div className=" w-[85%] transition-delay: 300ms;">
              <div className="w-full border-b-2 border-white flex justify-end">
                <ul className="flex arrow_list">
                  <motion.li
                    className="list_item first_list"
                    onClick={handleFirst}
                  >
                    Easy Loan
                    <BiDownArrowAlt size={20} className="arrow" />
                  </motion.li>
                  <li onClick={handleSecond} className="list_item second_thing">
                    Farming Techniques
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onClick={handleThird}
                    className="list_item third_thing first_list"
                  >
                    Water Saving
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onClick={handleFourth}
                    className="list_item fourth_thing first_list"
                  >
                    Government Schemes
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onClick={handleFifth}
                    className="list_item fifth_thing first_list"
                  >
                    Price of Crops
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                  <li
                    onClick={handleSix}
                    className="list_item sixth_thing first_list"
                  >
                    Transport
                    <BiDownArrowAlt size={20} className="arrow" />
                  </li>
                </ul>
              </div>
              <div className="w-full h-full "></div>
            </div>
          </div>
        </motion.div>
        <div
          className={
            isShowingOne == false
              ? " absolute top-[17rem] left-[31rem] bg-white h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[31rem] bg-white h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is sixth
        </div>
        <div
          className={
            isShowingTwo == false
              ? " absolute top-[17rem] left-[42rem] bg-white h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[42rem] bg-white h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is first
        </div>
        <div
          className={
            isShowingThree == false
              ? " absolute top-[17rem] left-[58rem] bg-white h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[58rem] bg-white h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is second
        </div>
        <div
          className={
            isShowingForu == false
              ? " absolute top-[17rem] left-[71rem] bg-white h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[71rem] bg-white h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is third
        </div>
        <div
          className={
            isShowingFive == false
              ? " absolute top-[17rem] left-[79.5rem] bg-white h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] left-[79.5rem] bg-white h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is fourth
        </div>
        <div
          className={
            isShowingSix == false
              ? " absolute top-[17rem] right-[10rem]  bg-white h-[0rem] w-[30rem] rounded-xl transition-all duration-300"
              : " absolute top-[17rem] right-[10rem] bg-white h-[25rem] w-[30rem] rounded-xl  transition-all duration-300"
          }
        >
          This is fifth
        </div>
        
      </motion.div>
    </div>
  );
};

export default Home;
