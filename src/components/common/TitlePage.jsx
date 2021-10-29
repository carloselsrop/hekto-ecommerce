const TitlePage = ({ title }) => {
  return (
    <div className="w-full bg-hekto-sky-blue flex justify-center py-16">
      <div className="text-hekto-navy-blue w-10/12 sm:w-8/12 font-body text-3xl font-bold">{title}</div>
    </div>
  )
}

export default TitlePage