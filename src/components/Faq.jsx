import React from 'react'

const Faq = () => {
  return (
    <section className='pt-14 pb-[200px] bg-primaryBg'>
      <div className="container">
        <h2 className='max-w-[496px] font-Barlow-Condensed font-semibold text-[38px] text-white tracking-[3.8px] relative mb-[92px] after:content-[""] after:w-[120px] after:h-1 after:bg-primary after:absolute after:bottom-3 after:left-[366px]'>FREQUENTLY ASKED QUESTION “QUESTION & ANSWER”</h2>

        <div className="h-[370px] flex gap-[1px] justify-between content-between flex-wrap relative after:content-[''] after:w-[1px] after:h-full after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-dimGray before:content-[''] before:h-[1px] before:w-full before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-dimGray">
          <div className="flex gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>1</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-[22px] text-white mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>HOW TO DOWNLOAD THE GAME ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
          <div className="flex gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>2</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-[22px] text-white mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>IS THERE ANY AGE RESTRICTIONS ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
          <div className="flex gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>3</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-[22px] text-white mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>HOW TO BECOME A TEAM MEMBER ?</h3>
              <p className='max-w-[426px] font-Oswald font-normal text-dimGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste,
                sed error at adipisci repellat rem maiores provident voluptatem ipsum
                autem fugiat.</p>
            </div>
          </div>
          <div className="flex gap-x-[42px] bg-primaryBg group ">
            <div className='size-[70px] font-Barlow-Condensed font-semibold text-[38px] text-white bg-primary flex justify-center items-center'>4</div>
            <div>
              <h3 className='font-Barlow-Condensed font-semibold text-[22px] text-white mb-[11px] -mt-[6px] group-hover:text-primary duration-300'>IS THERE ANY REWARD FOR WINNERS ?</h3>
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