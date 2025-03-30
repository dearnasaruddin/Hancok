import React from 'react'

const Faq = () => {
  return (
    <section className='pt-9 md:pt-14 pb-32 md:pb-[200px] lg:pb-72 xl:pb-[200px] bg-primaryBg'>
      <div className="container px-2.5">
        <h2 className='max-w-[496px] font-Barlow-Condensed font-semibold text-2xl md:text-[38px] md:leading-normal text-white tracking-[3.8px] relative mb-9 md:mb-[92px] sm:after:content-[""] sm:after:w-[120px] sm:after:h-1 sm:after:bg-primary sm:after:absolute sm:after:bottom-2 sm:after:left-[134px] md:after:bottom-3 md:after:left-[366px]'>FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”</h2>

        <div className="md:h-[370px] flex gap-y-8 md:gap-y-5 justify-between content-between flex-wrap relative xl:after:content-[''] xl:after:w-[1px]  xl:after:h-full after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-dimGray xl:before:content-[''] xl:before:h-[1px] xl:before:w-full before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-dimGray">
          <div className="flex gap-x-4 md:gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>1</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-lg md:text-[22px] text-white md:mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>HOW TO DOWNLOAD THE GAME ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
          <div className="flex gap-x-4 md:gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>2</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-lg md:text-[22px] text-white md:mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>IS THERE ANY AGE RESTRICTIONS ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
          <div className="flex gap-x-4 md:gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>3</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-lg md:text-[22px] text-white md:mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>HOW TO BECOME A TEAM MEMBER ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
          <div className="flex gap-x-4 md:gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>4</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-lg md:text-[22px] text-white md:mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>IS THERE ANY REWARD FOR WINNERS ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq