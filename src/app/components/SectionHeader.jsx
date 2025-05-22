
const SectionHeader = ({ title, subTitle }) => {
      return (
            <div className="max-w-xl mx-auto text-center py-8">
                  <span className="text-2xl font-bold text-orange-500">{subTitle}</span>
                  <h2 className="text-5xl font-bold py-5">{title}</h2>
                  <p className="capitalize font-semibold text-gray-500">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
            </div>
      )
}

export default SectionHeader
