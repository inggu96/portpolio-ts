import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";

export const ProfileBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [toggleActive, setToggleActive] = useState(false);

  const handleScroll = debounce(() => {
    if (toggleActive) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop < 50);
  }, 100); // 100ms 딜레이

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // 컴포넌트가 언마운트될 때 debounce 함수를 취소합니다.
    };
  }, [handleScroll, toggleActive]);

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <section className="relative pt-16 shadow bg-blueGray-50">
              <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                  {/* 첫 번째 칼럼 */}
                  <div className="w-10/12 px-12 ml-auto mr-auto md:w-6/12 lg:w-4/12 md:px-4 -mt-78">
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg">
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <h4 className="text-xl font-bold text-white">Great for your awesome project</h4>
                        <p className="mt-2 font-light text-white text-md">
                          Putting together a page has never been easier than matching together pre-made components. From
                          landing pages presentation to login areas, you can easily customise and built your pages.
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  {/* 두 번째 칼럼 */}
                  <div className="w-full px-4 md:w-6/12">
                    <div className="flex flex-wrap">
                      {/* 첫 번째 아이템 */}
                      <div className="w-full px-4 md:w-6/12">
                        <div className="relative flex flex-col mt-4">
                          <div className="flex-auto px-4 py-5">
                            <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                              <i className="fas fa-sitemap"></i>
                            </div>
                            <h6 className="mb-1 text-xl font-semibold">CSS Components</h6>
                            <p className="mb-4 text-blueGray-500">
                              Notus JS comes with a huge number of Fully Coded CSS components.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 두 번째 아이템 */}
                      <div className="w-full px-4 md:w-6/12">
                        <div className="relative flex flex-col min-w-0 mt-4">
                          <div className="flex-auto px-4 py-5">
                            <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                              <i className="fas fa-newspaper"></i>
                            </div>
                            <h6 className="mb-1 text-xl font-semibold">Pages</h6>
                            <p className="mb-4 text-blueGray-500">
                              This extension also comes with 3 sample pages. They are fully coded so you can start
                              working instantly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setToggleActive(!toggleActive)}>{toggleActive ? "고정 해제" : "고정"}</button>
    </div>
  );
};
