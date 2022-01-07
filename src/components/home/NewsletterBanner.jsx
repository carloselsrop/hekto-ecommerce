import newsletterImg from '../../static/img/newsletterImg.png'

const NewsletterBanner = () => {
  return (
    <div className="w-full flex justify-center font-body select-none mb-16">
      <div className="w-full h-96 flex justify-center items-center" style={{ backgroundImage: `url('${newsletterImg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="xl:w-3/12 lg:w-5/12 md:w-6/12 sm:w-7/12 w-11/12 flex flex-col items-center font-body space-y-4">
          <div className=" text-center text-2xl font-bold text-hekto-navy-blue">Get Leatest Update By Subscribe
            0ur Newslater</div>
          <button className="px-4 py-2 text-white text-sm rounded bg-hekto-pink transform hover:scale-105 transition duration-300">Shop Now</button>
        </div>
      </div>
    </div >
  )
}

export default NewsletterBanner;