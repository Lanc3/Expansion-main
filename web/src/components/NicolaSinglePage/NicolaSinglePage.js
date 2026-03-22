import { FiClock, FiTag } from 'react-icons/fi'
import { Link, routes } from '@redwoodjs/router'
import AnimatedBack from '../AnimatedBack/AnimatedBack'
const NicolaSinglePage = ({ article }) => {
  const paragraphs = article.body.split('\n')
  function convertToReadableDate(dateString) {
    const date = new Date(dateString)

    if (isNaN(date)) {
      console.error('Invalid date string')
      return null
    }

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }

    return date.toLocaleString(undefined, options)
  }
  return (
    <div>
      <AnimatedBack route={routes.nicolasBlog()} />
      <div className="mx-24 mb-8 rounded-xl border-b-2 border-l-2 border-r-2 border-t-2 border-expansion-orange bg-[#0D2438]  px-8 ">
        <div className="">
          <div className="flex flex-row">
            <p className="font-general-medium mb-2 mt-14 whitespace-nowrap text-left text-3xl font-bold text-expansion-orange sm:mt-20 sm:text-4xl">
              {article.title}
            </p>
          </div>

          {paragraphs.map((section) => (
            // eslint-disable-next-line react/jsx-key
            <div className="display-linebreak">
              {' '}
              <p className="font-general-regular mb-8 text-white ">
                {section}
              </p>{' '}
            </div>
          ))}

          <div className="flex">
            <div className="mb-6 mr-10  flex items-center rounded-xl border-2 border-expansion-orange p-2">
              <FiClock className="text-lg text-white " />
              <span className="font-general-regular ml-2 leading-none text-white ">
                {convertToReadableDate(article.createdAt)}
              </span>
            </div>
            <div className="mb-6 flex items-center rounded-xl border-2 border-expansion-orange p-2">
              <FiTag className="text-lg text-white " />
              <span className="font-general-regular ml-2  leading-none text-white">
                Expansion.ie
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NicolaSinglePage
