import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import context from '../context/Context';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Line} from 'react-chartjs-2'
import { Chart,
CategoryScale,
LinearScale,
LineElement,
PointElement,
Title,
Tooltip,
Legend
} from 'chart.js';

Chart.register(
CategoryScale,
LinearScale,
LineElement,
PointElement,
Title,
Tooltip,
Legend
)


function Sidebar() {

  const {countryData, cursorRef} = React.useContext(context)
  const pdfRef = React.useRef(null)

  const labels = ["2015","2016","2017","2018","2019","2020","2021", "2022"]
  const data = {
    labels: labels,
    datasets: [{
      label: 'Country Data',
      data: [65, 59, 80, 81, 56, 55, 40, countryData.child3],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }

  const cursorSize = () => {
    cursorRef.current.innerHTML = "Tab"
    gsap.to(cursorRef.current, {
      scale: 2,
      backgroundColor: "rgb(71 85 105)",
      pointerEvents: "none"
    })
  }

  const defaultCursor = () => {
    cursorRef.current.innerHTML = ""
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "#172554",
      pointerEvents:"none"
    })
  }

  const printDocument = () => {
    const input = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('download.pdf');
    });
  };

  return (
    <div id="idpdf" ref={pdfRef} className=' px-6 py-4 w-[30%] h-[100%]  bg-slate-300'>

      <div className='  flex items-center space-x-6 w-full justify-between'>
        <div className='flex '>
          <h4 className='text-xl font-bold py-2'>{countryData.child2}</h4>
        </div>
        <div onMouseEnter={cursorSize} onMouseLeave={defaultCursor}>
          <RxCross2  onClick={()=>window.location.reload()}  className='text-2xl' />
        </div>
      </div>
      <hr className='text-black' />

      {/* rank */}
      <div className='py-3'>
        <div className='flex items-center'>
          <h2 className='font-bold'>Rank: </h2>
          <p className='px-3'>{countryData.child1}/180</p>
        </div>
        <div className='flex items-center'>
          <h4 className='font-bold'>Score:</h4>
          <p className='px-3'>{countryData.child3}/100</p>
        </div>
      </div>
      <hr />
      {/* Graphs */}
      <div className='py-3'>
        <Line data={data}/>
        <br/>
        <p className='text-sm justify-center'>For Countries with morning data. the most recent your of the backdata SDC index. Score may differ slightly from the published SDG Index Score.</p>
      </div>
      <br />
      <hr />

      {/* country flag */}
      <div className='flex py-3 space-x-3 justify-center items-center '>
      <button className='text-sm rounded border-2 border-solid border-blue-950 p-4' onMouseEnter={cursorSize} onMouseLeave={defaultCursor}  onClick={printDocument}>Download profile (PDF)</button>
      </div>
       <hr />
      {/* Descrpition */}
      <div className='py-3'>
        <h2 className='font-bold'> Description</h2>
        <p className='text-sm items-center'> The overall score measures the total progress towards acheicving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.</p>
      </div>
      <br />
    </div>
  )
}

export default Sidebar