import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import countryData from '../Data/csvjson.json'
import context from '../context/Context'

const CountryTable = ({ heading, activeSearch }) => {
  const [progressBarValues, setProgressBarValues] = React.useState({})
  const [showSidebar, setShowSidebar] = React.useState(Boolean)

  const tableRef = React.useRef(null)
  const { setCountryData, cursorRef, setHandleSidebar } = React.useContext(context)

  const clickCountryRow = e => {
    setShowSidebar(true)
    setHandleSidebar(showSidebar)
        const row = e.currentTarget;
    const children = Array.from(row.children);
    
    const rowData = {};
    children.forEach((child, index) => {
      rowData[`child${index + 1}`] = child.innerText;

    });
    
    setCountryData(rowData)
    
  }

  const yearFilter = React.useMemo(() => {
    return countryData.filter(e => e.year === 2022)
  }, [])

  React.useEffect(() => {
    const newProgressBarValues = yearFilter.reduce((acc, e) => {
      if (heading === 'OVERALL') {
        acc[e.country] = e.sdg_index_score
      } else if (heading === 'NO POVERTY') {
        acc[e.country] = e.goal_1_score
      }
      else if (heading === 'ZERO HUNGERS') {
        acc[e.country] = e.goal_2_score
      }
      else if (heading === 'GOOD HEALTH') {
        acc[e.country] = e.goal_3_score
      }
      else if (heading === 'EDUCATION') {
        acc[e.country] = e.goal_4_score
      }
      else if (heading === 'EQUALITY') {
        acc[e.country] = e.goal_5_score
      }
      else if (heading === 'SANITATION') {
        acc[e.country] = e.goal_6_score
      }
      else if (heading === 'CLEAN ENERGY') {
        acc[e.country] = e.goal_7_score
      }
      else if (heading === 'ECO GROWTH') {
        acc[e.country] = e.goal_8_score
      }
      else if (heading === 'INFRASTRUCTURE') {
        acc[e.country] = e.goal_9_score
      }
      else if (heading === 'COMMUNAITIES') {
        acc[e.country] = e.goal_10_score
      }
      else if (heading === 'PRODUCTION') {
        acc[e.country] = e.goal_11_score
      }
      else if (heading === 'CLIMATE') {
        acc[e.country] = e.goal_12_score
      }
      else if (heading === 'LIFE BELOW WATER') {
        acc[e.country] = e.goal_13_score
      }
      else if (heading === 'LIFE ON LAND') {
        acc[e.country] = e.goal_14_score
      }
      else if (heading === 'PEACE') {
        acc[e.country] = e.goal_15_score
      }
      else if (heading === 'PARTNERSHIPS') {
        acc[e.country] = e.goal_16_score
      }
      return acc
    }, {})
    setProgressBarValues(newProgressBarValues)
  }, [heading, yearFilter])

  // Filter and sort the data based on activeSearch and progressBarValues
  const filteredAndSortedData = React.useMemo(() => {
    let filteredData = [...yearFilter]

    if (activeSearch) {
      filteredData = filteredData.filter(country =>
        country.country.toLowerCase().includes(activeSearch.toLowerCase())
      )
    }

    return filteredData.sort((a, b) => {
      const valueA = progressBarValues[a.country] || 0
      const valueB = progressBarValues[b.country] || 0
      return valueB - valueA  // For descending order
    })
  }, [yearFilter, progressBarValues, activeSearch])

  useGSAP(() => {
    // console.log('GSAP animation running')
    // console.log('Progress bar values:', progressBarValues)

    const progressBars = tableRef.current.querySelectorAll('.progressBar')
    // console.log('Number of progress bars found:', progressBars.length)

    gsap.to(progressBars, {
      width: (index, target) => {
        const country = target.closest('tr').querySelector('td:nth-child(2)').textContent.trim()
        const value = progressBarValues[country] || 0
        // console.log(`Animating ${country} to ${value}%`)
        return `${value}%`
      },
      duration: 4,
      ease: "power2.out"
    })
  }, [progressBarValues])

  const cursorSize = () => {
    cursorRef.current.innerHTML = "Tab"
    gsap.to(cursorRef.current, {
      scale: 3,
      backgroundColor: "rgb(71 85 105)",
      pointerEvents: "none"
    })
  }

  const defaultCursor = () => {
    cursorRef.current.innerHTML = ""
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "#172554",
      pointerEvents: "none"
    })
  }

  return (
    <>
      <div className='w-full py-5 px-3 shadow-md' style={{ "border": "1px solid #bababa" }}>
        <table ref={tableRef} className='table-auto w-full text-left'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Country</th>
              <th>Score</th>
              <th>Performance by SDG</th>
            </tr>
          </thead>

          <tbody>
            {filteredAndSortedData.map((e, index) => {
              const flag = e.country_code.slice(0, 2).toLowerCase()
              const progressBarValue = progressBarValues[e.country] || 0

              return (
                <tr onMouseEnter={cursorSize} onMouseLeave={defaultCursor} onClick={clickCountryRow } key={index} className={`${index % 2 === 0 ? 'bg-slate-300' : 'bg-transparent'}`} style={{ "borderTop": "1px solid #bababa" }}>
                  <td className='py-2 '>{index + 1}</td>
                  <td className='flex gap-2 py-2 items-center'>
                    <span> <img src={`https://flagcdn.com/16x12/${flag}.png`} alt="flag" /></span> {e.country}
                  </td>
                  <td className='py-2'>{progressBarValue}</td>
                  <td className='py-2 md:px-5 '>
                    <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded">
                      <div className="progressBar h-2 rounded-s" style={{
                        width: `${progressBarValue}%`,
                        backgroundImage: "linear-gradient(90deg,rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%)"
                      }}></div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CountryTable




